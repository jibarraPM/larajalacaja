<template>
  <q-page class="">
    <div class="q-pa-md">

      <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" icon="inventory_2" label="Agregar Producto" to='addProducto'/>
  </div>

    <q-table
      title="Productos"
      :data="listaProductos"
      :columns="columns"
      row-key="name"
      binary-state-sort
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">{{ props.row.id }}</q-td>
          <q-td key="nombre" :props="props">
            {{ props.row.nombre }}
            <q-popup-edit v-model="props.row.name" title="Actualizar Producto" buttons label-set="Ok"
          label-cancel="Cancelar">
              <q-input v-model="props.row.name" dense autofocus counter />
            </q-popup-edit>
          </q-td>

          <q-td key="foto" >
            <q-img
          src="data:image/png;base64,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"
          :ratio="1"
        />

          </q-td>

          <q-td key="cantidad" :props="props">
            {{ props.row.cantidad }}
            <q-popup-edit v-model="props.row.cantidad" title="Actualizar Cantidad" buttons label-set="Ok"
          label-cancel="Cancelar">
              <q-input type="number" v-model="props.row.cantidad" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="precioCompra" :props="props">
            <div class="text-pre-wrap">{{ props.row.precioCompra }}</div>
            <q-popup-edit v-model="props.row.precioCompra"  title="Actualizar Precio Compra" buttons label-set="Ok"
          label-cancel="Cancelar">
              <q-input type="number" v-model="props.row.precioCompra" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="precioVenta" :props="props">
            {{ props.row.precioVenta }}
            <q-popup-edit v-model="props.row.precioVenta"  title="Actualizar Precio Venta" buttons label-set="Ok"
          label-cancel="Cancelar">
              <q-input type="number" v-model="props.row.precioVenta"  />
            </q-popup-edit>
          </q-td>
          <q-td key="utilidad" :props="props">{{ props.row.utilidad }}</q-td>
          <q-td key="costoInventario" :props="props">{{ props.row.costoInventario }}</q-td>
          <q-td key="valorInventario" :props="props">{{ props.row.valorInventario }}</q-td>
          <q-td key="gananciaNeta" :props="props">{{ props.row.gananciaNeta }}</q-td>
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
        { name: 'id', label: 'ID', field: 'Id' },
        {
          name: 'nombre',
          required: true,
          label: 'Nombre',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true 
        },
        { name: 'foto', align: 'center', label: 'Foto', field: 'foto', sortable: true },
        { name: 'cantidad', align: 'center', label: 'Cantidad', field: 'cantidad', sortable: true },
        { name: 'precioCompra', label: 'Precio Compra', field: 'precioCompra', sortable: true, style: 'width: 10px' },
        { name: 'precioVenta', label: 'Precio Venta', field: 'precioVenta', sortable: true},
        { name: 'utilidad', label: '% Utilidad', field: 'utilidad', sortable: true },
        { name: 'costoInventario', label: 'Costo en Inventario', field: 'costoInventario', sortable: true },
        { name: 'valorInventario', label: 'Valor Inventario', field: 'valorInventario', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'gananciaNeta', label: 'Ganancia Neta', field: 'gananciaNeta', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      listaProductos:[]
    }
  },
  methods:{
    obtenerProductos() {
      var url = 'productos';
      this.listaProductosAux = [];
      axios.get(url,this.obtenerConfig)
      .then((result)=>{
        if (result.data.success == true) {
          for (let index = 0; index < result.data.data.productos.length; index++) {
              const element = result.data.data.productos[index];
              let producto = {
                id: element.id,
                nombre: element.nombre,
                cantidad: element.cantidad,
                precioCompra: element.precioCompra,
                precioVenta: element.precioVenta,
                utilidad: ((element.precioVenta/element.precioCompra)-1) *100 + "%",
                costoInventario: element.cantidad*element.precioCompra,
                valorInventario: element.cantidad*element.precioVenta,
                gananciaNeta: element.cantidad*element.precioVenta-element.cantidad*element.precioCompra,
                created_at: element.created_at,
                updated_at: element.updated_at,
                categorias: element.categorias,
                brindis: element.brindis,
                pasatiempos: element.pasatiempos,
                preferencias: element.preferencias
              };
              this.listaProductosAux[index]=producto;
          }
          this.listaProductos= this.listaProductosAux;
          console.log(this.listaProductos);
        }
      })
      .catch((error) => {
          console.log(error.response.data);
      });
    }
  },
  beforeMount(){
    this.obtenerProductos();
  }
}
</script>
