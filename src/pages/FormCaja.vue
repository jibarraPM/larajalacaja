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
              v-model="nombreFestejado"
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
                  <q-radio
                    v-model="motivo"
                    val="Cumpleaños"
                    label="Cumpleaños"
                  />
                  <q-radio
                    v-model="motivo"
                    val="Bebé en camino"
                    label="Bebé en camino"
                  />
                  <q-radio
                    v-model="motivo"
                    val="Bienvenid@ a la solteria"
                    label="Bienvenid@ a la solteria"
                  />
                  <q-radio
                    v-model="motivo"
                    val="Día del Madre"
                    label="Día del Madre"
                  />
                  <q-radio
                    v-model="motivo"
                    val="Día del Padre"
                    label="Día del Padre"
                  />
                  <q-radio v-model="motivo" val="Navidad" label="Navidad" />
                  <q-radio v-model="motivo" val="Otro" label="Otro" />
                </div>

                <div class="q-px-sm">
                  Tu seleccion es: <strong>{{ motivo }}</strong>
                </div>
              </q-card-section>
            </q-card>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Para Quién?</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-gutter-sm">
                  <q-radio v-model="paraQuien" val="Mujer" label="Mujer" />
                  <q-radio v-model="paraQuien" val="Hombre" label="Hombre" />
                  <q-radio v-model="paraQuien" val="Niño" label="Niño" />
                  <q-radio v-model="paraQuien" val="Niña" label="Niña" />
                  <q-radio v-model="paraQuien" val="Otro" label="Otro" />
                </div>

                <div class="q-px-sm">
                  Tu seleccion es: <strong>{{ paraQuien }}</strong>
                </div>
              </q-card-section>
            </q-card>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Fecha de Nacimiento</div>
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
                () => {
                  done1 = true;
                  step = 2;
                }
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
                  Caracteristicas que definen a la persona
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-pa-md">
                  <div class="q-gutter-sm">
                    <q-checkbox
                      v-model="caracteristica"
                      val="Rockers"
                      label="Rockers"
                    />
                    <q-checkbox
                      v-model="caracteristica"
                      val="Carreter@"
                      label="Carreter@"
                    />
                    <q-checkbox
                      v-model="caracteristica"
                      val="Trabajolic@"
                      label="Trabajolic@"
                    />
                    <q-checkbox
                      v-model="caracteristica"
                      val="Romántic@"
                      label="Romántic@"
                    />
                    <q-checkbox
                      v-model="caracteristica"
                      val="Pretencios@"
                      label="Pretencios@"
                    />
                    <q-checkbox
                      v-model="caracteristica"
                      val="Organizad@"
                      label="Organizad@"
                    />
                    <q-checkbox
                      v-model="caracteristica"
                      val="Sexy"
                      label="Sexy"
                    />
                  </div>
                </div>

                <div class="q-px-sm">
                  Selección Actual <strong>{{ caracteristica }}</strong>
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
                  Para Hacer Salud
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

            <q-input
              outlined
              v-model="noIncluir"
              type="text"
              placeholder="Ni por nada (Algo con azúcar, lactosa o de color rosado)"
            >
              <template v-slot:prepend>
                <q-icon name="cancel" />
              </template>
            </q-input>

            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Deseas que tu caja apoye a una pyme</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-gutter-sm">
                  <q-radio v-model="pyme" val="Si" label="Si" />
                  <q-radio v-model="pyme" val="No" label="No" />
                </div>

                <div class="q-px-sm">
                  Tu seleccion es: <strong>{{ pyme }}</strong>
                </div>
              </q-card-section>
            </q-card>

            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Incluir Foto</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-file color="purple-12" v-model="foto" label="Subir foto">
                  <template v-slot:prepend>
                    <q-icon name="add_photo_alternate" />
                  </template>
                </q-file>
              </q-card-section>
            </q-card>

            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Fecha de Nacimiento</div>
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
                () => {
                  done2 = true;
                  step = 3;
                }
              "
              color="primary"
              label="Continuar"
            />
            <q-btn
              flat
              @click="step = 1"
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

            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Tipo de Caja</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-pa-md">
                  <div class="q-gutter-sm">
                    <q-radio
                      v-model="tipoCaja"
                      val="Caja Ligth"
                      label="Caja Ligth"
                    />
                    <q-radio
                      v-model="tipoCaja"
                      val="Caja Medium"
                      label="Caja Medium"
                    />
                    <q-radio
                      v-model="tipoCaja"
                      val="Caja Premium"
                      label="Caja Premium"
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
                <div class="text-h6">Feche de Entrega</div>
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
                      <p>Nombre Destinatario: {{ nombreFestejado }}</p>
                      <p>Fecha de entrega: {{ fechaEntrega }}</p>
                      <p>Region: {{ region.label }}</p>
                      <p>Comuna: {{ comuna.lavel }}</p>
                      <p>Direccion de envio {{ direccionEnvio }}</p>
                      <p>Telefono de envio: {{ telefonoEnvio }}</p>
                    </div>
                    <q-card-section>
                      <div class="text-subtitle2">Datos de La Caja</div>
                    </q-card-section>
                    <div class="q-pa-md">
                      <p>Motivo: {{ motivo }}</p>
                      <p>Para quien: {{ paraQuien }}</p>
                      <p>Mensaje: {{ mensaje }}</p>
                    </div>
                  </q-card>

                  <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </div>

          <q-stepper-navigation>
            <q-btn label="Detalles" color="primary" @click="alert = true" />
            <q-btn
              flat
              @click="step = 2"
              color="primary"
              label="Volver"
              class="q-ml-sm"
            />
            <q-btn color="primary" @click="done3 = true" label="Finalizar" />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
export default {
  name: "PageIndex",
  data() {
    return {
      step: 1,
      done1: false,
      done2: false,
      done3: false,

      nombreFestejado: "",
      motivo: "",
      paraQuien: "",
      nacimiento: "",
      color: "",

      caracteristica: [],
      pasatiempo: [],
      petLover: [],
      brindis: [],
      preferencia: [],

      pyme: "",
      foto: null,
      noIncluir: "",
      mensaje: "",

      nombreComprador: "",
      tipoCaja: "Caja Medium",
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

      alert: false
    };
  },

  methods: {
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
    actualizarRegion() {}
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
