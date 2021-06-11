import {addErrorHandler, getAppStatus, registerApplication, start} from "single-spa";

const applications = [
    {name: '@microportal/portal', url: '@microportal/portal', path: '/'},
    {name: '@microportal/dashboard', url: '@microportal/dashboard', path: '/dashboard'},
    {name: '@microportal/settings', url: '@microportal/settings', path: '/settings'},
];

const register = async ({name, url, path}) => {
    await registerApplication({
        name: name,
        app: () => System.import(url),
        activeWhen: path,
    });
};

const init = async () => {
    for (const app of applications) await register(app);
};

init().catch(err => console.log(err));

start({urlRerouteOnly: true,});

addErrorHandler(err => {
    console.log(err);
    console.log(err.appOrParcelName);
    console.log(getAppStatus(err.appOrParcelName));
});
