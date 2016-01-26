<template>
<div class="app pure-g">
  <nav class="pure-menu pure-u sidebar">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a class="pure-menu-link" v-link="{ path: '/' }">Budget to Zero</a>
      <li class="pure-menu-item"><a class="pure-menu-link" v-link="{ path: '/transactions' }">Transactions</a>
      <li class="pure-menu-item"><a class="pure-menu-link" v-link="{ path: '/budget' }">Budget</a></li>
      <li class="pure-menu-item"><a class="pure-menu-link" v-link="{ path: '/accounts' }">Accounts</a></li>
    </ul>
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a class="pure-menu-link" v-link="{ path: '/reports' }">Reports</a></li>
      <li class="pure-menu-item"><a class="pure-menu-link">Goals</a></li>
      <li class="pure-menu-item"><a class="pure-menu-link">Debt Payoff</a></li>
      <li class="pure-menu-item"><a class="pure-menu-link">Calendar</a></li>
      <li class="pure-menu-item"><a class="pure-menu-link">Asset Worth</a></li>
      <li class="pure-menu-item"><a class="pure-menu-link">Investments</a></li>
      <li class="pure-menu-item"><a class="pure-menu-link">Hot Spots</a></li>
    </ul>
  </nav>

  <div class="content pure-u">
    <router-view></router-view>
  </div> <!-- Content -->
</div> <!-- App -->
</template>

<script>
var store = require('../store.js')
</script>

<style>
.sidebar {
  height: 100vh;
  width: 150px;
}
</style>
