<template>
  <div class="navbar" :class="{active:isActive}" @click="navclick" v-bind:style="{color:navcolor}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    navcolor: {
      type: String
    }
  },
  computed: {
    isActive() {
      return this.path == this.$route.path;
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
  /* color: #fff; */
}
.active {
  font-weight: 1000;
}
</style>