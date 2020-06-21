<template>
    <q-footer elevated class="bg-grey-8 text-white">
        <q-toolbar>
            <q-toolbar-title>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                </q-avatar>
            </q-toolbar-title>
            <div>Microportal v{{ appVersion }}</div>
        </q-toolbar>
    </q-footer>
</template>

<script>
    const appVersion = process.env.VUE_APP_VERSION;
    export default {
        name: "Footer",
        data() {
            return {
                appVersion,
            }
        },
    }
</script>
