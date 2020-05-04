<template>
  <div>
    <div class="LoadMore" @click="LoadMore">加载更多</div>
    <!-- <div>
      <div>
        <img src="http://ci.xiaohongshu.com/0b84da4e-3984-4603-a2f2-72a806e5494d" alt />
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  methods: {
    LoadMore() {
      console.log("LoadMore");
    }
  }
};
</script>

<style scoped>
.LoadMore {
  text-align: center;
  cursor: pointer;
  width: 100%;
  height: 40px;
  color: #ff2741;
  font-size: 16px;
  line-height: 40px;
  font-weight: 600;
}
</style>