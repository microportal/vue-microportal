import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../components/About';
import Home from "../components/Home";
import Security from '../components/Security';
import Users from '../components/Users';

Vue.use(VueRouter);

const routes = [
    {
        path: '/settings',
        name: 'settings-home',
        exact: true,
        component: Home,
    },
    {
        path: '/settings/users',
        name: 'settings-users',
        component: Users,
    },
    {
        path: '/settings/security',
        name: 'settings-security',
        component: Security,
    },
    {
        path: '/settings/about',
        name: 'settings-about',
        component: About,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
