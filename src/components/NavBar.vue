<template>
  <div class="navbar" @click="navclick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    path: {
      type: String,
      required: true
    }
  },
  methods: {
    navclick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.navbar {
  margin: 0 76px 0 0;
  color: #333;
  cursor: pointer;
}
.active {
  color: #ff2442;
}
</style>