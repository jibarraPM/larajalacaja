<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          La Raja La Caja
        </q-toolbar-title>

        <div>Version {{ '0.2' }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Enlaces
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Inicio',
    caption: 'Información general',
    icon: 'home',
    link: '/admin'
  },
  {
    title: 'form',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: '/form'
  },
  {
    title: 'tickets',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '/tickets'
  },
  {
    title: 'productos',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: '/productos'
  },
  {
    title: 'addProducto',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '/addProducto'
  },
  {
    title: 'login',
    caption: '@QuasarFramework',
    icon: 'public',
    link: '/login'
  },
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
