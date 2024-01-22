<template>
 <the-header @scroll="scroll" />
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
 methods: {
  scroll(el) {
   this.$refs.landing.scroll(el);
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
 height: 100vh;
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
 height: calc(100% - 128px);
 display: flex;
 justify-content: center;
}
main {
 max-width: 2048px;
 height: 100% !important;
}
</style>
