<template>
  <div class="homecenter">
    <HomeRight />
    <HomeLeft />
  </div>
</template>

<script>
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
export default {
  components: {
    HomeRight,
    HomeLeft
  }
};
</script>

<style scoped>
.homecenter {
  /* width: 660px;
  height: 540px;
  position: relative; */
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  /* flex-direction: row; */
  align-items: center;
}
</style>