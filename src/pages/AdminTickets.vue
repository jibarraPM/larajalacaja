<template>
  <q-page class="">
    <div class="q-pa-md">
    <q-table
      title="Tickes Generados"
      :data="listaTicket"
      :columns="columns"
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
            <q-btn size="sm" color="primary" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
            <q-btn size="sm" color="primary" round dense @click="editTicket(props.row.id)" icon="edit"/>
          </q-td>
          
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <q-table
              title="Detalle Ticket"
              :data="props.row.detalleTickets"
              :columns="columns2"
              row-key="id"
            >
            </q-table>
            
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'ID',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'estado', align: 'center', label: 'Estado', field: 'nombreEstado', sortable: true },
        { name: 'tipoCaja', label: 'Tipo de Caja', field: 'nombreTipoCaja' },
        { name: 'valor', label: 'Valor', field: 'valor', sortable: true, style: 'width: 10px' },
        { name: 'cantidadProducto', label: 'Cantidad de Productos', field: 'cantidadProducto' },
        { name: 'telefono', label: 'Telefono', field: 'telefono' },
        { name: 'email', label: 'Correo', field: 'email' },
        
        { name: 'direccion', label: 'Dirección', field: 'direccion' },
        { name: 'created_at', label: 'Fecha Ingreso', field: 'created_at', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'entrega', label: 'Fecha Recepción', field: 'entrega', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
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
      listaTicket:[]
    }
  },
  methods:{
    obtenerTicket() {
      var url = 'tickets';
      this.listaTicketsAux = [];
      axios.get(url,this.obtenerConfig)
      .then((result)=>{
        if (result.data.success == true) {
          for (let index = 0; index < result.data.data.tickets.length; index++) {
              const element = result.data.data.tickets[index];
              let ticket = {
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
              ticket.detalleTickets.forEach((detalle) => {
                detalle.nombre=detalle.get_producto.nombre
              });
              
              this.listaTicketsAux[index]=ticket;
          }
          this.listaTicket= this.listaTicketsAux;
          console.log(this.listaTicket);
        }
      })
      .catch((error) => {
          console.log(error.response.data);
      });
    },
    editTicket(id){
      console.log(id);
      this.$router.push('tickets/' + id);
    }
  },
  beforeMount(){
    this.obtenerTicket();
  }
}
</script>
