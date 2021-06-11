<template>
  <q-drawer v-model="leftDrawer"
            show-if-above
            :mini="!leftDrawer || miniState"
            :width="200"
            :breakpoint="500"
            bordered
            content-class="bg-grey-4" v-if="currentApplication">
    <q-list>
      <q-item>
      <q-item-label header>{{ currentApplication.name }} Menu</q-item-label>
      </q-item>

      <q-item v-for="menu in currentApplication.menu" :key="menu.name" :to="menu.to" clickable v-ripple>
        <q-item-section avatar>
          <q-icon :name="menu.icon"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ menu.name }}</q-item-label>
          <q-item-label caption>{{ menu.description }}</q-item-label>
        </q-item-section>

        <q-item-section v-if="menu.updated" side>
          <q-badge color="accent">updated</q-badge>
        </q-item-section>
        <q-item-section v-if="menu.new" side>
          <q-badge color="positive">new</q-badge>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'MenuDrawer',
  data() {
    return {
      miniState: true,
    }
  },
  computed: {
    ...mapState(['currentApplication']),
    leftDrawer: {
      get() {
        return this.$store.state.leftDrawer
      },
      set(value) {
        this.$store.dispatch('changeLeftDrawer', value)
      }
    },
  },
}
</script>
