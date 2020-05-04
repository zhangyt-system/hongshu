<template>
  <div class="item" @click="listItemClick">
    <div>
      <img :src="this.indexItem.art_pic.split('#')[0]" />
    </div>
    <div class="desc">{{indexItem.art_title}}</div>
    <div class="auth">白日梦马 ❤39</div>
  </div>
</template>

<script>
export default {
  props: {
    indexItem: {
      type: Object
    }
  },
  methods: {
    listItemClick() {
      let id = this.indexItem.art_id;
      this.$router.push({ path: "/detail", query: { id } });
    }
  }
};
</script>

<style scoped>
.item::before {
  content: "";
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
}
.item:hover::before {
  display: block;
}
.item {
  width: 220px;
  /* 上10 左、右 10 下90 */
  margin: 20px 10px 20px;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
}
img {
  border-radius: 8px 8px 0 0;
  height: 100%;
  width: 100%;
}
.desc {
  width: 190px;
  height: 46.93px;
  margin: 10px 15px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #000;
}
.auth {
  padding: 0 15px 10px;
  width: 100%;
}
</style>