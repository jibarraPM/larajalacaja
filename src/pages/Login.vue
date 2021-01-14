<template>
  <q-page class="flex flex-center">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="q-pa-md q-gutter-sm">
          <q-img
            src="~assets/img/Logo.webp"
            spinner-color="white"
            style="height: 140px; max-width: 150px"
          />
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="q-gutter-y-md column">
          <q-input outlined v-model="email" type="email">
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
          <q-input outlined v-model="pass" type="password">
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div class="center column	">
          <q-btn push color="primary" label="Ingresar" @click="ingresar" />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data () {
    return {
      email: '',
      pass: ''
    }
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
