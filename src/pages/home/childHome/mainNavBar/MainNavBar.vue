<template>
  <div class="totalnav">
    <div class="left">
      <slot></slot>
    </div>
    <div class="navtext">
      <NavBar path="/home" v-bind:navcolor="this.navcolor">
        <span class="home">首页</span>
      </NavBar>
      <NavBar path="/list" v-bind:navcolor="this.navcolor">
        <span>社区精选</span>
      </NavBar>
    </div>
  </div>
</template>

<script>
import NavBar from "../navBar/NavBar";
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
  position: absolute;
}
.left {
  position: absolute;
  left: 96px;
  top: 40px;
  cursor: pointer;
}
.navtext {
  position: relative;
  display: flex;
  flex-direction: row;
  left: 1300px;
  height: 106px;
  line-height: 106px;
  cursor: pointer;
}
.home {
  color: lightgray;
}
</style>