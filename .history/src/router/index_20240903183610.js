import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layput/Index.vue';
import Info from '@/views/Info.vue';
import Test from '@/views/Test.vue';


const routes = [
  { path: '/', component: Index },
  { path: '/info', component: Info },
  { path: '/test', component: Test },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})