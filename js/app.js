var transactions = [
  { target: 'Income', category: 'Income', memo: 'Check from A', flow: 351, date: '1/1/16'},
  { target: 'Debbie', category: 'Rent', flow: -325, date: '1/8/16'},
  { target: 'Burdines', category: 'Restaurant', flow: -11, date:'1/11/16' },
  { target: '5 Brothers', category: 'Restaurant', flow: -15, date: '1/11/16'},
  { target: 'Transfer: Checking', category: '', memo: 'for rent', flow: 320, date: '1/15/16' }
];

new Vue({
  el: '#app',

  data: {
    newTransaction: {},
    transactions: transactions
  },

  methods: {
    addTransaction: function() {
      var title = this.newTransaction.trim();
      if (title) {
        this.transactions.push({title: title});
        this.newTransaction = '';
      }
    },

    removeTransaction: function(index) {
      this.transactions.splice(index, 1);
    }
  },

  computed: {
    balance: function() {
      return this.transactions.reduce(function(a, b) {
        return (a + b.flow);
      }, 0)
    }
  }
})
