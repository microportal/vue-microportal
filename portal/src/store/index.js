import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const applications = [
    {
        name: 'app1',
        description: 'Application 1',
        icon: 'fas fa-ambulance',
        updated: true,
        menu: [
            {
                name: 'dashboard',
                icon: 'dashboard',
                to: '/view-doggos/dashboard',
            },
            {
                name: 'agenda',
                icon: 'event',
                to: '/view-doggos/about',
            },
        ]
    },
    {
        name: 'app2',
        description: 'Application 2',
        icon: 'fas fa-ambulance',
        updated: false,
        menu: [
            {
                name: 'dashboard',
                icon: 'dashboard',
                to: '/app2/dashboard',
            },
            {
                name: 'unidade',
                icon: 'fas fa-hospital',
                to: '/app2/unidade',
            },
            {
                name: 'profissional',
                icon: 'fas fa-stethoscope',
                to: '/app2/profissional',
            },
        ]
    },
];

const store = new Vuex.Store({
    state: {
        appsDrawer: false,
        leftDrawer: true,
        rightDrawer: false,
        currentApplication: null,
        applications,
    },
    mutations: {
        changeAppsDrawer: (state, payload) => state.appsDrawer = payload,
        changeLeftDrawer: (state, payload) => state.leftDrawer = payload,
        changeRightDrawer: (state, payload) => state.rightDrawer = payload,
        selectApplication: (state, payload) => state.currentApplication = payload,
    },
    actions: {
        changeAppsDrawer: ({commit}, payload) => commit("changeAppsDrawer", payload),
        changeLeftDrawer: ({commit}, payload) => commit("changeLeftDrawer", payload),
        changeRightDrawer: ({commit}, payload) => commit("changeRightDrawer", payload),
        selectApplication: ({commit}, payload) => {
            const app = applications.find(a => a.name === payload)
            commit('selectApplication', app)
        },
    },
});

export default store;
