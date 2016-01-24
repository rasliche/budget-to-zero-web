<template>
  <div class="app">
    <nav class="pure-menu sidebar">
      <a class="pure-menu-heading" v-link="{ path: '/' }">BtZ</a>
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a v-link="{ path: '/transactions' }">Transactions</a></li>
        <li class="pure-menu-item"><a v-link="{ path: '/budget' }">Budget</a></li>
        <li class="pure-menu-item"><a v-link="{ path: '/accounts' }">Accounts</a></li>
        <li class="pure-menu-item"><a v-link="{ path: '/reports' }">Reports</a></li>
      </ul>
    </nav>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
