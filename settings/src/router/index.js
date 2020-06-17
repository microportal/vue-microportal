import Vue from 'vue'
import VueRouter from 'vue-router'
import Settings from "../components/Settings";

Vue.use(VueRouter)

const routes = [
    {
        path: '/settings',
        name: 'settings',
        component: Settings,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
