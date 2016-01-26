var Vue = require('vue')
import Vuex from 'vuex'

// Tell Vue to use Vuex
Vue.use(Vuex)

// Define the mutation variables
const ADD_TRANSACTION = 'ADD_TRANSACTION'

// export the store
module.exports = new Vuex.Store({
  state: {
    newtransaction: {
      account: "",
      date: "",
      target: "",
      category: "",
      memo: "",
      flow: 0
    },
    transactions: [
      {
        account: "YAY",
        date:"hey"
      },
      {
        account: "Cash",
        date: "1/1/16",
        target: "5 Brothers 2",
        category: "Restaurants",
        memo: "Breakfast for A+E",
        flow: -20
      },
      {
        account: "Cash",
        date: "1/8/16",
        target: "Debbie",
        category: "Rent",
        memo: "+A",
        flow: -325
      },
      {
        account: "Cash",
        date: "1/6/16",
        target: "Money Market Checking",
        category: "Transfer",
        memo: "for Rent",
        flow: 320
      }
    ]
  },

  mutations: {
    [ADD_TRANSACTION] (state, transaction) {
      state.transactions.push(transaction)
    }
  },

  actions: {
     addTransaction: ADD_TRANSACTION
  },
  strict: true // the anti-intern device
})
