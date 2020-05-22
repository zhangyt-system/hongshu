<template>
  <div>
    <MainNavBar v-bind:navcolor="navcolor">
      <slot>
        <img src="@/assets/image/logo.png" />
      </slot>
    </MainNavBar>
    <ChildList :indexList="indexList" />
    <LoadMore />
    <FooterBar />
  </div>
</template>

<script>
import MainNavBar from "@/components/MainNavBar";
import ChildList from "./childList/ChildList";
import FooterBar from "@/components/FooterBar";
import { getIndexList } from "@/network/list";
import LoadMore from "@/components/LoadMore";
export default {
  data() {
    return {
      navcolor: "black",
      indexList: []
    };
  },
  components: {
    MainNavBar,
    ChildList,
    FooterBar,
    LoadMore
  },
  created() {
    getIndexList().then(res => {
      console.log(res);
      this.indexList = res.data[0].article;
      console.log(this.indexList);
    });
  }
};
</script>

<style>
</style>