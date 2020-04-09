<template>
  <div>
    <video autoplay="autoplay" muted="muted" loop="loop">
      <source src="@/assets/image/centent.mp4" type="video/mp4" />Your browser does not support the video tag.
    </video>
    <div class="iphone"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.iphone {
  width: 300px;
  height: 600px;
  background-image: url(//ci.xiaohongshu.com/3ca6607e-d4a5-4cb9-b455-a746713d8283);
  background-size: cover;
  position: relative;
}
video {
  position: absolute;
  width: 260px;
  height: 564px;
  margin: 18px 20px;
  border-radius: 29px;
}
/* source { */
/* min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
} */
</style>