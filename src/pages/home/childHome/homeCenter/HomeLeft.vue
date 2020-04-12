<template>
  <div class="left">
    <video autoplay="autoplay" muted="muted" loop="loop" poster="@/assets/image/vedioimg.png">
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
  /* width: 300px;
  height: 600px; */
  width: 230px;
  height: 460px;
  background-image: url(//ci.xiaohongshu.com/3ca6607e-d4a5-4cb9-b455-a746713d8283);
  background-size: cover;
  position: relative;
}
video {
  position: absolute;
  width: 220px;
  height: 450px;
  margin: 10px 9px;
  border-radius: 36px;
}
/* .left {
  width: 200px;
  height: 200px;
} */
</style>