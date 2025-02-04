<template>
  <!-- Container for the Three.js scene -->
  <div ref="sceneContainer" style="width: 100vw; height: 100vh;"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { database } from '../firebase'
import { ref as dbRef, onValue, update } from 'firebase/database'

const sceneContainer = ref(null)
let renderer, scene, camera, cube, cubeBox
let raycaster, mouse
let resizeListener, onClick, onKeyDown

// Firebase Database references
const cubeDBRef = dbRef(database, 'cube')
const interactionsDBRef = dbRef(database, 'interactions')

onMounted(() => {
  // Création de la scène Three.js
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x505050)

  // Configuration de la caméra
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(0, 1.6, 3)

  // Création du renderer et ajout de son canvas au DOM
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  sceneContainer.value.appendChild(renderer.domElement)

  // Ajout d'une lumière dans la scène
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1)
  light.position.set(0, 1, 0)
  scene.add(light)

  // Création du cube
  const cubeSize = 0.2
  const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  cube = new THREE.Mesh(geometry, material)
  cube.position.set(0, 1.5, -1)
  scene.add(cube)

  // Définition d'une bounding box pour le cube
  cubeBox = new THREE.Box3().setFromObject(cube)

  // Écoute des mises à jour sur Firebase pour changer la couleur du cube
  onValue(cubeDBRef, snapshot => {
    const data = snapshot.val()
    if (data && data.color) {
      const colorNum = parseInt(data.color, 16)
      cube.material.color.set(colorNum)
      console.log("Cube color updated to:", data.color)
    }
    // Optionnel : si Firebase contient aussi la position, on peut la synchroniser
    if (data && data.position) {
      cube.position.set(data.position.x, data.position.y, data.position.z)
    }
  })

  // Configuration du raycaster pour la détection des clics
  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2()

  // Gestion du clic de la souris sur le cube
  onClick = (event) => {
    const rect = renderer.domElement.getBoundingClientRect()
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObject(cube)
    console.log("Intersects:", intersects)
    if (intersects.length > 0) {
      console.log("Cube clicked!")
      // Générer une couleur aléatoire au format "0xRRGGBB"
      const randomColor = "0x" + Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")
      console.log("Random color generated:", randomColor)
      // Mise à jour du noeud "cube" dans Firebase
      update(cubeDBRef, {
        color: randomColor
      })
    }
  }
  renderer.domElement.addEventListener('click', onClick)

  // Gestion des touches fléchées pour déplacer le cube
  onKeyDown = (event) => {
    const moveDistance = 0.1
    // Selon la touche pressée, on modifie la position du cube
    switch(event.key) {
      case "ArrowUp":
        cube.position.z -= moveDistance
        break
      case "ArrowDown":
        cube.position.z += moveDistance
        break
      case "ArrowLeft":
        cube.position.x -= moveDistance
        break
      case "ArrowRight":
        cube.position.x += moveDistance
        break
      default:
        break
    }
    // Mise à jour de la position dans Firebase
    update(cubeDBRef, {
      position: {
        x: cube.position.x,
        y: cube.position.y,
        z: cube.position.z
      }
    })
  }
  window.addEventListener('keydown', onKeyDown)

  // Boucle d'animation pour rendre la scène continuellement
  const animate = () => {
    cubeBox.setFromObject(cube)
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()

  // Gestion du redimensionnement de la fenêtre
  resizeListener = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', resizeListener)
})

onBeforeUnmount(() => {
  // Retrait des écouteurs d'événements
  if (renderer && renderer.domElement) {
    renderer.domElement.removeEventListener('click', onClick)
  }
  window.removeEventListener('keydown', onKeyDown)
  if (resizeListener) window.removeEventListener('resize', resizeListener)
  if (renderer) renderer.dispose()
  if (cube) {
    if (cube.geometry) cube.geometry.dispose()
    if (cube.material) {
      if (Array.isArray(cube.material))
        cube.material.forEach(mat => mat.dispose())
      else
        cube.material.dispose()
    }
  }
  if (renderer && renderer.domElement && renderer.domElement.parentNode) {
    renderer.domElement.parentNode.removeChild(renderer.domElement)
  }
})
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}
</style>
