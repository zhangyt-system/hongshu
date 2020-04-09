<template>
  <div class="right">
    <div class="top"></div>
    <h2>标记我的生活</h2>
    <div class="bottom">
      <div class="ios">
        <span class="iconfont">&#xe606;</span>
        IOS版
      </div>
      <div class="android">
        <span class="iconfont">&#xe641;</span>Android版
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top {
  width: 143px;
  height: 50px;
  background-image: url(//ci.xiaohongshu.com/83074709-0d05-4d1c-9d38-24a8e910d914);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
}
h2 {
  color: #ffffff;
  margin: 13px 0 0;
  white-space: nowrap;
  font-size: 48px;
  font-weight: 500;
}
.right {
  margin-left: 89px;
}
.bottom {
  margin-top: 36px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #333;
}
.iconfont {
  font-size: 28px;
}
.ios,
.android {
  width: 150px;
  height: 40px;
  background-color: #fff;
  text-align: center;
  line-height: 35px;
  margin: 0 15px 0 0;
  border-radius: 20px;
}
</style>