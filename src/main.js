import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import Router from "./routes"
import {createPinia} from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(Router);
app.use(pinia);
app.mount('#app');
