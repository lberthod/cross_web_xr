<template>
  <!-- Conteneur pour la scène Three.js en WebXR -->
  <div ref="sceneContainer" style="width: 100vw; height: 100vh;"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js'
import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory.js'
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
let renderer, scene, camera, cube, cubeBox, arButtonEl
let resizeListener

onMounted(() => {
  // Configuration de la scène
  scene = new THREE.Scene()
  // Pour l'AR, aucun background pour voir le flux caméra
  scene.background = null

  // Configuration de la caméra
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
  )
  
  // Création du renderer et activation de WebXR en mode AR
  renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true // Permet la transparence pour voir le flux caméra derrière
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.xr.enabled = true
  renderer.xr.setReferenceSpaceType('local') 
  sceneContainer.value.appendChild(renderer.domElement)

  // Création du bouton AR (remplaçant VRButton)
  arButtonEl = ARButton.createButton(renderer, {
    requiredFeatures: ['hand-tracking'] // Optionnel, selon votre casque
  })
  sceneContainer.value.appendChild(arButtonEl)

  // Éclairage minimal pour mieux voir les meshes
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 0.3)
  scene.add(light)

  // Création d'un cube
  const cubeSize = 0.2
  const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  cube = new THREE.Mesh(geometry, material)
  // Position initiale du cube
  cube.position.set(0, 1, -0.5)
  scene.add(cube)

  // Calcul de la bounding box pour le cube (utile pour la détection de collision)
  cubeBox = new THREE.Box3().setFromObject(cube)

  // Écoute des mises à jour du cube dans Firebase
  onValue(cubeDBRef, snapshot => {
    const data = snapshot.val()
    if (data) {
      // Mise à jour de la couleur si définie
      if (data.color) {
        const colorNum = parseInt(data.color, 16)
        cube.material.color.set(colorNum)
        console.log("Cube color updated via Firebase to:", data.color)
      }
      // Mise à jour de la position si définie
      if (data.position) {
        cube.position.set(data.position.x, data.position.y, data.position.z)
        console.log("Cube position updated via Firebase to:", data.position)
      }
    }
  })

  // Initialisation du hand tracking (WebXR)
  const handModelFactory = new XRHandModelFactory()

  // Main gauche
  const hand1 = renderer.xr.getHand(0)
  hand1.add(handModelFactory.createHandModel(hand1, 'mesh'))
  scene.add(hand1)

  // Main droite
  const hand2 = renderer.xr.getHand(1)
  hand2.add(handModelFactory.createHandModel(hand2, 'mesh'))
  scene.add(hand2)

  /**
   * Détection de collision entre les mains et le cube
   */
  let collisionActive = false
  const jointCollisionRadius = 0.02

  renderer.setAnimationLoop(() => {
    // Mise à jour de la bounding box du cube
    cubeBox.setFromObject(cube)

    // Vérification de collision pour chaque main
    let collisionDetected = false
    collisionDetected = collisionDetected || checkHandCollision(hand1)
    collisionDetected = collisionDetected || checkHandCollision(hand2)

    if (collisionDetected && !collisionActive) {
      // Génère une couleur aléatoire au format "0xRRGGBB"
      const randomColor = "0x" + Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")
      console.log("Collision detected – updating cube color to:", randomColor)
      
      // Mise à jour sur Firebase
      update(cubeDBRef, { color: randomColor })

      // Envoi d'un événement d'interaction
      push(interactionsDBRef, { timestamp: Date.now(), type: 'touch', source: 'ar' })
      collisionActive = true
    }
    if (!collisionDetected) {
      collisionActive = false
    }

    renderer.render(scene, camera)
  })

  // Fonction de détection de collision main/cube
  function checkHandCollision(hand) {
    let isColliding = false
    hand.traverse(child => {
      if (child.isMesh) {
        const jointPos = new THREE.Vector3()
        child.getWorldPosition(jointPos)
        const jointSphere = new THREE.Sphere(jointPos, jointCollisionRadius)
        if (cubeBox.intersectsSphere(jointSphere)) {
          isColliding = true
        }
      }
    })
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
  // Arrêt de l'animation
  if (renderer) renderer.setAnimationLoop(null)
  if (resizeListener) window.removeEventListener('resize', resizeListener)
  
  // Nettoyage du cube
  if (cube) {
    if (cube.geometry) cube.geometry.dispose()
    if (cube.material) {
      if (Array.isArray(cube.material)) {
        cube.material.forEach(mat => mat.dispose())
      } else {
        cube.material.dispose()
      }
    }
  }
  
  // Nettoyage du renderer
  if (renderer) {
    renderer.dispose()
    if (renderer.domElement && renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }
  
  // Retrait du bouton AR
  if (arButtonEl && arButtonEl.parentNode) {
    arButtonEl.parentNode.removeChild(arButtonEl)
  }
})
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}
</style>
