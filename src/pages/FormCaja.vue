<template>
  <q-page class="">
    <div class="q-pa-md">
      <q-btn
        label="Limpiar"
        push
        color="white"
        text-color="primary"
        @click="reset"
        class="q-mb-md"
      />

      <q-stepper
        v-model="step"
        header-nav
        ref="stepper"
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="Datos de quien recibe la caja"
          icon="insert_emoticon"
          :done="done1"
        >
          <div class="q-gutter-y-md column " style="max-width: ">
            <q-input
              outlined
              v-model="receptor"
              type="text"
              placeholder="Nombre de quien recibe"
            >
              <template v-slot:prepend>
                <q-icon name="face" />
              </template>
            </q-input>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Motivo</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-gutter-sm">
                  <label v-for="Motivo in listaMotivos">
                    <q-radio 
                      v-model="motivo"
                      :val="Motivo.id"
                      :label="Motivo.nombre"
                    />
                  </label>
                </div>

                <div class="q-px-sm">
                  Tu seleccion es: <strong>{{ motivo }}</strong>
                </div>
                <q-tr v-show="motivo == '1'">

                    <q-card-section>
                      <div class="text-h6">Indique la edad que cumple</div>
                    </q-card-section>
                    <q-input
                      outlined
                      v-model="edad"
                      type="text"
                      placeholder="Ingrese la edad"
                      >
                      <template v-slot:prepend>
                        <q-icon name="face" />
                      </template>
                    </q-input>
                  </q-tr>
              </q-card-section>
              
            </q-card>


            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Para Quién?</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div id="1">
                <div class="q-gutter-sm">
                  <label v-for="TipoPersona in listaTipoPersonas">
                    <q-radio 
                      v-model="tipoPersona"
                      :val="TipoPersona.id"
                      :label="TipoPersona.nombre"
                      @input="v=>{tipoMujer()}"
                    />
                  </label>
                </div>
                 </div>

                <div class="q-px-sm">
                  Tu seleccion es: <strong>{{ tipoPersona }}</strong>
                </div>
              </q-card-section>
            </q-card>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Fecha de Nacimiento (Puede omitirse)</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-input
                  outlined
                  v-model="nacimiento"
                  type="date"
                  placeholder="Fecha de Nacimiento"
                >
                  <template v-slot:prepend>
                    <q-icon name="event" />
                  </template>
                </q-input>
              </q-card-section>
            </q-card>
          </div>

          <q-stepper-navigation>
            <q-btn
              @click="
                triggerFase2()
              "
              color="primary"
              label="Continuar"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Cuentanos sobre esa persona especial"
          caption=""
          icon="widgets"
          :done="done2"
        >
          <div class="q-gutter-y-md column">
            <q-input
              outlined
              v-model="color"
              type="text"
              placeholder="Color favorito"
            >
              <template v-slot:prepend>
                <q-icon name="color_lens" />
              </template>
            </q-input>

            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">
                  Indícanos esas 3 características que definan a tu persona favorita
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
                        :disabled="categorias.length > 3" 
                        @input="v=>{eliminarUltimoElementoCategorias()}"
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
                  Indícanos esos 3 pasatiempos que definan a tu persona favorita
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
                        :disabled="pasatiempos.length > 3" 
                        @input="v=>{eliminarUltimoElementoPasatiempo()}"
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
                  <q-tr v-show="mascota == 'false'">
                    <q-card-section class="q-pt-none">
                      <div class="q-gutter-sm">
                        <q-radio v-model="mascota" val="true" label="Si" />
                        <q-radio v-model="mascota" val="false" label="No" />
                      </div>
                    </q-card-section>
                  </q-tr>
                  

                  <q-tr v-show="mascota == 'true'">
                    <div class="q-gutter-sm">
                      <label v-for="petLover in listaMascotas">
                      <q-checkbox 
                        v-model="petLovers"
                        :val="petLover.id"
                        :label="petLover.nombre"
                      />
                      </label>
                    </div>
                  </q-tr>
                </div>
                <div class="q-px-sm">
                  Selección Actual <strong>{{ petLovers }}</strong>
                </div>
              </q-card-section>
            </q-card>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">
                  Y para hacer salu´
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
                  Algo para endulzar la vida?
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

            <q-input
              outlined
              v-model="excepcion"
              type="text"
              placeholder="Ni por nada (Por ejemplo: Algo con azúcar, lactosa o de color rosado)"
            >
              <template v-slot:prepend>
                <q-icon name="cancel" />
              </template>
            </q-input>

            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Prefieres Pymes o te da lo mimo</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-gutter-sm">
                  <q-radio v-model="pyme" val="Pymes" label="Pymes" />
                  <q-radio v-model="pyme" val="No importa" label="No importa" />
                </div>

                <div class="q-px-sm">
                  Tu seleccion es: <strong>{{ pyme }}</strong>
                </div>
              </q-card-section>
            </q-card>

            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Quieres agregarle una foto a la caja?</div>
                <q-radio v-model="foto" val="S" label="si" />
                <q-radio v-model="foto" val="No importa" label="No" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                
                <q-p> Enviar foto por Redes Sociales o al correo fotos@larajalacaja.cl</q-p>
              </q-card-section>
            </q-card>

            <q-input
              outlined
              v-model="mensaje"
              type="text"
              placeholder="Escribe un mensaje para esa persona"
            >
              <template v-slot:prepend>
                <q-icon name="chat" />
              </template>
            </q-input>
          </div>

          <q-stepper-navigation>
            <q-btn
              @click="
                triggerFase3()
              "
              color="primary"
              label="Continuar"
            />
            <q-btn
              flat
              @click="
                triggerFase1()
              "
              color="primary"
              label="Volver"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Datos de compra"
          icon="shopping_bag"
          :done="done3"
        >
          <div class="q-gutter-y-md column " style="max-width: ">
            <q-input
              outlined
              v-model="nombreComprador"
              type="text"
              placeholder="Ingresa tu nombre"
            >
              <template v-slot:prepend>
                <q-icon name="insert_emoticon" />
              </template>
            </q-input>

            <q-input
              outlined
              v-model="email"
              type="text"
              placeholder="Ingresa tu email"
            >
              <template v-slot:prepend>
                <q-icon name="insert_emoticon" />
              </template>
            </q-input>

            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Tipo de Caja</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-pa-md">
                  
                  <div class="q-gutter-sm">

                    <q-select
                      v-model="tipoCaja"
                      :options="listaTipoCajas"
                      label="Caja"
                      emit-value
                      map-options
                      option-value="id"
                      option-label="nombreImpreso"
                    />


                  </div>

                  <div class="q-px-sm">
                    tu seleccion es: <strong>{{ tipoCaja }}</strong>
                  </div>
                </div>
              </q-card-section>
            </q-card>

            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Fecha de Entrega</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-input
                  outlined
                  v-model="fechaEntrega"
                  type="date"
                  placeholder="Fecha de Entrega"
                >
                  <template v-slot:prepend>
                    <q-icon name="event" />
                  </template>
                </q-input>
              </q-card-section>
            </q-card>

            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">
                  Direccion de Entrega
                </div>
              </q-card-section>

              <div class="q-pa-md q-gutter-sm" >
                <div class="q-gutter-sm">
                  <q-select
                    v-model="region"
                    :options="opcionesRegiones"
                    label="Ingrese Región"
                    @input="actualizarComunas()"
                  />
                </div>

                <q-select
                  v-model="comuna"
                  :options="opcionesComunas"
                  label="Ingrese Comuna"
                  @input="actualizarRegion()"
                />
                <q-input
                  outlined
                  v-model="direccionEnvio"
                  type="text"
                  placeholder="Ingresa la dirección de envio"
                >
                  <template v-slot:prepend>
                    <q-icon name="add_location" />
                  </template>
                </q-input>
              </div>
            </q-card>
            <q-input
              outlined
              v-model="telefonoEnvio"
              type="text"
              placeholder="Ingresa numero de la persona que recibe, dato para el despachador"
            >
              <template v-slot:prepend>
                <q-icon name="phonelink_ring" />
              </template>
            </q-input>

            <div class="q-pa-md q-gutter-sm">
              <q-dialog v-model="alert">
                <q-card style="width: 400px; max-width: 80vw;">
                  <q-card >
                    <q-card-section>
                      <div class="text-h6">Informacion del Pedido</div>
                      <div class="text-subtitle2">Datos de envio</div>
                    </q-card-section>
                    <div class="q-pa-md">
                      <p>Nombre Destinatario: {{ receptor }}</p>
                      <p>Fecha de entrega: {{ fechaEntrega }}</p>
                      <p>Region: {{ region.label }}</p>
                      <p>Comuna: {{ comuna.label }}</p>
                      <p>Direccion de envio {{ direccionEnvio }}</p>
                      <p>Telefono de envio: {{ telefonoEnvio }}</p>
                    </div>
                    <q-card-section>
                      <div class="text-subtitle2">Datos de La Caja</div>
                    </q-card-section>
                    <div class="q-pa-md">
                      <p>Motivo: {{this.listaMotivos[motivo-1].nombre}}</p>
                      <p>Para quien: {{this.listaTipoPersonas[tipoPersona-1].nombre}}</p>
                      <p>Mensaje: {{ mensaje }}</p>
                      <p>Valor caja: ${{ listaTipoCajas[tipoCaja-1].precio }}</p>
                      <p>Costo de Despacho: ${{ 0 }}</p>
                    </div>

                  </q-card>

                  <q-card-actions align="right">
                    <q-btn flat label="volver" color="primary" v-close-popup />
                    <q-btn flat label="Finalizar" @click="crearTicket()" color="primary" v-close-popup  />
                    
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </div>

          <q-stepper-navigation>

            <q-btn
              flat
              @click="
                triggerFase2()
              "
              color="primary"
              label="Volver"
              class="q-ml-sm"
            />
            <q-btn color="primary" @click="alert = true" label="Confirmar" />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
