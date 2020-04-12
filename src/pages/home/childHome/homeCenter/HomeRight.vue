<template>
  <div class="right">
    <div class="top"></div>
    <h2>标记我的生活</h2>
    <div class="bottom">
      <div class="tios">
        <div class="ios">
          <span class="iconfont">&#xe606;</span>
          IOS版
        </div>
      </div>
      <div class="tandroid">
        <div class="android">
          <span class="iconfont">&#xe641;</span>Android版
        </div>
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
  position: relative;
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
.ios {
  left: -5px;
}
.android {
  right: -30px;
}

.ios::before {
  content: "";
  position: absolute;
  top: 35px;
  left: 0;
  width: 150px;
  height: 150px;
  border-radius: 0 0 20px 20px;
  background-color: #fff;
  opacity: 0;
}
.ios::after {
  content: "";
  position: absolute;
  display: none;
  background-image: url(https://ci.xiaohongshu.com/0b84da4e-3984-4603-a2f2-72a806e5494d);
  background-repeat: no-repeat;
  background-size: contain;
  top: 42px;
  left: 9px;
  width: 134px;
  height: 134px;
  border-radius: 20px;
  background-color: #fff;
}
.ios:hover::after {
  display: block;
}
.ios:hover::before {
  opacity: 100%;
}
.tios:hover .ios {
  border-radius: 20px 20px 0 0;
}

.android::before {
  content: "";
  position: absolute;
  top: 35px;
  left: 165px;
  width: 150px;
  height: 150px;
  border-radius: 0 0 20px 20px;
  background-color: #fff;
  opacity: 0;
}
.android::after {
  content: "";
  position: absolute;
  display: none;
  background-image: url(https://ci.xiaohongshu.com/0b84da4e-3984-4603-a2f2-72a806e5494d);
  background-repeat: no-repeat;
  background-size: contain;
  top: 42px;
  left: 175px;
  width: 134px;
  height: 134px;
  border-radius: 20px;
}
.android:hover::after {
  display: block;
}
.android:hover::before {
  opacity: 100%;
}
.tandroid:hover .android {
  border-radius: 20px 20px 0 0;
}
</style>