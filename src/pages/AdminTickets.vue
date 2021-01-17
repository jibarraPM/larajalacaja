<template>
  <q-page class="">
    <div class="q-pa-md">
    <q-table
      title="Tickes Generados"
      :data="listaTicket"
      :columns="columns"
      row-key="name"
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
            <q-btn size="sm" color="primary" round dense icon="edit"/>
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

            <div class="text-left">Detalles del Ticket: {{ props.row.id }}.</div>
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
        { name: 'estado', align: 'center', label: 'Estado', field: 'estado', sortable: true },
        { name: 'tipoCaja', label: 'Tipo de Caja', field: 'tipoCaja' },
        { name: 'null', label: 'Valor', field: 'fat', sortable: true, style: 'width: 10px' },
        { name: 'null2', label: 'Cantidad de Productos', field: 'carbs' },
        { name: 'telefono', label: 'Telefono', field: 'telefono' },
        { name: 'email', label: 'Correo', field: 'email' },
        
        { name: 'direccion', label: 'Dirección', field: 'direccion' },
        { name: 'created_at', label: 'Fecha Ingreso', field: 'created_at', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'entrega', label: 'Fecha Entrega', field: 'entrega', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
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
              };
              this.listaTicketsAux[index]=ticket;
          }
          this.listaTicket= this.listaTicketsAux;
          console.log(this.listaTicket);
        }
      })
      .catch((error) => {
          console.log(error.response.data);
      });
    }
  },
  beforeMount(){
    this.obtenerTicket();
  }
}
</script>
