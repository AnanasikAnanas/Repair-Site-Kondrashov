import HomeView from '@/views/HomeView.vue'
import CatalogView from '@/views/CatalogView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import CapitalView from '@/views/CapitalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView,
    },
    {
      path: '/capital',
      name: 'capital',
      component: CapitalView,
    },
  ],
})

export default router
