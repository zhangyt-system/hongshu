<template>
  <div id="app">
    <!-- <MainNavBar /> -->
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
import MainNavBar from "./components/mainNavBar/MainNavBar";
export default {
  name: "app",
  components: {
    MainNavBar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
