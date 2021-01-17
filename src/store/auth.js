import axios from 'axios'
import { LocalStorage, SessionStorage } from 'quasar'

//xebaelvemgador@gmail.com
//Sterek64
export default {

    namespaced: true,
    state: {
        token: null,
        user: null,
        config: null
    },
    getters: {
        authenticated(state) {
            return state.token
        },
        user(state) {
            return state.user
        },
        config(state) {
            return state.config
        }
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload
        },
        setConfig(state, payload) {
            state.config = payload
        },
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        async login({ commit }, user) {
            await axios.post('auth/login', user)
                .then((result) => {
                    commit('setToken', result.data.data.token)
                    var config = {
                        headers: {
                            Authorization: 'Bearer ' + result.data.data.token
                        }
                    }
                    SessionStorage.set('token', result.data.data.token)
                    commit('setToken', result.data.data.token)
                    SessionStorage.set('config', config)
                    commit('setConfig', config)
                    localStorage.setItem('user', result.data.data.user)
                    commit('setUser', result.data.data.user)
                    return true
                })
                .catch((error) => {
                    return false;
                })
        },
        obtenerToken({ commit }) {
            if (SessionStorage.getItem('token')) {
                commit('setToken', SessionStorage.getItem('token'))
            } else {
                commit('setToken', null)
            }
        },
        obtenerConfig({ commit }) {
            if (SessionStorage.getItem('config')) {
                commit('setConfig', SessionStorage.getItem('config'))
            } else {
                commit('setConfig', null)
            }
        },
        obtenerUser({ commit }) {
            if (localStorage.getItem('user')) {
                commit('setUser', localStorage.getItem('user'))
            } else {
                commit('setUser', null)
            }
        },
        logout({ commit, state }) {
            return axios.get('auth/logout', state.config).then(() => {
                commit('setToken', null)
                commit('setConfig', null)
                commit('setUser', null)
            })
        }
    }
}