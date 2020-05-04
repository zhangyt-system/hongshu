<template>
  <div>
    <MainNavBar>
      <slot>
        <img src="@/assets/image/logo.png" />
      </slot>
    </MainNavBar>
    <div class="content">
      <div class="left">
        <PicDetail :picInfo="picInfo" />
        <ContentDetail :contentInfo="contentInfo" />
        <CommonDetail />
      </div>
      <div class="right">
        <AuthorDetail />
        <NoteDetail />
      </div>
    </div>
  </div>
</template>

<script>
import MainNavBar from "@/components/MainNavBar";
import PicDetail from "./childDetail/PicDetail";
import ContentDetail from "./childDetail/ContentDetail";
import CommonDetail from "./childDetail/CommonDetail";
import AuthorDetail from "./childDetail/AuthorDetail";
import NoteDetail from "./childDetail/NoteDetail";
import { getDetailTnfo } from "@/network/detail";
import FooterBar from "@/components/FooterBar";
export default {
  data() {
    return {
      id: "",
      picInfo: "",
      contentInfo: {}
    };
  },
  components: {
    MainNavBar,
    PicDetail,
    ContentDetail,
    CommonDetail,
    AuthorDetail,
    NoteDetail,
    FooterBar
  },
  created() {
    // 1.获取id
    this.id = this.$route.query.id;
    getDetailTnfo(this.id).then(res => {
      console.log("res", res);
      this.picInfo = res.data.art_pic;
      console.log("res", this.picInfo);
      this.contentInfo = res.data;
    });
  }
};
</script>

<style scoped>
.content {
  width: 850px;
  margin: 50px auto 0;
}
.left {
  width: 500px;
  float: left;
  flex-grow: 1;
}
.right {
  float: right;
  width: 320px;
  flex-grow: 1;
}
</style>