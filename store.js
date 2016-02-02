var Vue = require('vue')
import Vuex from 'vuex'
import PouchDB from 'pouchdb'

// Tell Vue to use Vuex
Vue.use(Vuex)
var transactionsdb = new PouchDB('transactionsdb')

// Define the mutation variables
const FETCH_TRANSACTION_DATA = 'FETCH_TRANSACTION_DATA'
const ADD_TRANSACTION = 'ADD_TRANSACTION'
const UPDATE_NEW_TRANSACTION = 'UPDATE_NEW_TRANSACTION'

// export the store
module.exports = new Vuex.Store({
  state: {
    transactions: [

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

    [FETCH_TRANSACTION_DATA] (state) {
      transactionsdb.allDocs({
        include_docs: true}).then( function(result) {
          state.transactions = result.rows;
        }).catch( function(err) {
          console.log(err)
        });
    }
  },

  actions: {
     addTransaction: ADD_TRANSACTION,
     updateNewTransaction: UPDATE_NEW_TRANSACTION,
     fetchTransactionData: FETCH_TRANSACTION_DATA
  },
  strict: true // the anti-intern device
})

var db = new PouchDB('transactionsdb');
db.bulkDocs([
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
]).then( function(result) {
    store.state.transactions = result;
  }).catch( function(err) {
    console.log(err)
  });
