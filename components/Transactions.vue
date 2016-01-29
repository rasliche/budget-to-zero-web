<template>
<header>
  <h1>Transactions</h1>
</header>
<section class="row">
  <div class="col-sm-9">
<table class="table table-striped table-condensed table-hover">
  <thead>
    <tr>
      <th v-for="key in transactionkeys">
        {{ key }}
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="transaction in transactions">
      <td v-for="col in transaction">{{ transaction[$key] }}</td>
    </tr>
  </tbody>
</table>
</div>
<div class="col-sm-3">
<new-transaction-form>
</new-transaction-form>
</div>
</section>
</template>

<script>
var store = require('../store.js')
var NewTransactionForm = require('./NewTransactionForm.vue')

module.exports = {
  components: { 'new-transaction-form': NewTransactionForm },

  computed: {
   transactions() {
     return store.state.transactions
   },

   transactionkeys() {
     return store.state.transactionkeys
   }
  },
  methods: {
     addTransaction: store.actions.addTransaction,

     updateNewTransaction: function(e) {
       console.log(e.target, e.target.value)
       store.actions.updateNewTransaction(e.target.value, e.target)
     }
   }
}
</script>

<style>
</style>
