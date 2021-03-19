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
