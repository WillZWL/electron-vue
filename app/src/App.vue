<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    align-items: center;
    background-color: #f8f8f8;
    background-position: center;
    display: flex;
    font-family: sans-serif, Lato, Helvetica;
    justify-content: center;
    text-align: center;
    color: #73879C;
  }
</style>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'src/vuex/store'

  export default {
    store
  }
</script>
