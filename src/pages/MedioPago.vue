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

        <h3 class="text-center">Detalles del Ticket  N#{{ticket.id}}</h3>

        <div class="q-pa-md">
        <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 text-center">Información Destacada</div>
      </q-card-section>

      <q-tabs v-model="info" class="text-teal">
        <q-tab label="Información Cliente" name="dos" />
        <q-tab label="Información Despacho" name="tres" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="info" animated>
        <q-tab-panel name="dos">
          <div class="row">
        <div class="col">
          Email: {{ ticket.email}}
        </div>
        <div class="col">
          Receptor: {{ ticket.receptor}}
        </div>
        <div class="col">
          Emisor: {{ ticket.emisor}}
        </div>
      </div>
      <div class="row">
        <div class="col">
          Nacimiento: {{ticket.nacimiento}}
        </div>
        <div class="col">
          Color: {{ticket.color}}
        </div>
        <div class="col">
          Excepcion: {{ticket.excepcion}}
        </div>

      </div>
      <div class="row">
        
        <div class="col">
          Mensaje: {{ticket.mensaje}}
        </div>
        
        <div class="col"></div>
      </div>
        </q-tab-panel>
        <q-tab-panel name="tres">
          <div class="row">
          <div class="col">
          Costo Envio: {{ticket.telefono}}
        </div>
        <div class="col">
          Telefono: {{ticket.telefono}}
        </div>
        
        <div class="col">
          Fecha de Despacho: {{ticket.entrega}}
        </div>
        
      </div>
      <div class="row">
        <div class="col">
          Despacho Operador: {{ticket.region}}
        </div>
        <div class="col">
          Costo Despacho: {{ticket.comuna}}
        </div>
        <div class="col">
          Valor Despacho: {{ticket.dºireccion}}
        </div>
      </div>
      <div class="row">
        <div class="col">
          Finacia el Despacho: {{ticket.region}}
        </div>
        <div class="col">
          Estado del Despacho: {{ticket.comuna}}
        </div>
        <div class="col">
          
        </div>
      </div>
      <div class="row">
        <div class="col">
          Region: {{ticket.region}}
        </div>
        <div class="col">
          Comuna: {{ticket.comuna}}
        </div>
        <div class="col">
          Direccion: {{ticket.dºireccion}}
        </div>
      </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
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
import {mapActions, mapGetters} from 'vuex';
import { Notify } from 'quasar';
import axios from "axios";


export default {
    name: "PageIndex",
    data() {
      return {
          info: 'dos',
          transferencia: false,
          ticket: {
            detalleTickets: []
          },
      }
    },
    methods:{
      obtenerTicket() {
      var url = 'tickets/'+this.$route.params.id;
      axios.get(url,this.obtenerConfig)
      .then((result)=>{
        if (result.data.success == true) {
          const element = result.data.data.ticket;
          this.ticket = {
            id: element.id,
            email: element.email,
            receptor: element.receptor,
            emisor: element.emisor,
            nacimiento: element.nacimiento,
            color: element.color,
            excepcion: element.excepcion,
            pyme: element.pyme,
            foto: element.foto, 
            mensaje: element.mensaje,
            entrega: element.entrega,
            region: element.region,
            comuna: element.comuna,
            direccion: element.direccion,
            telefono: element.telefono,
            motivo: element.motivo,
            estado: element.estado,
            tipoCaja: element.tipoCaja,
            tipoPersona: element.tipoPersona,
            categorias: element.updated_at,
            brindis: element.brindis,
            pasatiempos: element.pasatiempos,
            preferencias: element.preferencias,
            mascotas: element.mascotas,
            nombreTipoCaja: element.get_tipo_caja.nombre,
            nombreEstado: element.get_estado.nombre,
            precioCompra: element.precioCompra,
          };
        }
      })
      .catch((error) => {
          console.log(error.response.data);
      });
    },
    },
    beforeMount(){
      this.obtenerTicket();
    }
   
    
}

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 600px
</style>
