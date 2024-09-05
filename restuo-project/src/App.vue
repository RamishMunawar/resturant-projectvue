<template>
  <div id="app">
    <!-- <UserLogin /> -->
      <router-view ></router-view>
  </div>


</template>

<script>
// import UserLogin from './components/UserLogin.vue'
export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
