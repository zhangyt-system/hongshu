<template>
  <div class="collist">
    <ItemList />
    <ItemList />
    <ItemList />
    <ItemList />
  </div>
</template>

<script>
import ItemList from "./Itemlist";

export default {
  components: {
    ItemList
  }
};
</script>

<style scoped>
.collist {
  position: absolute;
  width: 220px;
  background-color: blue;
}
</style>