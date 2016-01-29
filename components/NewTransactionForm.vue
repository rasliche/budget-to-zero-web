<template>
<form>
  <div class="form-group">
    <label for="newTransactionAccount">Account</label>
    <input class="form-control" placeholder="Account" :value="newtransaction.account" @input="updateNewTransaction">
  </div>
  <div class="form-group">
    <label for="newTransactionAccount">Date</label>
    <input class="form-control" placeholder="Date" :value="newtransaction.date" @input="updateNewTransaction">
  </div>
  <div class="form-group">
    <label for="newTransactionAccount">Target</label>
    <input class="form-control" placeholder="Target"  :value="newtransaction.target" @input="updateNewTransaction">
  </div>
  <div class="form-group">
    <label for="newTransactionAccount">Category</label>
    <input class="form-control" placeholder="Category" :value="newtransaction.category" @input="updateNewTransaction">
  </div>
  <div class="form-group">
    <label for="newTransactionAccount">Memo</label>
    <input class="form-control" placeholder="Memo" :value="newtransaction.memo" @input="updateNewTransaction">
  </div>
  <div class="form-group">
    <label for="newTransactionFlow">Flow</label>
    <div class="input-group">
      <div class="input-group-addon">$</div>
      <input class="form-control" placeholder="Flow"  :value="newtransaction.flow" @input="updateNewTransaction">
    </div>
  </div>
    <button class="btn btn-default" v-on:click.prevent="addTransaction()">Add Transaction</button>
</form>
</template>

<script>
var store = require('../store.js')

module.exports = {
  computed: {
    newtransaction() {
      return store.state.newtransaction
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
