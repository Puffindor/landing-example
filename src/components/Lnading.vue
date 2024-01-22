<template>
 <div class="scroll">
  <div class="about">
   <frame-1 />
  </div>
  <frame-2 />
  <frame-3 />
  <frame-4 />
  <frame-5 />
  <frame-6 />
  <frame-7 />
  <frame-8 />
  <frame-9 />
  <div class="speakers">
   <frame-10 />
  </div>
  <div class="faq">
   <FAQ />
  </div>
  <div class="contacts">
   <the-footer />
  </div>
 </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import Frame1 from "@/components/Frame1.vue";
import Frame2 from "@/components/Frame2.vue";
import Frame3 from "@/components/Frame3.vue";
import Frame4 from "@/components/Frame4.vue";
import Frame5 from "@/components/Frame5.vue";
import Frame6 from "@/components/Frame6.vue";
import Frame7 from "@/components/Frame7.vue";
import Frame8 from "@/components/Frame8.vue";
import Frame9 from "@/components/Frame9.vue";
import Frame10 from "@/components/Frame10.vue";
import TheFooter from "@/components/TheFooter.vue";
import FAQ from "@/components/FAQ.vue";
export default {
 components: {
  Frame1,
  Frame2,
  Frame3,
  Frame4,
  Frame5,
  Frame6,
  Frame7,
  Frame8,
  Frame9,
  Frame10,
  TheFooter,
  FAQ,
  TheHeader,
 },
 methods: {
  scroll(el) {
   const scrollTo = document.querySelector(el);
   scrollTo.scrollIntoView({ behavior: "smooth" });
  },
 },
 computed: {
  headerHeight() {
   return document.querySelector("header").offsetHeight;
  },
 },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Manrope:wght@700;800&display=swap");

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
main {
 width: 100vw;
 height: 100vh;
}
.scroll {
 //  height: calc(100vh - 13%);
 height: 100%;
 overflow-y: scroll;
}

@media screen and (min-width: 2048px) {
 .scroll {
  border-right: solid 4px #292d35;
  border-left: solid 4px #292d35;
 }
}
</style>
