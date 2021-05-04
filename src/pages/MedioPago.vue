<template>
  <q-page class="flex flex-center">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="q-pa-md q-gutter-md  text-center			">
          <q-img
            src="~assets/img/Logo.webp"
            spinner-color="white"
            style="height: 140px; max-width: 150px"
          />
        </div>
        <h6>Actualmente contamos con los siguientes metodos de pago</h6>
        <div class="row text-center">
          <div class="col">
          <h6>Transferencia o Deposito</h6>  
          <q-img
          src="http://sps-sport.com/img/cms/Todas%20las%20tiendas/Pagina%20Devoluciones/pago-transferencia-bancaria-sps-sport-tienda-deportes-online.jpg"
          :ratio="1"
        />
        <div class="1-pa-md"></div>
        <q-btn color="primary" label="Transferencia" @click="transferencia = true" />



        <q-dialog v-model="transferencia">
      <q-card>
        <q-card-section>
          <div class="text-h6">Transferencias y Depositos</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Ingresar los datos de la cuenta que se dispuso para los depositos
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
        </div>
        <div class="col">
          <h6>Webpay</h6>
          <q-img
          src="https://surempresa.com/38-large_default/webpay-cl.jpg"
          :ratio="1"
        />
        <q-btn color="primary" label="WebPay" />
        </div>
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
          transferencia: false
      }
    },
   
    
}

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 600px
</style>
