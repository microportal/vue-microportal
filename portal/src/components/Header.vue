<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat dense round @click="changeAppsDrawer" aria-label="Menu" icon="menu"/>

      <q-toolbar-title>
        Microportal Vue <span v-if="currentApplication">- {{ currentApplication.name }}</span>
      </q-toolbar-title>

      <q-btn dense flat round icon="menu" @click="changeRightDrawer"/>
    </q-toolbar>
  </q-header>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapState(['appsDrawer', 'rightDrawer', 'currentApplication'])
  },
  methods: {
    changeAppsDrawer() {
      this.$store.dispatch('changeAppsDrawer', !this.appsDrawer)
    },
    changeRightDrawer() {
      this.$store.dispatch('changeRightDrawer', !this.rightDrawer)
    },
  }
}
</script>
