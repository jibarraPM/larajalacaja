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
        a continuacion tendra que categorizar el inventario correspondiente a la categoria a la cual pertenece

        <div class="q-pa-md   q-gutter-md">
     <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">
                  Caractegorias
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-pa-md">
                  <div class="q-gutter-sm">
                    <q-checkbox
                      v-model="categorias"
                      val="Rockers"
                      label="Rockers"
                    />
                    <q-checkbox
                      v-model="categorias"
                      val="Carreter@"
                      label="Carreter@"
                    />
                    <q-checkbox
                      v-model="categorias"
                      val="Trabajolic@"
                      label="Trabajolic@"
                    />
                    <q-checkbox
                      v-model="categorias"
                      val="Romántic@"
                      label="Romántic@"
                    />
                    <q-checkbox
                      v-model="categorias"
                      val="Pretencios@"
                      label="Pretencios@"
                    />
                    <q-checkbox
                      v-model="categorias"
                      val="Organizad@"
                      label="Organizad@"
                    />
                    <q-checkbox
                      v-model="categorias"
                      val="Sexy"
                      label="Sexy"
                    />
                  </div>
                </div>

                <div class="q-px-sm">
                  Selección Actual <strong>{{ categorias }}</strong>
                </div>
              </q-card-section>
            </q-card>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">
                  Pasatiempos
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-pa-md">
                  <div class="q-gutter-sm">
                    <q-checkbox
                      v-model="pasatiempo"
                      val="Cocinar"
                      label="Cocinar"
                    />
                    <q-checkbox
                      v-model="pasatiempo"
                      val="Parrillar"
                      label="Parrillar"
                    />
                    <q-checkbox
                      v-model="pasatiempo"
                      val="Hacer yoga"
                      label="Hacer yoga"
                    />
                    <q-checkbox v-model="pasatiempo" val="Leer" label="Leer" />
                    <q-checkbox
                      v-model="pasatiempo"
                      val="Tejer o bordar"
                      label="Tejer o bordar"
                    />
                    <q-checkbox
                      v-model="pasatiempo"
                      val="Maquillaje"
                      label="Maquillaje"
                    />
                  </div>
                </div>

                <div class="q-px-sm">
                  Selección Actual <strong>{{ pasatiempo }}</strong>
                </div>
              </q-card-section>
            </q-card>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">
                  Pet Lover
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-pa-md">
                  <div class="q-gutter-sm">
                    <q-checkbox v-model="petLover" val="Gatos" label="Gatos" />
                    <q-checkbox
                      v-model="petLover"
                      val="Perros"
                      label="Perros"
                    />
                    <q-checkbox v-model="petLover" val="Otro" label="Otro" />
                    <q-checkbox v-model="petLover" val="No" label="No" />
                  </div>
                </div>

                <div class="q-px-sm">
                  Selección Actual <strong>{{ petLover }}</strong>
                </div>
              </q-card-section>
            </q-card>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">
                  Brindis
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-pa-md">
                  <div class="q-gutter-sm">
                    <q-checkbox v-model="brindis" val="Vino" label="Vino" />
                    <q-checkbox
                      v-model="brindis"
                      val="Espumante"
                      label="Espumante"
                    />
                    <q-checkbox
                      v-model="brindis"
                      val="Sangría"
                      label="Sangría"
                    />
                    <q-checkbox
                      v-model="brindis"
                      val="No toma"
                      label="No toma"
                    />
                  </div>
                </div>

                <div class="q-px-sm">
                  Selección Actual <strong>{{ brindis }}</strong>
                </div>
              </q-card-section>
            </q-card>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">
                  Preferencia
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-pa-md">
                  <div class="q-gutter-sm">
                    <q-checkbox
                      v-model="preferencia"
                      val="Chocolates"
                      label="Chocolates"
                    />
                    <q-checkbox
                      v-model="preferencia"
                      val="Paletas o dulces"
                      label="Paletas o dulces"
                    />
                    <q-checkbox
                      v-model="preferencia"
                      val="Salado"
                      label="Salado"
                    />
                    <q-checkbox
                      v-model="preferencia"
                      val="Ninguna"
                      label="Ninguna"
                    />
                    <q-checkbox v-model="preferencia" val="Otro" label="Otro" />
                  </div>
                </div>

                <div class="q-px-sm">
                  Selección Actual <strong>{{ preferencia }}</strong>
                </div>
              </q-card-section>
            </q-card>
  </div>

        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Agregar Producto" />
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

      categorias: [],
      pasatiempo: [],
      brindis: [],
      preferencia: [],
      petLover: []

    }
  }
}
</script>