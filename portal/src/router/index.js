import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'portal-home',
        exact: true,
        component: Home,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
