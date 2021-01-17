<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'App',
  methods:{
    ...mapActions({
        obtenerToken: 'auth/obtenerToken',
        obtenerConfig: 'auth/obtenerConfig',
        obtenerUser: 'auth/obtenerUser'
      }),
  },
  created(){
    this.obtenerToken()
    this.obtenerConfig()
    this.obtenerUser()
  }
}
</script>
