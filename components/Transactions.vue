<template>
<header>
  <h1>Transactions</h1>
</header>
<section class="row">
  <div class="col-sm-9">
    <!-- Can this table be refactored out? -->
    <table class="table table-striped table-condensed table-hover">
      <thead>
        <tr>
          <th>Category</th>
          <th>Target</th>
          <th>Flow</th>
        </tr>
      </thead>
      <tbody>
        <!-- Replace with SVG pointing to newTransForm -->
        <tr v-show="!transactions">
          <td>No transactions yet...</td>
        </tr>
        <tr v-for="transaction in transactions">
          <td>{{ transaction.category }}</td>
          <td>{{ transaction.target }}</td>
          <td>{{ transaction.flow }}</td>
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
      return store.state.transactions;
    }
  }
}
</script>

<style>
</style>
