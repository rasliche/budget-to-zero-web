<template>
  <div class="app">
    <h1>Hello BtZ!</h1>
    <ul>
      <li><a v-link="{ path: '/transactions' }">Transactions</a></li>
      <li><a v-link="{ path: '/budget' }">Budget</a></li>
      <li><a v-link="{ path: '/accounts' }">Accounts</a></li>
      <li><a v-link="{ path: '/reports' }">Reports</a></li>
    </ul>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
