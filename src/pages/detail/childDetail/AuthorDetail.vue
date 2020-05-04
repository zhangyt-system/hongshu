<template>
  <div class="author">
    <div class="tittle">笔记作者</div>
    <div class="desc">
      <div class="left-img">
        <img
          src="https://img.xiaohongshu.com/avatar/5db2a492b9f842000131d759.jpg@240w_240h_90q_1e_1c_1x.jpg"
          alt
        />
      </div>
      <div class="right">
        <span>叔本聪</span>
        <div>现互联网产品狗，前新东方雅思老师 🏂旅游 | 穿搭 | 摄影 | 英语学习 | 直 📮shubenc</div>
      </div>
    </div>
    <div class="bott-info">
      <div class="desc-value">
        <span class="note">笔记</span>
        <span>149</span>
      </div>
      <div class="desc-value">
        <span class="note">粉丝数量</span>
        <span>7.5w</span>
      </div>
      <div class="desc-value">
        <span class="note">获赞与收藏</span>
        <span>18.8w</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.author {
  width: 320px;
  height: 176px;
  background-color: #fbfbfb;
  /* background-color: pink; */
  margin-bottom: 20px;
  border: 1px solid #eee;
}
.tittle {
  font-weight: 500;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  padding: 10px 0 10px 20px;
  margin: 0;
}
.desc {
  margin: 10px;
  padding: 10px;
  overflow: hidden;
  border-bottom: 1px solid #eee;
  position: relative;
}
img {
  width: 50px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  display: block;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  float: left;
}
.right {
  width: 237px;
  float: left;
  margin: 0 0 0 59px;
}
.right > div {
  /* 文字强制一行显示 */
  white-space: nowrap;
  /* 溢出的部分隐藏起来  */
  overflow: hidden;
  /* 文字溢出的时候用省略号来显示; */
  text-overflow: ellipsis;
  color: #999;
  font-size: 14px;
}
.right > span {
  height: 16px;
  line-height: 16px;
  color: #333;
  margin-bottom: 6px;
}
.note {
  display: block;
  margin-bottom: 9px;
  color: #999;
}
.bott-info {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: #333;
  line-height: 20px;
}
</style>