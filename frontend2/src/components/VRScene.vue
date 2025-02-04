<template>
  <!-- Conteneur pour la scène Three.js en VR -->
  <div ref="sceneContainer" style="width: 100vw; height: 100vh;"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js'
import { database } from '../firebase'
import { ref as dbRef, onValue, update, push } from 'firebase/database'

/**
 * Références Vue & Firebase
 */
const sceneContainer = ref(null)
const cubeDBRef = dbRef(database, 'cube')
const interactionsDBRef = dbRef(database, 'interactions')

/**
 * Variables pour Three.js
 */
let renderer, scene, camera, cube, cubeBox, vrButtonEl
let resizeListener
let controller1, controller2

onMounted(() => {
  // Création de la scène
  scene = new THREE.Scene()
  // Pour le mode VR, on peut définir un background ou le laisser noir
  scene.background = new THREE.Color(0x000000)

  // Configuration de la caméra
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(0, 1.6, 3)

  // Création du renderer et activation du mode VR
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.xr.enabled = true
  renderer.xr.setReferenceSpaceType('local')
  sceneContainer.value.appendChild(renderer.domElement)

  // Ajout du bouton VR pour activer le mode VR sur le navigateur
  vrButtonEl = VRButton.createButton(renderer)
  sceneContainer.value.appendChild(vrButtonEl)

  // Ajout d'une lumière pour éclairer la scène
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1)
  light.position.set(0, 1, 0)
  scene.add(light)

  // Création du cube
  const cubeSize = 0.2
  const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  cube = new THREE.Mesh(geometry, material)
  // Position initiale du cube
  cube.position.set(0, 1, -0.5)
  scene.add(cube)

  // Calcul de la bounding box pour le cube (pour la détection de collision)
  cubeBox = new THREE.Box3().setFromObject(cube)

  // Écoute des mises à jour sur Firebase pour la couleur et la position du cube
  onValue(cubeDBRef, snapshot => {
    const data = snapshot.val()
    if (data) {
      if (data.color) {
        const colorNum = parseInt(data.color, 16)
        cube.material.color.set(colorNum)
        console.log("Cube color updated via Firebase to:", data.color)
      }
      if (data.position) {
        cube.position.set(data.position.x, data.position.y, data.position.z)
        console.log("Cube position updated via Firebase to:", data.position)
      }
    }
  })

  // Récupération des contrôleurs VR
  controller1 = renderer.xr.getController(0)
  controller2 = renderer.xr.getController(1)
  scene.add(controller1)
  scene.add(controller2)

  // Optionnel : on peut ajouter des modèles visuels aux contrôleurs pour mieux visualiser leur position
  // (ex: utiliser des Mesh simples ou importer des modèles de contrôleurs)

  // Variables pour la détection de collision
  let collisionActive = false
  const controllerCollisionRadius = 0.03

  // Boucle d'animation en mode VR
  renderer.setAnimationLoop(() => {
    // Mise à jour de la bounding box du cube
    cubeBox.setFromObject(cube)

    // Vérification de collision pour chaque contrôleur
    let collisionDetected = false
    collisionDetected = collisionDetected || checkControllerCollision(controller1)
    collisionDetected = collisionDetected || checkControllerCollision(controller2)

    if (collisionDetected && !collisionActive) {
      // Génération d'une couleur aléatoire
      const randomColor = "0x" + Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")
      console.log("Collision detected – updating cube color to:", randomColor)
      // Mise à jour dans Firebase
      update(cubeDBRef, { color: randomColor })
      // Envoi d'un événement d'interaction
      push(interactionsDBRef, { timestamp: Date.now(), type: 'touch', source: 'vr' })
      collisionActive = true
    }
    if (!collisionDetected) {
      collisionActive = false
    }
    renderer.render(scene, camera)
  })

  // Fonction de détection de collision pour un contrôleur
  function checkControllerCollision(controller) {
    let isColliding = false
    // On récupère la position du contrôleur
    const controllerPos = new THREE.Vector3()
    controller.getWorldPosition(controllerPos)
    // On crée une sphère autour du contrôleur pour simuler sa zone de collision
    const collisionSphere = new THREE.Sphere(controllerPos, controllerCollisionRadius)
    if (cubeBox.intersectsSphere(collisionSphere)) {
      isColliding = true
    }
    return isColliding
  }

  // Gestion du redimensionnement
  resizeListener = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', resizeListener)
})

onBeforeUnmount(() => {
  // Arrêt de la boucle d'animation VR
  if (renderer) renderer.setAnimationLoop(null)
  if (resizeListener) window.removeEventListener('resize', resizeListener)
  // Nettoyage du cube
  if (cube) {
    if (cube.geometry) cube.geometry.dispose()
    if (cube.material) {
      if (Array.isArray(cube.material))
        cube.material.forEach(mat => mat.dispose())
      else
        cube.material.dispose()
    }
  }
  // Nettoyage du renderer
  if (renderer) {
    renderer.dispose()
    if (renderer.domElement && renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }
  // Retrait du bouton VR
  if (vrButtonEl && vrButtonEl.parentNode) {
    vrButtonEl.parentNode.removeChild(vrButtonEl)
  }
})
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}
</style>
