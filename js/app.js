var vm = new Vue({
  el: '#app',

  data: {
    newTransaction: '',
    transactions: []
  },

  methods: {
    addTransaction: function() {
      var title = this.newTransaction.trim();
      if (title) {
        localforage.setItem('title', title);
        this.newTransaction = '';
      }
    },

    removeTransaction: function(index) {
      this.transactions.splice(index, 1);
    }
  }
})

vm.transactions = ["Take the dog out", "pay bills", "write songs"];
