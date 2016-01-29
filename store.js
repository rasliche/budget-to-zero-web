var Vue = require('vue')
import Vuex from 'vuex'

// Tell Vue to use Vuex
Vue.use(Vuex)

// Define the mutation variables
const ADD_TRANSACTION = 'ADD_TRANSACTION'
const LOAD_TRANSACTION_DB = 'LOAD_TRANSACTION_DB'
const UPDATE_NEW_TRANSACTION = 'UPDATE_NEW_TRANSACTION'

// export the store
module.exports = new Vuex.Store({
  state: {
    transactionkeys: ['Account', 'Date', 'Target', 'Category', 'Memo', 'Flow'],
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
    [UPDATE_NEW_TRANSACTION] (state, nt) {
      console.log(state.newtransaction.account)
      state.newtransaction.account = nt
    },

    [ADD_TRANSACTION] (state) {
      state.transactions.push(state.newTransaction)
      state.newTransaction = {
        account: "",
        date: "",
        target: "",
        category: "",
        memo: "",
        flow: 0
      }
    },

    [LOAD_TRANSACTION_DB] (state) {

    }
  },

  actions: {
     addTransaction: ADD_TRANSACTION,
     updateNewTransaction: UPDATE_NEW_TRANSACTION
  },
  strict: true // the anti-intern device
})
