<template>
  <q-page class="">
    <div class="q-pa-md">

      <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" icon="inventory_2" label="Agregar Producto" to='addProducto'/>
  </div>

    <q-table
      title="Productos"
      :data="data"
      :columns="columns"
      row-key="name"
      binary-state-sort
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">{{ props.row.id }}</q-td>
          <q-td key="nombre" :props="props">
            {{ props.row.name }}
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
      data: [
        {
          name: 'Frozen Yogurt',
          cantidad: 159,
          precioCompra: 6.0,
          precioVenta: 24,
          id: 4.0,
          costoInventario: 87,
          valorInventario: '14%',
          gananciaNeta: '1%',
          utilidad:'12%'
        },
        {
          name: 'Ice cream sandwich',
          cantidad: 237,
          precioCompra: 9.0,
          precioVenta: 37,
          id: 4.3,
          costoInventario: 129,
          valorInventario: '8%',
          gananciaNeta: '1%'
        },
        {
          name: 'Eclair',
          cantidad: 262,
          precioCompra: 16.0,
          precioVenta: 23,
          id: 6.0,
          costoInventario: 337,
          valorInventario: '6%',
          gananciaNeta: '7%'
        },
        {
          name: 'Cupcake',
          cantidad: 305,
          precioCompra: 3.7,
          precioVenta: 67,
          id: 4.3,
          costoInventario: 413,
          valorInventario: '3%',
          gananciaNeta: '8%'
        },
        {
          name: 'Gingerbread',
          cantidad: 356,
          precioCompra: 16.0,
          precioVenta: 49,
          id: 3.9,
          costoInventario: 327,
          valorInventario: '7%',
          gananciaNeta: '16%'
        },
        {
          name: 'Jelly bean',
          cantidad: 375,
          precioCompra: 0.0,
          precioVenta: 94,
          id: 0.0,
          costoInventario: 50,
          valorInventario: '0%',
          gananciaNeta: '0%'
        },
        {
          name: 'Lollipop',
          cantidad: 392,
          precioCompra: 0.2,
          precioVenta: 98,
          id: 0,
          costoInventario: 38,
          valorInventario: '0%',
          gananciaNeta: '2%'
        },
        {
          name: 'Honeycomb',
          cantidad: 408,
          precioCompra: 3.2,
          precioVenta: 87,
          id: 6.5,
          costoInventario: 562,
          valorInventario: '0%',
          gananciaNeta: '45%'
        },
        {
          name: 'Donut',
          cantidad: 452,
          precioCompra: 25.0,
          precioVenta: 51,
          id: 4.9,
          costoInventario: 326,
          valorInventario: '2%',
          gananciaNeta: '22%'
        },
        {
          name: 'KitKat',
          cantidad: 518,
          precioCompra: 26.0,
          precioVenta: 65,
          id: 7,
          costoInventario: 54,
          valorInventario: '12%',
          gananciaNeta: '6%'
        }
      ]
    }
  },
}
</script>
