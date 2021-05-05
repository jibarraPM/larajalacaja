<template>
  
  <q-page class="">

    <h3 class="text-center">Detalles del Ticket  N#</h3>

      <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 text-center">Información Destacada</div>
      </q-card-section>

      <q-tabs v-model="info" class="text-teal">
        <q-tab label="Información Caja" name="uno" />
        <q-tab label="Información Cliente" name="dos" />
        <q-tab label="Información Despacho" name="tres" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="info" animated>
        <q-tab-panel name="uno">
          <div class="row">
        <div class="col">
          Valor Venta: {{ticket.valor}}
        </div>
        <div class="col">
          Valor Costo: {{ticket.valor}}
        </div>
        <div class="col">
          Ganancia Neta: {{ticket.valor}}
        </div>
      </div>
      <div class="row">
        <div class="col">
          Ganancia Neta: {{ticket.valor}}
        </div>
        <div class="col">
          Porcentaje de utilidad: {{ticket.valor}}
        </div>
        <div class="col">
          Cantidad Producto: {{ticket.cantidadProducto}}
        </div>
      </div>
      <div class="row">
        <div class="col">
          Pyme: {{ticket.pyme}}
        </div>
        <div class="col">
          Impustos %: {{ticket.valor}}
        </div>
        <div class="col">
          Costo Envio: {{ticket.telefono}}
        </div>
      </div>
      <div class="row">
        <div class="col">
          Forma de Pago: {{ticket.pyme}}
        </div>
        <div class="col">
          Estado del Pago: {{ticket.pyme}}
        </div>
        <div class="col">
          
        </div>
      </div>
        </q-tab-panel>

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


    
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" icon="inventory_2" @click="agregar = true" label="Agregar Producto"/>
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
            <q-btn size="sm" color="primary" round dense @click="modalDetalle(props.cols[0].value)"  icon="edit"/>
            <q-btn size="sm" color="primary" round dense @click="modaldeleteDetalle(props.cols[0].value)" icon="delete"/>
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
  
  </div>

  <q-dialog v-model="agregar">
    <q-card style="width: 700px; max-width: 80vw;">
      <q-bar>
        <div>Agregar producto</div>
      </q-bar>


      <q-card-section>
        <div class="text-h6">
          Direccion de Entrega
        </div>

        <div class="q-gutter-sm">
          <q-select
            v-model="idProducto"
            :options="opciones"
            label="Seleccione el producto"
            @input="actualizarProducto()"
          />
        </div>
      </q-card-section>

      <q-card-section>
          Nombre: {{ producto.nombre }}
      </q-card-section>
      
      
      <q-card-section>
          cantidad inventario: {{ producto.cantidad }}
      </q-card-section>
      <q-card-section>
          precioCompra: {{ producto.precioCompra }}
      </q-card-section>
      <q-card-section>
          precioVenta: {{ producto.precioVenta }}
      </q-card-section>
      <q-card-section>
      <q-input
        outlined
        v-model="cantidad"
        type="text"
        placeholder="Cantidad de producto"
        >
        <template v-slot:prepend>
          <q-icon name="inventory_2" />
        </template>
      </q-input>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Agregar" color="primary" @click="agregarProducto()" v-close-popup />
        <q-btn flat label="Cancelar" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="modificar">
    <q-card style="width: 700px; max-width: 80vw;">
      <q-bar>
        <div>Modificar producto</div>
      </q-bar>

      <q-card-section>
          Nombre: {{ editproducto.nombre }}
      </q-card-section>
      <q-card-section>
          cantidad inventario: {{ editproducto.cantidad }}
      </q-card-section>
      <q-card-section>
          precioCompra: {{ editproducto.precioCompra }}
      </q-card-section>
      <q-card-section>
          precioVenta: {{ editproducto.precioVenta }}
      </q-card-section>
      <q-card-section>
      <q-input
        outlined
        v-model="editcantidad"
        type="text"
        placeholder="Cantidad de producto"
        >
        <template v-slot:prepend>
          <q-icon name="inventory_2" />
        </template>
      </q-input>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Modificar" color="primary" @click="editDetalle()" v-close-popup />
        <q-btn flat label="Cancelar" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="modalBorrar" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-ml-sm">¿Está seguro quiere eliminar este producto de la caja?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup />
          <q-btn flat label="Eliminar" color="primary" @click="deleteDetalle()" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>



  
  </q-page>
</template>

<script>
import axios from "axios";
import { Notify } from 'quasar';

export default {
  name: 'PageIndex',
  data () {
    return {
      info: 'uno',
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
        { name: 'foto', align: 'center', label: 'Foto', field: 'foto', sortable: true },
        { name: 'cantidad', align: 'center', label: 'Cantidad', field: 'cantidad', sortable: true, },
        { name: 'precio', align: 'center', label: 'Precio', field: 'precio', sortable: true },
        
        { name: 'total', label: 'Valor costo', field: 'total', sortable: true, style: 'width: 10px' },
        { name: 'valor', label: 'Valor venta', field: 'valor', sortable: true, style: 'width: 10px' },
        { name: 'valor', label: 'Utilidad', field: 'valor', sortable: true, style: 'width: 10px' },
        { name: 'valor', label: 'Ganancia percibida', field: 'valor', sortable: true, style: 'width: 10px' },

        
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
      editproducto: {
        nombre: null,
        cantidad: null,
        precioCompra: null,
        precioVenta: null,
      },
      idProducto: null,
      cantidad: null,
      editcantidad: null,

      agregar: false,
      modificar: false,
      modalBorrar: false,
      idProductoBorrar:null,
      idProductoEditar: null,
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
        }
      })
      .catch((error) => {
          console.log(error.response.data);
      });
    },
    modalDetalle(id){
      this.idProductoEditar=id;
      this.modificar = true;
      this.ticket.detalleTickets.forEach((detalle) => {
        if(this.idProductoEditar==detalle.id){
          this.editproducto.id=detalle.id;
          this.editproducto.nombre=detalle.nombre;
          this.editproducto.precioCompra=detalle.get_producto.precioCompra;
          this.editproducto.cantidad=detalle.get_producto.cantidad;
          this.editproducto.precioVenta=detalle.get_producto.precioVenta;
          this.editproducto.cantidad=detalle.get_producto.cantidad;
          this.editcantidad = detalle.cantidad;
        }
      });
    },
    editDetalle(){
      var url = 'detalleTickets/'+this.idProductoEditar;
      let data= {
        "ticket": this.$route.params.id,
        "producto": this.idProductoEditar,
        "cantidad": this.editcantidad,
        "precio": this.editproducto.precioVenta,
        "total": this.editproducto.precioVenta*this.editcantidad
      };
      this.editproducto.id="";
      this.editproducto.nombre="";
      this.editproducto.precioCompra="";
      this.editproducto.cantidad="";
      this.editproducto.precioVenta="";
      this.editcantidad = "";
      const notif = Notify.create({
        type: 'ongoing',
        position: 'top-right',
        message: 'Esperando respuesta del servidor...'
      })
      axios.put(url, data, this.obtenerConfig)
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
    modaldeleteDetalle(id){
      this.modalBorrar= true;
      this.idProductoBorrar=id;
    },
    deleteDetalle(){
      var url = 'detalleTickets/'+this.idProductoBorrar;
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
      this.producto = this.idProducto;
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
      this.idProducto="";
      this.producto.id="";
      this.producto.nombre="";
      this.producto.precioCompra="";
      this.producto.cantidad="";
      this.producto.precioVenta="";
      this.cantidad="";
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