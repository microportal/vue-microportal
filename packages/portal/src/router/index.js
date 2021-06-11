import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import Application from '../components/Application';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'portal-home',
        exact: true,
        component: Home,
    },
    {
        path: '/:appId',
        alias: '/:appId/*',
        name: 'portal-application',
        component: Application
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
