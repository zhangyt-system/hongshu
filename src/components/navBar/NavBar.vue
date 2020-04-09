<template>
  <div class="navbar" @click="navclick" v-bind:style="{color:navcolor}">
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
</style>