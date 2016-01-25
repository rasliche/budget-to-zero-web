// main.js
var Vue = require('vue')
var VueRouter = require('vue-router')

// Install the VueRouter with Vue
Vue.use(VueRouter)

// Require Components
var App = require('./components/App.vue') // Main Structure
var HomeView = require('./components/Home.vue') // Landing/Summary
// Sub-Component pages
var TransactionsView = require('./components/Transactions.vue')
var BudgetView = require('./components/Budget.vue')
var AccountsView = require('./components/Accounts.vue')
var ReportsView = require('./components/Reports.vue')

// Create VueRouter
var router = new VueRouter()

// Map routes to components
router.map({
  '/': {
    component: HomeView
  },

  '/transactions': {
    component: TransactionsView
  },

  '/budget': {
    component: BudgetView
  },

  '/accounts': {
    component: AccountsView
  },

  '/reports': {
    component: ReportsView
  }
})

// Starts the router
router.start(App, "app")
