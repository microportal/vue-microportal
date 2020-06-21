<template>
    <q-layout view="hHh lpR fFf" dark>
        <Header/>

        <AppsDrawer/>
        <MenuDrawer/>
        <RightDrawer/>

        <q-page-container>
            <q-page class="flex flex-center">
                <router-view/>
            </q-page>
        </q-page-container>
        <Footer/>
    </q-layout>
</template>

<script>
    import Footer from "./components/Footer";
    import Header from "./components/Header";
    import AppsDrawer from "./components/AppsDrawer";
    import MenuDrawer from "./components/MenuDrawer";
    import RightDrawer from "./components/RightDrawer";

    export default {
        name: 'App',
        components: {
            RightDrawer,
            MenuDrawer,
            AppsDrawer,
            Header,
            Footer,
        },
        data() {
            return {
                leftDrawerOpen: false
            }
        },
        beforeMount() {
            this.$store.dispatch('selectApplication', this.$route.params.appId)
        },
    }
</script>
