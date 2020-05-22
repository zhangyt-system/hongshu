<template>
  <div class="totalnav">
    <div class="left">
      <slot></slot>
    </div>
    <div class="navtext">
      <NavBar path="/home" v-bind:navcolor="this.navcolor">
        <span>首页</span>
      </NavBar>
      <NavBar path="/list" v-bind:navcolor="this.navcolor">
        <span>社区精选</span>
      </NavBar>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
export default {
  props: {
    navcolor: {
      type: String
    }
  },
  components: {
    NavBar
  }
};
</script>

<style scoped>
.totalnav {
  position: relative;
  background-color: #fbfbfb;
}
.left {
  position: relative;
  left: 96px;
  top: 40px;
  cursor: pointer;
}
.navtext {
  display: flex;
  height: 106px;
  line-height: 106px;
  flex-direction: row;
  justify-content: flex-end;
}
</style>