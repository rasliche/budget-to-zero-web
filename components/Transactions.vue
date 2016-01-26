<template>
<h1 class="pure-menu-heading">Transactions</h1>
<table class="pure-table pure-table-horizontal">
  <thead>
    <tr>
      <th>Account</th>
      <th>Date</th>
      <th>Target</th>
      <th>Category</th>
      <th>Memo</th>
      <th>Flow</th>
    </tr>
    <tr>
      <th><input placeholder="Account" v-model="newtransaction.account"></th>
      <th><input style="width:100px;" placeholder="Date" v-model="newtransaction.date"></th>
      <th><input placeholder="Target"  v-model="newtransaction.target"></th>
      <th><input placeholder="Category" v-model="newtransaction.category"></th>
      <th><input placeholder="Memo" v-model="newtransaction.memo"></th>
      <th><input style="width:60px;" placeholder="Flow" v-model="newtransaction.flow"></th>
      <th><button v-on:click="addTransaction()"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="transaction in transactions">
      <td>{{ transaction.account }}</td>
      <td>{{ transaction.date }}</td>
      <td>{{ transaction.target }}</td>
      <td>{{ transaction.category }}</td>
      <td>{{ transaction.memo }}</td>
      <td>{{ transaction.flow }}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
var store = require('../store.js')

module.exports = {
   computed: {
     transactions() {
       return store.state.transactions
     },
     newtransaction() {
       return store.state.newtransaction
     }
   },
  //  methods: {
  //    store.actions
  //  }
}
</script>

<style>

</style>
