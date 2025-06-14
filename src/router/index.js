import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product',
      component: () => import('../views/product.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/catalog.vue'),
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/category.vue'),
    },
  ],
})

export default router
