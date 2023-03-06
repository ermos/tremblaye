import VueRouter from "vue-router"


const routes = [
    { path: '/', component: () => import("../pages/Home.vue") },
]

export default VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})