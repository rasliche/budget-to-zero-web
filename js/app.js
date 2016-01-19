// var transactions = [
//   { target: 'Income', category: 'Income', memo: 'Check from A', flow: 351, date: '1/1/16'},
//   { target: 'Debbie', category: 'Rent', flow: -325, date: '1/8/16'},
//   { target: 'Burdines', category: 'Restaurant', flow: -11, date:'1/11/16' },
//   { target: '5 Brothers', category: 'Restaurant', flow: -15, date: '1/11/16'},
//   { target: 'Transfer: Checking', category: '', memo: 'for rent', flow: 320, date: '1/15/16' }
// ];

new Vue({
  el: '#app',

  data: {
    transaction: {},
    transactions: []
  },
  ready: function() {
    console.log("ready ran");
    this.getAccount();
  },

  methods: {
    addTransaction: function() {
      var t = this.transaction;
      t.date = this.transaction.date;
      t.target = this.transaction.target;
      t.category = this.transaction.category;
      t.flow = parseFloat(this.transaction.flow);

      if (t) {
        this.transactions.push(t);
        this.transaction = {};
        console.log(this.transactions);
      }
      this.saveAccount();

    },

    removeTransaction: function(index) {
      this.transactions.splice(index, 1);
      this.saveAccount();
    },

    saveAccount: function() {
      localStorage.setItem("btz-account", JSON.stringify(this.transactions));
    },

    getAccount: function() {
      var data = JSON.parse(localStorage.getItem("btz-account"));
      this.transactions = data;
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
