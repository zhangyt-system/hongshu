<template>
  <div>
    <video poster="@/assets/image/bgimg.png" autoplay="autoplay" muted="muted" loop="loop">
      <source src="@/assets/image/背景视频.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
video {
  position: fixed;
  right: 0px;
  bottom: 0px;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  z-index: -1;
}
source {
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
}
</style>