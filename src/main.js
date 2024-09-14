import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import { createPinia } from "pinia";
import router from "@/router";
import store "@/store";
import api "@/api";

const pinia = createPinia();
Vue.prototype.$api = api;

createApp(App).use(router).use(pinia).use(store).mount('#app');
