<template>
  <div>
    <h1>{{contentInfo.art_title}}</h1>
    <p>{{contentInfo.art_content}}</p>
    <div class="bottomIcon">
      <span>❤27</span>
      <span>💬21</span>
      <span>⭐24</span>
    </div>
    <div class="bottomIcon">发布于 {{contentInfo.cust_createtime|showDate}}</div>
  </div>
</template>

<script>
import { formatDate } from "@/common/utils";
export default {
  data() {
    return {
      active: false
    };
  },
  props: {
    contentInfo: Object
  },
  //显示固定格式的时间戳
  filters: {
    showDate: function(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "MM-dd");
    }
  }
};
</script>

<style scoped>
h1 {
  color: #333;
  font-size: 24px;
  font-weight: 500;
  overflow: hidden;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
.bottomIcon {
  margin-top: 30px;
}
span {
  margin-right: 29px;
}
.iconActive {
  color: red;
}
</style>