import { createWebHistory, createRouter } from 'vue-router'

import AdminView from './AdminView.vue'
import CartView from './CartView.vue'
import TicketView from './TicketView.vue'

const routes = [
  { path: '/', component: TicketView },
  { path: '/admin', component: AdminView },
  { path: '/cart', component: CartView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
