<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <span> | </span>
    <router-link to="/add">AddBlogs</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Blog App",
    };
  },
};
</script>

<style>
 a{
   font-size: 25px;
 }
</style>
