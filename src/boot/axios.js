import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://apilarajalacaja.proyectomapache.cl/api/';

Vue.prototype.$axios = axios