<template>
  <div>
    <div class="left">
      <!-- <img src="@/assets/image/logo.png" /> -->
      <slot></slot>
    </div>

    <div class="totalnav">
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
import NavBar from "../navBar/NavBar";
export default {
  props: {
    navcolor: {
      type: String
    }
  },
  components: {
    NavBar
  },
  mounted() {
    console.log(this.navcolor);
  }
};
</script>

<style scoped>
.left {
  position: relative;
  left: 96px;
  top: 40px;
}
.totalnav {
  display: flex;
  height: 106px;
  line-height: 106px;
  flex-direction: row;
  justify-content: flex-end;
}
</style>