<template>
<h1 class="pure-menu-heading">Transactions</h1>
<table class="pure-table">
  <thead>
    <tr>
      <th>Account</th>
      <th>Date</th>
      <th>Payee</th>
      <th>Category</th>
      <th>Memo</th>
      <th>Flow</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{ store.state.transactions }}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
</template>

<script>
var store = require('../store.js')

export default {
  computed: {
    transactions() {
      return store.state.transactions
    }
  }
}
</script>

<style>
</style>
