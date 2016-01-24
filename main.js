// main.js
var Vue = require('vue')
var VueRouter = require('vue-router')

// Install the VueRouter with Vue
Vue.use(VueRouter)

// require a *.vue component
// var Base = Vue.extend({})

// Require Components
var App = require('./components/App.vue') // Main Structure
// Sub-Components
var TransactionsView = require('./components/Transactions.vue')
var BudgetView = require('./components/Budget.vue')
var AccountsView = require('./components/Accounts.vue')
var ReportsView = require('./components/Reports.vue')

// Create VueRouter
var router = new VueRouter()

// Map routes to components
router.map({
  '/transactions': {
    component: require('./components/Transactions.vue')
  },

  '/budget': {
    component: require('./components/Budget.vue')
  },

  '/accounts': {
    component: require('./components/Accounts.vue')
  }
})

// Starts the router
router.start(App, "app")
