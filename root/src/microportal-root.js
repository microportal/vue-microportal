import {addErrorHandler, getAppStatus, registerApplication, start} from "single-spa";

registerApplication({
    name: '@microportal/portal',
    app: () => System.import('@microportal/portal'),
    activeWhen: '/',
});

registerApplication({
    name: '@microportal/dashboard',
    app: () => System.import('@microportal/dashboard'),
    activeWhen: '/dashboard',
});

registerApplication({
    name: '@microportal/settings',
    app: () => System.import('@microportal/settings'),
    activeWhen: '/settings',
});

start({urlRerouteOnly: true,});
addErrorHandler(err => {
    console.log(err);
    console.log(err.appOrParcelName);
    console.log(getAppStatus(err.appOrParcelName));
});
