<template>
  <div class="childlist">
    <ItemList v-for="(item,index) in indexList" :key="index" :indexItem="item"></ItemList>
  </div>
</template>

<script>
import ItemList from "./ItemList";

export default {
  data() {
    return {};
  },
  props: {
    indexList: {
      type: Array
    }
  },
  components: {
    ItemList
  }
};
</script>

<style scoped>
.childlist {
  width: 100%;
  height: 1766px;
  /* flex-grow: 1; */
  display: flex;
  /* 属性定义项目在交叉轴上如何对齐,从顶部开始 */
  align-items: flex-start;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>