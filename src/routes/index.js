import { createRouter, createWebHistory } from "vue-router"


const routes = [
    { path: '/', component: () => import("../pages/Home.vue") },
    { path: '/our-values', name: 'ourValues', component: () => import("../pages/OurValues.vue") },
    { path: '/join-us', name: 'joinUs', component: () => import("../pages/JoinUs.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;