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
body {
  margin: 0;
  padding: 0;
  background-color: black;
  display: flex;
  overflow: hidden;
}
.app {
  display: flex;
  height: 100vh;
}

</style>
