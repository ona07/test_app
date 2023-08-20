<template>
    <aside class="sidebar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'MySidebar'
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 4%;
    height: 100%;
    text-align: center;
    padding: 20px;
  }
  
  .sidebar a {
    display: block;
    margin-bottom: 10px;
    color: #333;
    text-decoration: none;
  }
  </style>
  