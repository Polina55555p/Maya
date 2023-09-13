import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: { isMain: true }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    props: { isMain: false }
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('../views/CatalogView.vue')
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: () => import('../views/DeliveryView.vue')
  },
  {
  path:'/cart',
  name: 'cart',
  component: () => import('../views/CartProductView.vue'),
  },
  {
  path: '/product',
  name: 'product',
  component: () => import('../views/CartView.vue'),

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
