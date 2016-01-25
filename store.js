import Vue from 'vue'
import Vuex from 'vuex'

// Tell Vue to use Vuex
Vue.use(Vuex)

// Define the mutation variables
const ADD_TRANSACTION = 'ADD_TRANSACTION'

// export the store
export default new Vuex.Store({
  state: { },

  mutations: { },

  actions: { },
  strict: true // the anti-intern device
})
