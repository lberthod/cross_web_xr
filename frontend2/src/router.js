import { createRouter, createWebHistory } from 'vue-router'
import NormalScene from './components/NormalScene.vue'

const routes = [
  { path: '/', name: 'NormalScene', component: NormalScene },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
