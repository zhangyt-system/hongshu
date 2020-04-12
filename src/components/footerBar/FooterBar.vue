<template>
  <div class="footer">
    <div class="top">
      <ul>
        <li>用户协议</li>
        <li>隐私政策</li>
        <li>侵权投诉指引</li>
        <li>社区规范</li>
      </ul>
    </div>
    <div class="bottom">
      <span>沪ICP备 XXXXXXX号 Copyright © zhangyt-system | 邮箱：zhangyuting_0901@163.com| 电话：15237118800</span>
      <span>
        网络文化经营许可证：沪网文XXXXXXXX号|
        增值电信业务经营许可证：沪XXXXXXXXXXX|
      </span>
      <span>
        医疗器械经营许可证：沪嘉食药监械经营许XXXXXXXX号|
        医疗器械网络交易服务第三方平台备案:（沪）网械平台备字[2019]第xxxxxx号|
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  padding: 50px 0 30px;
}
.top {
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: 0 0 20px;
}
ul {
  width: 1080px;
  margin: 0;
  padding: 0 80px 0 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  position: relative;
  color: #fff;
}
.bottom {
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
}
span {
  color: #999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
}
</style>