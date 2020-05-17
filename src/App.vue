<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Layouts/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
* {
  font-family: "Tajawal", sans-serif;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
body {
  background: #eee;
}
</style>
