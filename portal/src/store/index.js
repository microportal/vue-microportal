import Vue from "vue";
import Vuex from 'vuex';

import Router from '../router';

Vue.use(Vuex);

const applications = [
    {
        name: 'dashboard',
        description: 'Dashboard',
        icon: 'fas fa-tachometer-alt',
        updated: true,
        menu: [
            {
                name: 'dashboard',
                icon: 'fas fa-home',
                to: '/dashboard/home',
            },
            {
                name: 'about',
                icon: 'fas fa-info',
                to: '/dashboard/about',
            },
        ]
    },
    {
        name: 'settings',
        description: 'Settings',
        icon: 'fas fa-cogs',
        "new": true,
        menu: [
            {
                name: 'user',
                icon: 'fas fa-users',
                to: '/settings/users',
                updated: true,
            },
            {
                name: 'security',
                icon: 'fas fa-shield-alt',
                to: '/settings/security',
                "new": true,
            },
            {
                name: 'about',
                icon: 'fas fa-info',
                to: '/settings/about',
            },
        ],
    },
];

const store = new Vuex.Store({
    state: {
        appsDrawer: false,
        leftDrawer: true,
        leftDrawerMini: true,
        rightDrawer: false,
        currentApplication: null,
        applications,
    },
    mutations: {
        changeAppsDrawer: (state, payload) => state.appsDrawer = payload,
        changeLeftDrawer: (state, payload) => {
            state.leftDrawer = payload;
            state.leftDrawerMini = !state.leftDrawer || state.leftDrawer
        },
        changeRightDrawer: (state, payload) => state.rightDrawer = payload,
        selectApplication: async (state, payload) => {
            state.currentApplication = payload;
            state.appsDrawer = false;
            await Router.push(`/${payload.name}`);
        },
    },
    actions: {
        changeAppsDrawer: ({commit}, payload) => commit("changeAppsDrawer", payload),
        changeLeftDrawer: ({commit}, payload) => {
            console.log("changing left drawer")
            commit("changeLeftDrawer", payload)
        },
        changeRightDrawer: ({commit}, payload) => commit("changeRightDrawer", payload),
        selectApplication: ({commit}, payload) => {
            const app = applications.find(a => a.name === payload)
            commit('selectApplication', app)
        },
    },
});

export default store;
