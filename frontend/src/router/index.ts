import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ContentViewer from '../views/ContentViewer.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/viewer/:id',
    name: 'ContentViewer',
    component: ContentViewer
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router