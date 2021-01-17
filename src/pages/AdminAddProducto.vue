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
                    <label v-for="categoria in listaCategorias">
                      <q-checkbox 
                        v-model="categorias"
                        :val="categoria.id"
                        :label="categoria.nombre"
                      />
                      </label>
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
                    <label v-for="pasatiempo in listaPasatiempos">
                      <q-checkbox 
                        v-model="pasatiempos"
                        :val="pasatiempo.id"
                        :label="pasatiempo.nombre"
                      />
                      </label>
                  </div>
                </div>

                <div class="q-px-sm">
                  Selección Actual <strong>{{ pasatiempos }}</strong>
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
                    <label v-for="petLover in listaMascotas">
                      <q-checkbox 
                        v-model="petLovers"
                        :val="petLover.id"
                        :label="petLover.nombre"
                      />
                      </label>
                  </div>
                </div>

                <div class="q-px-sm">
                  Selección Actual <strong>{{ petLovers }}</strong>
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
                    <label v-for="brindi in listaBrindis">
                      <q-checkbox 
                        v-model="brindis"
                        :val="brindi.id"
                        :label="brindi.nombre"
                      />
                    </label>
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
                    <label v-for="preferencia in listaPreferencias">
                      <q-checkbox 
                        v-model="preferencias"
                        :val="preferencia.id"
                        :label="preferencia.nombre"
                      />
                    </label>
                  </div>
                </div>

                <div class="q-px-sm">
                  Selección Actual <strong>{{ preferencias }}</strong>
                </div>
              </q-card-section>
            </q-card>
  </div>

        <q-stepper-navigation>
          <q-btn @click="crearProducto" color="primary" label="Agregar Producto" />
          <q-btn flat @click="step = 1" color="primary" label="Volver" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
  data () {
    return {
      step: 1,
      nombre: '',
      cantidad: '',
      precioCompra: '',
      precioVenta: '',
      foto: 'vacio',

      categorias: [],
      pasatiempos: [],
      brindis: [],
      preferencias: [],
      petLovers: [],

      //lista de objetos que son dinamicos, estos provenientes de la api
      listaCategorias:[],
      listaPasatiempos:[],
      listaBrindis:[],
      listaPreferencias:[],
      listaMascotas:[]
    }
  },
  beforeMount(){
    //Nota: estas funciones se pueden demorar en ejecutarse, esto quiere decir que no espera a que termine para mostrar los datos, dado a que es a 2 tiempos
    //me refiero a que primero llena los datos como nombre y cantidad, no deberia darse cuenta de esto, el tiempo es relativamente corto, depende del internet obviamente
    this.obtenerCategorias();
    this.obtenerPasatiempos();
    this.obtenerBrindis();
    this.obtenerPreferencias();
    this.obtenerMascotas();
  },
  methods:{
    ...mapActions({
      obtenerConfig: 'auth/obtenerConfig',
    }),
    crearProducto(){
      var url = 'productos'
      let post = {
        "nombre": this.nombre,
        "cantidad": this.cantidad,
        "precioCompra": this.precioCompra,
        "precioVenta": this.precioVenta,
        "foto": this.foto,
        "categorias": this.categorias,
        "pasatiempos": this.pasatiempos,
        "brindis": this.brindis,
        "preferencias": this.preferencias,
        "mascotas": this.petLovers
      };
      console.log("entro aca");
      axios.post(url,post,this.obtenerConfig)
      .then((result)=>{
          console.log(result.data);
          if (result.data.success == true)  {
              console.log(result);
          }
      })
      .catch((error)=>{
          console.log(error);
      });
    },
    obtenerCategorias(){
      var url = 'categorias';
      this.listaCategoriasAux = [];
      axios.get(url,this.obtenerConfig)
      .then((result)=>{
        if (result.data.success == true) {
          for (let index = 0; index < result.data.data.categorias.length; index++) {
              const element = result.data.data.categorias[index];
              let categoria = {
                  id: element.id,
                  nombre: element.nombre,
              };
              this.listaCategoriasAux[index]=categoria;
          }
          this.listaCategorias = this.listaCategoriasAux;
          console.log(this.listaCategorias);
        }
      })
      .catch((error) => {
          console.log(error);
      });
    },
    obtenerPasatiempos(){
      var url = 'pasatiempos';
      this.listaPasatiemposAux = [];
      axios.get(url,this.obtenerConfig)
      .then((result)=>{
        if (result.data.success == true) {
          for (let index = 0; index < result.data.data.pasatiempos.length; index++) {
              const element = result.data.data.pasatiempos[index];
              let pasatiempo = {
                  id: element.id,
                  nombre: element.nombre,
              };
              this.listaPasatiemposAux[index]=pasatiempo;
          }
          this.listaPasatiempos = this.listaPasatiemposAux;
        }
      })
      .catch((error) => {
          console.log(error);
      });
    },
    obtenerBrindis(){
      var url = 'brindis';
      this.listaBrindisAux = [];
      axios.get(url,this.obtenerConfig)
      .then((result)=>{
        if (result.data.success == true) {
          for (let index = 0; index < result.data.data.brindis.length; index++) {
              const element = result.data.data.brindis[index];
              let brindi = {
                  id: element.id,
                  nombre: element.nombre,
              };
              this.listaBrindisAux[index]=brindi;
          }
          this.listaBrindis = this.listaBrindisAux;
        }
      })
      .catch((error) => {
          console.log(error);
      });
    },
    obtenerPreferencias(){
      var url = 'preferencias';
      this.listaPreferenciasAux = [];
      axios.get(url,this.obtenerConfig)
      .then((result)=>{
        if (result.data.success == true) {
          for (let index = 0; index < result.data.data.preferencias.length; index++) {
              const element = result.data.data.preferencias[index];
              let preferencia = {
                  id: element.id,
                  nombre: element.nombre,
              };
              this.listaPreferenciasAux[index]=preferencia;
          }
          this.listaPreferencias = this.listaPreferenciasAux;
        }
      })
      .catch((error) => {
          console.log(error);
      });
    },
    obtenerMascotas(){
      var url = 'mascotas';
      this.listaMascotasAux = [];
      axios.get(url,this.obtenerConfig)
      .then((result)=>{
        if (result.data.success == true) {
          for (let index = 0; index < result.data.data.mascotas.length; index++) {
              const element = result.data.data.mascotas[index];
              let mascota = {
                  id: element.id,
                  nombre: element.nombre,
              };
              this.listaMascotasAux[index]=mascota;
          }
          this.listaMascotas = this.listaMascotasAux;
        }
      })
      .catch((error) => {
          console.log(error);
      });
    },

  }
}
</script>