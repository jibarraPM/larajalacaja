<template>
  
  <q-page class="">

    <q-toolbar inset>
        <q-toolbar-title> Nota del ticket </q-toolbar-title>
      </q-toolbar>

    <div class="q-pa-md q-gutter-sm">

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
          nacimiento: {{ticket.nacimiento}}
        </div>
        <div class="col">
          color: {{ticket.color}}
        </div>
        <div class="col">
          Excepcion: {{ticket.excepcion}}
        </div>
      </div>

      <div class="row">
        <div class="col">
          pyme: {{ticket.pyme}}
        </div>
        <div class="col">
          mensaje: {{ticket.mensaje}}
        </div>
        <div class="col">
          entrega: {{ticket.entrega}}
        </div>
      </div>

      <div class="row">
        <div class="col">
          region: {{ticket.region}}
        </div>
        <div class="col">
          comuna: {{ticket.comuna}}
        </div>
        <div class="col">
          direccion: {{ticket.direccion}}
        </div>
      </div>

      <div class="row">
        <div class="col">
          telefono: {{ticket.telefono}}
        </div>
        <div class="col">
          valor: {{ticket.valor}}
        </div>
        <div class="col">
          cantidad producto: {{ticket.cantidadProducto}}
        </div>
      </div>

    </div>
    
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" icon="inventory_2" label="Agregar Producto"/>
    </div>

    <div class="q-pa-md">
    <q-table
      title="Lista de productos"
      :data="ticket.detalleTickets"
      :columns="columns2"
      row-key="id"
    >

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="primary" round dense @click="editDetalle(props.cols[0].value)" icon="edit"/>
            <q-btn size="sm" color="primary" round dense @click="deleteDetalle(props.cols[0].value)" icon="delete"/>
          </q-td>
          
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
    
    <div class="q-pa-md q-gutter-sm" >
      <div class="q-gutter-sm">
        <q-select
          v-model="idProducto"
          :options="opciones"
          label="Seleccione el producto"
          @input="actualizarProducto()"
        />
      </div>
    </div> 

    <div class="row">
      <div class="col">
        Nombre: {{ producto.nombre }}
      </div>
      <div class="col">
        cantidad inventario: {{ producto.cantidad }}
      </div>
      <div class="col">
        precioCompra: {{ producto.precioCompra }}
      </div>
      <div class="col">
        precioVenta: {{ producto.precioVenta }}
      </div>
    </div>

    <div class="q-pa-md q-gutter-sm">

           <q-input
              outlined
              v-model="cantidad"
              type="text"
              placeholder="Cantidad de producto"
            >
              <template v-slot:prepend>
                <q-icon name="inventory_2
" />
              </template>
            </q-input>
      
    </div>
    <q-btn @click="agregarProducto()" color="primary" label="Agregar Producto" />
  </div>

  
  </q-page>
</template>

<script>
import axios from "axios";
import { Notify } from 'quasar';

export default {
  name: 'PageIndex',
  data () {
    return {
      columns2: [
        {
          name: 'desc',
          required: true,
          label: 'ID',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'nombre', align: 'center', label: 'Nombre', field: 'nombre', sortable: true },
        { name: 'cantidad', align: 'center', label: 'Cantidad', field: 'cantidad', sortable: true, },
        { name: 'precio', align: 'center', label: 'Precio', field: 'precio', sortable: true },
        { name: 'total', align: 'center', label: 'Total', field: 'total', sortable: true }
      ],
      ticket: {
        detalleTickets: []
      },
      opciones:[],
      producto: {
        nombre: null,
        cantidad: null,
        precioCompra: null,
        precioVenta: null,
      },
      idProducto: null,
      cantidad: null
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
            created_at: element.created_at,
            updated_at: element.updated_at,
            categorias: element.updated_at,
            brindis: element.brindis,
            pasatiempos: element.pasatiempos,
            preferencias: element.preferencias,
            mascotas: element.mascotas,
            detalleTickets: element.detalleTickets,
            nombreTipoCaja: element.get_tipo_caja.nombre,
            nombreEstado: element.get_estado.nombre,
            cantidadProducto: element.cantidadProducto,
            valor: element.valor
          };
          this.ticket.detalleTickets.forEach((detalle) => {
            detalle.nombre=detalle.get_producto.nombre
          });
          console.log(this.ticket);
        }
      })
      .catch((error) => {
          console.log(error.response.data);
      });
    },
    editDetalle(id){
      var url = 'detalleTickets/'+id;
      let data= {
        nombre: "s"
      };
      const notif = Notify.create({
        type: 'ongoing',
        position: 'top-right',
        message: 'Esperando respuesta del servidor...'
      })
      axios.put(url,this.obtenerConfig, data)
      .then((result)=>{
        if (result.data.success == true) {
          setTimeout(() => {
            notif({
              type: 'positive',
              message: result.data.message,
            })
          }, 0)
        }
      })
      .catch((error) => {
          setTimeout(() => {
            notif({
              type: 'negative',
              message: error.response.data.message,
            })
          }, 0)
      });
    },
    deleteDetalle(id){
      var url = 'detalleTickets/'+id;
      const notif = Notify.create({
        type: 'ongoing',
        position: 'top-right',
        message: 'Esperando respuesta del servidor...'
      })
      axios.delete(url,this.obtenerConfig)
      .then((result)=>{
        if (result.data.success == true) {
          setTimeout(() => {
            notif({
              type: 'positive',
              message: result.data.message,
            })
          }, 0)
        }
      })
      .catch((error) => {
          setTimeout(() => {
            notif({
              type: 'negative',
              message: error.response.data.message,
            })
          }, 0)
      });
    },
    obtenerProductos() {
      var url = 'productos';
      this.listaProductosAux = [];
      axios.get(url,this.obtenerConfig)
      .then((result)=>{
        if (result.data.success == true) {
          for (let index = 0; index < result.data.data.productos.length; index++) {
              const element = result.data.data.productos[index];
              this.opciones.push({
                label: element.nombre,
                value: element.id,
                id: element.id,
                nombre: element.nombre,
                cantidad: element.cantidad,
                precioCompra: element.precioCompra,
                precioVenta: element.precioVenta,
              });
          }
        }
      })
      .catch((error) => {
          console.log(error.response.data);
      });
    },
    actualizarProducto(){
      const notif = Notify.create({
        type: 'ongoing',
        position: 'top-right',
        message: 'Esperando respuesta del servidor...'
      })
      this.producto = this.idProducto;
      console.log(this.idProducto);
      console.log(this.producto);
      setTimeout(() => {
        notif({
          type: 'positive',
          message: result.data.message,
        })
      }, 0)

    },
    agregarProducto(){
      var url = 'detalleTickets'
      let post = {
        "ticket": this.$route.params.id,
        "producto": this.producto.id,
        "cantidad": this.cantidad,
        "precio": this.producto.precioVenta,
        "total": this.producto.precioVenta*this.cantidad,
      };
      const notif = Notify.create({
        type: 'ongoing',
        position: 'top-right',
        message: 'Esperando respuesta del servidor...'
      })
      axios.post(url,post,this.obtenerConfig)
      .then((result)=>{
          console.log(result.data);
          if (result.data.success == true)  {
              setTimeout(() => {
              notif({
                type: 'positive',
                message: result.data.message,
              })
            }, 0)
          }
      })
      .catch((error)=>{
          setTimeout(() => {
            notif({
              type: 'negative',
              message: error.response.data.message,
            })
          }, 0)
      });
    },
  },
  beforeMount(){
    this.obtenerTicket();
    this.obtenerProductos();
  }
}
</script>