<template>
<form>
  <div class="form-group">
    <label for="newTransactionAccount">Account</label>
    <input class="form-control" placeholder="Account" v-model="account" @input="">
  </div>
  <div class="form-group">
    <label for="newTransactionAccount">Date</label>
    <input class="form-control" placeholder="Date" v-model="date" @input="">
  </div>
  <div class="form-group">
    <label for="newTransactionAccount">Target</label>
    <input class="form-control" placeholder="Target"  v-model="target" @input="">
  </div>
  <div class="form-group">
    <label for="newTransactionAccount">Category</label>
    <input class="form-control" placeholder="Category" v-model="category" @input="">
  </div>
  <div class="form-group">
    <label for="newTransactionAccount">Memo</label>
    <input class="form-control" placeholder="Memo" v-model="memo" @input="">
  </div>
  <div class="form-group">
    <label for="newTransactionFlow">Flow</label>
    <div class="input-group">
      <div class="input-group-addon">$</div>
      <input class="form-control" placeholder="Flow"  v-model="transaction.flow" @input="">
    </div>
  </div>
    <button class="btn btn-default" v-on:click.prevent="">Add Transaction</button>
</form>
</template>

<script>
var store = require('../store.js')

module.exports = {
  data: function() {
      return { transaction: {
      account: "",
      date: "",
      target: "",
      category: "",
      memo: "",
      flow: 0
    }
    }
  },

   methods: {
     addTransaction: store.actions.addTransaction

  //  updateNewTransaction: function(e) {
  //    console.log(e.target, e.target.value)
  //    store.actions.updateNewTransaction(e.target.value, e.target)
  //  }
 }
}
</script>


<style>
</style>
