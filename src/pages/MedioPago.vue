<template>
  <q-page class="flex flex-center">
    <q-card flat bordered class="my-card">
      <q-card-section class="text-center">
        <div class="q-pa-md q-gutter-md  text-center			">
          <q-img
            src="~assets/img/Logo.webp"
            spinner-color="white"
            style="height: 140px; max-width: 150px"
          />
        </div>
        <h6>Numero de Compra: 123456</h6>
        <h6>Actualmente contamos con los siguientes metodos de pago</h6>
        <div class="row text-center">
          <div class="col">
          <h6>Transferencia</h6>  
          <q-img
          src="https://www.gorrascdmx.com/img/cms/Formas%20de%20Pago/02-%20Transferencia%20bancaria.png"
          :ratio="1"
        />
        <div class="1-pa-md"></div>
        <q-btn color="primary" label="Transferencia" @click="transferencia = true" />



        <q-dialog v-model="transferencia">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center">Transferencias</div>
        </q-card-section>


        <q-card-section class="q-pt-none">

          
          <p>Una vez terminada la transferencia envía tu comprobante con el número de tu compra a depositos@larajalacaja.cl </p> 

          <p><span>BANCO: </span>BANCO ESTADO</p>
          <p><span>RUT: </span>77.164.558-5</p>
          <p><span>NOMBRE: </span>SOCIEDAD LA RAJA LA CAJA SPA</p>
          <p><span>TIPO DE CUENTA: </span>CHEQUERA ELECTRÓNICA</p>
          <p><span>CUENTA: </span>42571484956</p>
          <p><span>CORREO: </span>DEPOSITOS@LARAJALACAJA.CL</p>
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
