<template>
  <q-page class="flex flex-center">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="q-pa-md q-gutter-sm">
          <q-img
            src="~assets/img/Logo.webp"
            spinner-color="white"
            style="height: 140px; max-width: 150px"
          />
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="q-gutter-y-md column">
          <q-input outlined v-model="user.email" type="email">
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
          <q-input outlined v-model="user.password" type="password">
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div class="center column	">
          <q-btn push color="primary" label="Ingresar" @click="submit" />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import { Notify } from 'quasar'


export default {
    name: "PageIndex",
    data() {
      return {
          user: {
              email: '', 
              password: '',
          }
      }
    },
    computed: {
        ...mapGetters({
            token: 'auth/authenticated'
        })
    },
    methods: {
      ...mapActions({
        login: 'auth/login'
      }),
      submit(){
          const notif = Notify.create({
            type: 'ongoing',
            position: 'top-right',
            message: 'Esperando respuesta del servidor...'
          })
          this.login(this.user).then(() => {
            if(this.token!=null){
              setTimeout(() => {
                notif({
                  type: 'positive',
                  message: 'Ingresa con exito',
                })
              }, 0)
              this.$router.replace({
                  name: 'admin'
              })
            }else{
              setTimeout(() => {
                notif({
                  type: 'negative',
                  message: 'Error en datos ingresados',
                })
              }, 0)
            }
          })
      }
    }
}

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
