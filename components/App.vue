<template>
<div class="app row">
  <nav class="col-sm-2">
    <ul class="nav nav-pills nav-stacked">
      <li><a v-link="{ path: '/' }">Budget to Zero</a></li>
      <li><a v-link="{ path: '/budget' }">Budget</a></li>
      <li><a v-link="{ path: '/transactions' }">Transactions</a></li>
      <li><a v-link="{ path: '/accounts' }">Accounts</a></li>
      <li><a v-link="{ path: '/reports' }">Reports</a></li>
      <li><a>Goals</a></li>
      <li><a>Debt Payoff</a></li>
      <li><a>Calendar</a></li>
      <li><a>Asset Worth</a></li>
      <li><a>Investments</a></li>
      <li><a>Hot Spots</a></li>
    </ul>
  </nav>



  <div class="content col-sm-10">
    <router-view></router-view>
  </div> <!-- Content -->
</div> <!-- App -->
</template>

<script>
var store = require('../store.js')
</script>

<style>
/* styles the active link */
.v-link-active {
  color: white;
  background-color: rgb(51, 122, 183);
}
</style>