import { Notify } from 'quasar'

export default {
  name: "PageIndex",
  data() {
    return {
      step: 1,
      done1: false,
      done2: false,
      done3: false,


      receptor: "",
      receptor: "",
      motivo: 1,
      tipoPersona: 1,
      nacimiento: "",
      color: "",
      edad: "",

      categorias: [],
      pasatiempos: [],
      petLovers: [4],
      brindis: [],
      preferencias: [],

      pyme: "",
      foto: "",
      excepcion: "",
      mensaje: "",

      email: "",
      nombreComprador: "",
      tipoCaja: 2,
      fechaEntrega: "",
      region: "",
      comuna: "",
      opcionesRegiones: [],
      opcionesComunas: [],
      apiRegiones: [],
      apiComunas: [],
      selecionComuna: [],
      direccionEnvio: "",
      telefonoEnvio: "",

      alert: false,

      mascota: 'false',

      //lista de objetos que son dinamicos, estos provenientes de la api
      listaCategorias:[],
      listaPasatiempos:[],
      listaBrindis:[],
      listaPreferencias:[],
      listaPreferenciasConSal:[],
      listaPreferenciasSinSal:[],
      listaMascotas:[],
      listaMotivos:[0],
      listaTipoPersonas:[0],
      listaTipoCajas:[
        {
          precio: 0
        },  {
          precio: 0
        },{
          precio: 0
        }]
    };
  },

  methods: {
    triggerFase1() {
      
      Notify.create({
        type: 'info',
        position: 'top-right',
        message: `Fase 1: Datos del receptor.`
      })
      this.step = 1;
    },
    triggerFase2() {
      Notify.create({
        type: 'info',
        position: 'top-right',
        message: `Fase 2: Gustos del receptor.`
      })
      this.step = 2;
    },
    triggerFase3() {
      Notify.create({
        type: 'info',
        position: 'top-right',
        message: `Fase 3: Datos de la compra.`
      })
      this.step = 3;
    },
    reset() {
      this.done1 = false;
      this.done2 = false;
      this.done3 = false;
      this.step = 1;
    },
    async actualizarComunas() {
      try {
        const response = await axios.get(
          "https://apis.digital.gob.cl/dpa/regiones/" +
            this.region.value +
            "/comunas"
        );
        this.apiComunas = response.data;
        this.opcionesComunas = [];

        this.apiComunas.forEach(element => {
          this.opcionesComunas.push({
            label: element.nombre,
            value: element.codigo
          });
        });
        this.comuna = "";
      } catch (error) {
        this.error = error;
      }
    },
    actualizarRegion() {

    },
    crearTicket(){
      var url = 'tickets';
      var pymeaux;
      if(this.pyme=="no"){
        pymeaux = 0;
      }else{
        pymeaux = 1;
      }
      let post = {
        "email": this.email,
        "receptor": this.receptor,
        "emisor": this.nombreComprador,
        "edad": this.edad,
        "nacimiento": this.nacimiento,
        "color": this.color,
        "excepcion": this.excepcion,
        "pyme": pymeaux,
        "foto": this.foto,
        "mensaje": this.mensaje,
        "entrega": this.fechaEntrega,
        "region": this.region.label,
        "comuna": this.comuna.label,
        "direccion": this.direccionEnvio,
        "telefono": this.telefonoEnvio,
        "estado": 1,
        "tipoCaja": this.tipoCaja,
        "tipoPersona": this.tipoPersona,
        "motivo": this.motivo,
        "categorias": this.categorias,
        "pasatiempos": this.pasatiempos,
        "brindis": this.brindis,
        "preferencias": this.preferencias,
        "mascotas": this.petLovers
      };
      const notif = Notify.create({
        type: 'ongoing',
        position: 'top-right',
        message: 'Esperando respuesta del servidor...'
      })
      axios.post(url,post,this.obtenerConfig)
      .then((result)=>{
          if (result.data.success == true)  {
            setTimeout(() => {
              notif({
                type: 'positive',
                message: result.data.message,
              })
            }, 0)
            this.$router.push('mediopago/' + result.data.data.ticket.id);
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
        }
      })
      .catch((error) => {
          console.log(error.response.data);
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
          console.log(error.response.data);
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
          console.log(error.response.data);
      });
    },
    obtenerPreferencias(){
      var url = 'preferencias';
      this.listaPreferenciasAux = [];
      axios.get(url,this.obtenerConfig)
      .then((result)=>{
        if (result.data.success == true) {
          for (let index = 0, indexAux = 0; index < result.data.data.preferencias.length; index++, indexAux++) {
              const element = result.data.data.preferencias[index];
              let preferencia = {
                  id: element.id,
                  nombre: element.nombre,
              };
              this.listaPreferenciasAux[index]=preferencia;
              if(preferencia.nombre!='Salados'){
                this.listaPreferenciasSinSal[indexAux]=preferencia;
              }else{
                indexAux--;
              }
              this.listaPreferenciasConSal[index]=preferencia;
          }
          this.listaPreferencias = this.listaPreferenciasAux;
        }
      })
      .catch((error) => {
          console.log(error.response.data);
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
          console.log(error.response.data);
      });
    },
    obtenerMotivo(){
      var url = 'motivos';
      this.listaMotivosAux = [];
      axios.get(url,this.obtenerConfig)
      .then((result)=>{
        if (result.data.success == true) {
          for (let index = 0; index < result.data.data.motivos.length; index++) {
              const element = result.data.data.motivos[index];
              let motivo = {
                  id: element.id,
                  nombre: element.nombre,
              };
              this.listaMotivosAux[index]=motivo;
          }
          this.listaMotivos = this.listaMotivosAux;
        }
      })
      .catch((error) => {
          console.log(error.response.data);
      });
    },
    obtenerTipoPersona(){
      var url = 'tipopersonas';
      this.listaTipoPersonaAux = [];
      axios.get(url,this.obtenerConfig)
      .then((result)=>{
        if (result.data.success == true) {
          for (let index = 0; index < result.data.data.tipoPersonas.length; index++) {
              const element = result.data.data.tipoPersonas[index];
              let tipoPersona = {
                  id: element.id,
                  nombre: element.nombre,
              };
              this.listaTipoPersonaAux[index]=tipoPersona;
          }
          this.listaTipoPersonas = this.listaTipoPersonaAux;
        }
      })
      .catch((error) => {
          console.log(error.response.data);
      });
    },
    obtenerTipoCaja(){
      var url = 'tipocajas';
      this.listaTipoCajasAux = [];
      axios.get(url,this.obtenerConfig)
      .then((result)=>{
        if (result.data.success == true) {
          for (let index = 0; index < result.data.data.tipoCajas.length; index++) {
              const element = result.data.data.tipoCajas[index];
              let tipocaja = {
                  id: element.id,
                  nombre: element.nombre,
                  precio: element.precio,
                  nombreImpreso: element.nombre + " ($" + element.precio + ")"
              };
              this.listaTipoCajasAux[index]=tipocaja;
          }
          this.listaTipoCajas = this.listaTipoCajasAux;
          console.log(this.listaTipoCajas)
        }
      })
      .catch((error) => {
          console.log(error.response.data);
      });
    },
    tipoMujer(){
      console.log(this.listaPreferenciasSinSal);
      console.log(this.listaPreferenciasConSal);
      if(this.tipoPersona==1){
        this.listaPreferencias = this.listaPreferenciasSinSal;
      }else{
        this.listaPreferencias = this.listaPreferenciasConSal;
      }
      this.$forceUpdate();

    },
    eliminarUltimoElementoCategorias(){
      if(this.categorias.length==4){
        this.categorias.pop();
      }
    },
    eliminarUltimoElementoPasatiempo(){
      if(this.pasatiempos.length==4){
        this.pasatiempos.pop();
      }
    }


  },
  beforeMount(){
    //Nota: estas funciones se pueden demorar en ejecutarse, esto quiere decir que no espera a que termine para mostrar los datos, dado a que es a 2 tiempos
    //me refiero a que primero llena los datos como nombre y cantidad, no deberia darse cuenta de esto, el tiempo es relativamente corto, depende del internet obviamente
    this.obtenerTipoCaja();
    this.obtenerCategorias();
    this.obtenerPasatiempos();
    this.obtenerBrindis();
    this.obtenerPreferencias();
    this.obtenerMascotas();
    this.obtenerMotivo();
    this.obtenerTipoPersona();
  },

  async mounted() {
    try {
      const response = await axios.get(
        "https://apis.digital.gob.cl/dpa/regiones"
      );
      this.apiRegiones = response.data;

      this.apiRegiones.forEach(element => {
        this.opcionesRegiones.push({
          label: element.nombre,
          value: element.codigo
        });
      });
    } catch (error) {
      this.error = error;
    }

    try {
      const response = await axios.get(
        "https://apis.digital.gob.cl/dpa/comunas"
      );
      this.apiComunas = response.data;

      this.apiComunas.forEach(element => {
        this.opcionesComunas.push({
          label: element.nombre,
          value: element.codigo
        });
      });
    } catch (error) {
      this.error = error;
    }
  }
};
</script>
