<template>
    <q-drawer v-model="appsDrawer" side="left" behavior="mobile">
        <q-list bordered padding class="rounded-borders" style="max-width: 350px">
            <q-item-label header>Folders</q-item-label>

            <q-item v-for="app in applications" :key="app.name" clickable v-ripple @click="selectApplication(app.name)">
                <q-item-section avatar top>
                    <q-avatar :icon="app.icon" color="primary" text-color="white"/>
                </q-item-section>

                <q-item-section>
                    <q-item-label lines="1">{{app.name}}</q-item-label>
                    <q-item-label caption>{{app.description}}</q-item-label>
                </q-item-section>

                <q-item-section v-if="app.updated" side>
                    <q-badge color="accent">updated</q-badge>
                </q-item-section>
                <q-item-section v-if="app.new" side>
                    <q-badge color="positive">new</q-badge>
                </q-item-section>
            </q-item>
        </q-list>
    </q-drawer>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "AppsDrawer",
        computed: {
            ...mapState(['applications']),
            appsDrawer: {
                get() {
                    return this.$store.state.appsDrawer
                },
                set(value) {
                    this.$store.dispatch("changeAppsDrawer", value)
                }
            },
        },
        methods: {
            selectApplication(name) {
                this.$store.dispatch('selectApplication', name)
            }
        },
    }
</script>
