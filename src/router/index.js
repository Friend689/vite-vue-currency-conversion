import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/views/Main.vue';
import Convert from '@/views/Convert.vue';


const routes = [
  { path: '/', component: Main },
  { path: '/convert', component: Convert },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})