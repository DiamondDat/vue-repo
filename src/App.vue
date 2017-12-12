<template>
  <div id="app">
    <div class="text-center">
      <img src="./assets/logo.png">
      <h1>Welcome to the Vue Repo App</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 60px auto;
  }

  .errors {
    font-size: 20px;
    font-style: italic;
  }
</style>
