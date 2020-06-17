import {registerApplication, start} from "single-spa";

registerApplication({
    name: '@microportal/portal',
    app: async () => await System.import('@microportal/portal'),
    activeWhen: '/',
});

registerApplication({
    name: '@microportal/dashboard',
    app: async () => await System.import('@microportal/dashboard'),
    activeWhen: '/dashboard',
});

registerApplication({
    name: '@microportal/settings',
    app: async () => await System.import('@microportal/settings'),
    activeWhen: '/settings',
});

// registerApplication({
//     name: '@single-spa/welcome',
//     app: () => System.import('https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'),
//     activeWhen: '/dashboard',
// });

// start({urlRerouteOnly: true,});
start();
