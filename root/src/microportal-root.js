import {addErrorHandler, getAppStatus, registerApplication, start} from "single-spa";

registerApplication({
    name: '@microportal/portal',
    app: () => import('@microportal/portal'),
    activeWhen: '/',
});

registerApplication({
    name: '@microportal/dashboard',
    app: () => import('@microportal/dashboard'),
    activeWhen: '/dashboard',
});

registerApplication({
    name: '@microportal/settings',
    app: () => import('@microportal/settings'),
    activeWhen: '/settings',
});

start({urlRerouteOnly: true,});
addErrorHandler(err => {
    console.log(err);
    console.log(err.appOrParcelName);
    console.log(getAppStatus(err.appOrParcelName));
});
