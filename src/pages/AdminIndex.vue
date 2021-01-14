<template>
  <q-page class="">
    <div class="row justify-center q-pa-a">
        <div v-for="i in 4">
            <div class="col q-pa-md">
          <q-card flat bordered class="my-card">
            <q-card-section>
              <div class="text-h6">Nombre Tarjeta</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Icono
            </q-card-section>

            <q-separator inset />

            <q-card-section>
              Valor
            </q-card-section>
          </q-card>
        </div>
        </div>
        
    </div>

  </q-page>
</template>

<script>
export default {
  name: "PageIndex"
};
</script>
