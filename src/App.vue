<template>
 <the-header @scroll="scroll" :isMobile="isMobile" />
 <section>
  <main>
   <router-view v-slot="{ Component }">
    <component ref="landing" :is="Component"></component>
   </router-view>
  </main>
 </section>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
 components: {
  TheHeader,
 },
 computed: {
  isMobile() {
   if (screen.width < 400) {
    return true;
   }
   return false;
  },
  scrollHeight() {
   if (screen.width < 400) {
    return "calc(100% - 100px)";
   }
   return "calc(100% - 128px)";
  },
 },
 methods: {
  scroll(el) {
   setTimeout(() => {
    this.$refs.landing.scroll(el);
   }, 0);
  },
 },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Manrope:wght@700;800&display=swap");
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
#app {
 height: 100dvh;
 overflow: hidden;
}
h3 {
 font-family: Dela Gothic One;
 font-size: 35px;
 font-weight: 400;
 line-height: 45px;
 letter-spacing: 0em;
 text-align: left;
}
p {
 font-family: Manrope;
 font-size: 28px;
 font-weight: 600;
 line-height: 39px;
 letter-spacing: 0em;
 text-align: left;
}
section {
 width: 100vw;
 height: v-bind(scrollHeight);
 display: flex;
 justify-content: center;
}
main {
 max-width: 2048px;
 height: 100% !important;
}
</style>
