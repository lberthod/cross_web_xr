<template>
  <!-- Conteneur pour la scène Three.js -->
  <div ref="sceneContainer" style="width: 100vw; height: 100vh;"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { database } from '../firebase'
import { ref as dbRef, onValue, set, update } from 'firebase/database'

// Référence du conteneur
const sceneContainer = ref(null)
// Variables Three.js
let renderer, scene, camera, raycaster, mouse, resizeListener, onKeyDown
// Stockage des cubes affichés, indexés par l'ID joueur
let cubes = {}

// Chaque joueur se voit attribuer un identifiant unique
const playerId = 'player-' + Math.random().toString(36).substr(2, 9)
// Référence Firebase pour tous les cubes
const cubesDBRef = dbRef(database, 'cubes')

// Définition des données initiales du cube du joueur
const initialCubeData = {
  position: { x: 0, y: 1.5, z: -1 },
  color: "0x00ff00",
  score: 0
}

// À l'entrée du joueur, on enregistre son cube dans Firebase
set(dbRef(database, `cubes/${playerId}`), initialCubeData)

onMounted(() => {
  // Création de la scène et configuration
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x505050)

  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(0, 1.6, 3)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  sceneContainer.value.appendChild(renderer.domElement)

  // Ajout d'une lumière
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1)
  light.position.set(0, 1, 0)
  scene.add(light)

  // Configuration pour la détection (si besoin de clics ou autres interactions)
  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2()

  // Gestion des déplacements via les touches fléchées
  onKeyDown = (event) => {
    const moveDistance = 0.1
    // On récupère les données du cube du joueur dans notre objet local
    if (!cubes[playerId]) return
    const currentPos = cubes[playerId].position
    switch(event.key) {
      case "ArrowUp":
        currentPos.z -= moveDistance
        break
      case "ArrowDown":
        currentPos.z += moveDistance
        break
      case "ArrowLeft":
        currentPos.x -= moveDistance
        break
      case "ArrowRight":
        currentPos.x += moveDistance
        break
      default:
        break
    }
    // Mise à jour locale (la synchronisation Firebase se fera via l'écouteur)
    cubes[playerId].position.set(currentPos.x, currentPos.y, currentPos.z)
    // Envoi de la nouvelle position dans Firebase
    update(dbRef(database, `cubes/${playerId}`), {
      position: currentPos
    })
  }
  window.addEventListener('keydown', onKeyDown)

  // Écoute des mises à jour de la collection "cubes" dans Firebase
  onValue(cubesDBRef, snapshot => {
    const data = snapshot.val() || {}
    // Pour chaque cube enregistré, on met à jour ou crée l'instance correspondante dans la scène
    Object.keys(data).forEach(id => {
      const cubeData = data[id]
      if (cubes[id]) {
        // Mise à jour de la position et de la couleur
        cubes[id].position.set(cubeData.position.x, cubeData.position.y, cubeData.position.z)
        cubes[id].material.color.set(parseInt(cubeData.color, 16))
      } else {
        // Création d'un nouveau cube pour ce joueur
        const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
        const material = new THREE.MeshStandardMaterial({ color: parseInt(cubeData.color, 16) })
        const cubeMesh = new THREE.Mesh(geometry, material)
        cubeMesh.position.set(cubeData.position.x, cubeData.position.y, cubeData.position.z)
        scene.add(cubeMesh)
        cubes[id] = cubeMesh
      }
    })
    // Optionnel : suppression des cubes qui ne sont plus présents dans Firebase
    Object.keys(cubes).forEach(id => {
      if (!data[id]) {
        scene.remove(cubes[id])
        delete cubes[id]
      }
    })
  })

  // Boucle d'animation
  const animate = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()

  // Gestion du redimensionnement
  resizeListener = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', resizeListener)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('resize', resizeListener)
  if (renderer) renderer.dispose()
  // Lorsqu'un joueur quitte, on retire son cube de Firebase
  set(dbRef(database, `cubes/${playerId}`), null)
})
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}
</style>
