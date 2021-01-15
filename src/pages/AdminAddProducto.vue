<template>
<div class="q-pa-md">
    <q-stepper
      v-model="step"
      vertical
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Agregar Producto"
        icon="inventory_2"
        :done="step > 1"
      >

       <div class="q-pa-md q-gutter-sm">

           <q-input
              outlined
              v-model="nombre"
              type="text"
              placeholder="Nombre del Producto"
            >
              <template v-slot:prepend>
                <q-icon name="inventory_2
" />
              </template>
            </q-input>
            <q-input
              outlined
              v-model="cantidad"
              type="number"
              placeholder="Cantidad"
            >
              <template v-slot:prepend>
                <q-icon name="score
" />
              </template>
            </q-input>
            <q-input
              outlined
              v-model="precioCompra"
              type="number"
              placeholder="Precio de Compra"
            >
              <template v-slot:prepend>
                <q-icon name="monetization_on
" />
              </template>
            </q-input>
            <q-input
              outlined
              v-model="precioVenta"
              type="number"
              placeholder="Precio de Venta"
            >
              <template v-slot:prepend>
                <q-icon name="monetization_on
" />
              </template>
            </q-input>

       </div>
        

        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continuar" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Categorizar Producto"
        caption="Opcional"
        icon="style"
        :done="step > 2"
      >
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" label="Agregar Producto" />
          <q-btn flat @click="step = 1" color="primary" label="Volver" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step: 1,
      nombre: '',
      cantidad: '',
      precioCompra: '',
      precioVenta: '',

    }
  }
}
</script>