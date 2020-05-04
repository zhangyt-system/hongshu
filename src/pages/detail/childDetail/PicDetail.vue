<template>
  <div class="picdetail">
    <div class="picshow">
      <img :src="this.picInfo.split('#')[this.currentIndex]" alt />
    </div>
    <div class="leftIcon" @click="leftClick"></div>
    <div class="rightIcon" @click="rightClick"></div>
    <div class="picmin">
      <div
        class="picitem"
        v-for="(item,index) in this.picInfo.split('#')"
        :key="index"
        :class="{active: currentIndex === index}"
        @click="itemClick(index)"
      >
        <img :src="item" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      picArr: this.picInfo.split("#")
    };
  },
  props: {
    picInfo: String
  },

  methods: {
    itemClick: function(index) {
      // 1.改变currentIndex
      this.currentIndex = index;
    },
    //控制左边按钮的动作
    leftClick() {
      if (this.currentIndex == 0) {
        this.currentIndex = this.picInfo.split("#").length - 1;
      } else {
        this.currentIndex--;
      }
    },
    //控制右边按钮的动作
    rightClick() {
      if (this.currentIndex == this.picInfo.split("#").length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    }
  }
};
</script>

<style scoped>
.picdetail {
  margin: 0 0 20px;
  position: relative;
}
.picshow {
  width: 500px;
  height: 500px;
  background-color: red;
  overflow: hidden;
  z-index: -1;
}
.leftIcon {
  background: url(data:image/png;base64,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)
    no-repeat;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 250px;
  left: 10px;
  z-index: 5;
  background-size: contain;
}
.rightIcon {
  background: url(https://s.xiaohongshu.com/formula-static/frieza/public/img/arrow-r.dd63c47.png)
    no-repeat;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 250px;
  right: 10px;
  z-index: 5;
  background-size: contain;
}
img {
  width: 100%;
  height: 100%;
  display: block;
  /* margin: 0 0 0 -40px; */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  overflow: hidden;
}
.picmin {
  margin: 10px 0 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.picitem {
  margin-right: 5px;
  width: 38px;
  height: 38px;
  opacity: 0.3;
}
.picitem > img {
  border-radius: 3px;
}
.active {
  opacity: 1;
  border: 1px solid #ff2741;
  box-shadow: 0 3px 8px 0 rgba(255, 82, 103, 0.5);
}
</style>