<template>
  <div class="app container-fluid">
    <nav class="nav navbar-fixed-top">
      <a class="btn btn-default" v-link="{ path: '/' }">Budget to Zero</a>
      <a class="btn btn-default" v-link="{ path: '/transactions' }">Transactions</a>
      <a class="btn btn-default" v-link="{ path: '/budget' }">Budget</a>
      <a class="btn btn-default" v-link="{ path: '/accounts' }">Accounts</a>
      <a class="btn btn-default" v-link="{ path: '/reports' }">Reports</a>
      <a class="">Goals</a>
      <a class="">Debt Payoff</a>
      <a class="">Calendar</a>
      <a class="">Asset Worth</a>
      <a class="">Investments</a>
      <a class="">Hot Spots</a>
      </ul>
    </nav>

    <div class="row">
      <div class="col-md-3">
      </div>

      <div class="content col-md-9">
        <header>
          <p>Heading</p>
        </header>
        <router-view></router-view>
      </div> <!-- Content -->
    </div> <!-- .container -->
  </div> <!-- App -->
</template>

<script>
  var store = require('../store.js')
</script>

<style>
body {
  padding-top: 50px;
}

.content {
  padding-left: auto;
}
</style>
