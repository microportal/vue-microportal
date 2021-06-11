import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import About from '../components/About';

Vue.use(VueRouter);

const routes = [
    {
        path: '/dashboard/home',
        name: 'dashboard-home',
        component: Home,
    },
    {
        path: '/dashboard/about',
        name: 'dashboard-about',
        component: About,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
