import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import { createPinia } from "pinia";
import router from "@/router";
import api from "@/api";

const pinia = createPinia();

const app = createApp(App).use(router).use(pinia).use(store);

app.provide("$api", api);

app.mount("#app");