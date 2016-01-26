import Vue from 'vue'
import Vuex from 'vuex'

// Tell Vue to use Vuex
Vue.use(Vuex)

// Define the mutation variables
const SOME_MUTATION = 'SOME_MUTATION'

// export the store
export default new Vuex.Store({
  state: {
    transactions: [1,2]
  },

  mutations: {
    [SOME_MUTATION] (state) {
      // mutate state
    }
  },

  actions: {
     // get called by components
  },
  strict: true // the anti-intern device
})
