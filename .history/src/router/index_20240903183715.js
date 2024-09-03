import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout/Layout.vue';
import Main from '@/views/Main.vue';
import Convert from '@/views/Convert.vue';


const routes = [
  { path: '/', component: Index },
  { path: '/convert', component: Info },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})