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
    caption: 'Página de Inicio',
    icon: 'home',
    link: '/admin'
  },
  {
    title: 'Formulario',
    caption: 'Formulario de las cajas',
    icon: 'list_alt',
    link: '/form'
  },
  {
    title: 'Tickets',
    caption: 'Información sobre los tickets',
    icon: 'assignment_turned_in',
    link: '/tickets'
  },
  {
    title: 'Productos',
    caption: 'forum.quasar.dev',
    icon: 'inventory_2',
    link: '/productos'
  },
  {
    title: 'Agregar producto',
    caption: 'agrega un nuevo producto al inventario disponible',
    icon: 'add_box',
    link: '/addProducto'
  },
  {
    title: 'Ingresar',
    caption: 'Ingreso al sistema',
    icon: 'login',
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
