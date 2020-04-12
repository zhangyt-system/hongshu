<template>
  <div>
    <MainNavBar v-bind:navcolor="navcolor">
      <slot>
        <img src="@/assets/image/logo.png" />
      </slot>
    </MainNavBar>
    <ChildList />
    <FooterBar />
  </div>
</template>

<script>
import MainNavBar from "@/components/mainNavBar/MainNavBar";
import ChildList from "./childList/ChildList";
import FooterBar from "@/components/footerBar/FooterBar";
export default {
  components: {
    MainNavBar,
    ChildList,
    FooterBar
  }
};
</script>

<style>
</style>