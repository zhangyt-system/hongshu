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
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -60%);
  position: absolute;
}
</style>