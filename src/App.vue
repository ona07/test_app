<!-- src/App.vue -->
<template>
  <div class="app">
    <sidebar></sidebar>
    <router-view></router-view>    
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  }
};
</script>

<style>
body{
  margin:0;
  padding: 0;
  display: flex;
  overflow: hidden;
}
.app{
  height: 100vh;
  background-color: darkgrey;
}
</style>