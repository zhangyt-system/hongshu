<template>
  <div class="childlist">
    <ColList />
    <ColList />
    <ColList />
    <ColList />
    <ColList />
  </div>
</template>

<script>
import ColList from "./Itemlist";
export default {
  components: {
    ColList
  }
};
</script>

<style scoped>
.childlist {
  position: relative;
  background-color: pink;
  width: 100%;
}
</style>