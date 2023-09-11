<template>
  <div>
    <navbar></navbar>
    <div class="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: rgb(161, 215, 255);
}
body {
  height: 100%;
  background: #4c4c91;
  background-image: url("@/assets/gg3.jpg") !important;
  background-size: cover;
}
.app {
  padding: 20px;
}
</style>
