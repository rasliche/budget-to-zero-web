<template>
  <div class="transaction-entry">
    <input placeholder="Account" :value="newtransaction.account" @input="updateNewTransaction">
    <input placeholder="Date" :value="newtransaction.date" @input="updateNewTransaction">
    <input placeholder="Target"  :value="newtransaction.target" @input="updateNewTransaction">
    <input placeholder="Category" :value="newtransaction.category" @input="updateNewTransaction">
    <input placeholder="Memo" :value="newtransaction.memo" @input="updateNewTransaction">
    <input placeholder="Flow" :value="newtransaction.flow" @input="updateNewTransaction">
    <button class="btn" v-on:click="addTransaction()">
  </div>
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
