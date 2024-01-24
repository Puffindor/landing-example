<template>
 <div class="mobile-container" v-if="isMobile">
  <img class="dec1" src="../assets/dec2-1.svg" />
  <img class="dec2" src="../assets/dec2-2.svg" />

  <div class="left">
   <h1>О ЧЕМ ВЫ УЗНАЕТЕ НА БЕСПЛАТНОМ ВЕБИНАРЕ</h1>
   <h2>Что такое Мемфис?</h2>
   <p>
    Мемфис — это стиль дизайна, возникший в Италии в 1980-х годах. Он был назван
    в честь группы художников и дизайнеров, которые работали в Мемфисе. Этот
    стиль характеризуется яркими цветами, необычными формами
    и экспериментальными материалами.
   </p>
  </div>

  <img class="pic" src="../assets/pic2-1.png" />
 </div>

 <div v-else class="container">
  <img src="../assets/pic2-1.png" />
  <div class="text">
   <img class="dec1" src="../assets/dec2-1.svg" />
   <img class="dec2" src="../assets/dec2-2.svg" />
   <img class="dec3" src="../assets/dec2-3.svg" />
   <h2>О Чём вы узнаете на бесплатном вебинаре</h2>
   <h3>Что такое Мемфис?</h3>
   <p>
    Мемфис — это стиль дизайна, возникший в Италии в 1980-х годах. Он был назван
    в честь группы художников и дизайнеров, которые работали в Мемфисе. Этот
    стиль характеризуется яркими цветами, необычными формами
    и экспериментальными материалами.
   </p>
  </div>
 </div>
</template>

<script>
export default {
 props: ["isMobile"],
};
</script>

<style lang="scss" scoped>
.container {
 display: flex;
 div {
  border-left: solid 4px #292d35;
  .dec1 {
   top: 5%;
   left: 5%;
  }
  .dec2 {
   right: 30%;
   top: 30%;
  }
  .dec3 {
   right: 40%;
   bottom: 10%;
  }
  position: relative;
  img {
   position: absolute;
  }
  padding: 100px 0px 0px 104px;
  h2 {
   margin-bottom: 28px;
   font-family: Dela Gothic One;
   font-size: 35px;
   font-weight: 400;
   line-height: 42px;
   letter-spacing: 0em;
   text-align: left;
  }
  h3 {
   margin-bottom: 20px;
   font-family: Manrope;
   font-size: 35px;
   font-weight: 800;
   line-height: 49px;
   letter-spacing: 0em;
   text-align: left;
  }
  p {
   width: 50%;
   font-family: Manrope;
   font-size: 28px;
   font-weight: 600;
   line-height: 39px;
   letter-spacing: 0em;
   text-align: left;
  }
 }
}

.mobile-container {
 position: relative;
 .dec1 {
  left: 2%;
  top: 5%;
  width: 28px;
  height: 28px;
  position: absolute;
 }
 .dec2 {
  top: 30%;
  left: 70%;
  width: 44px;
  height: 44px;

  position: absolute;
 }
 display: grid;
 grid-template-columns: 390px 1fr;
 grid-template-rows: 1fr;
 overflow: scroll;
 .left {
  padding: 60px 20px 60px 16px;
  width: 90%;
  border: #292d35 solid 4px;
  border-top: none;
  border-left: none;
 }
 h1 {
  font-family: Dela Gothic One;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 28px;
 }
 h2 {
  font-family: Manrope;
  font-size: 22px;
  font-weight: 800;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 16px;
 }
 p {
  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
 }
 .pic {
  margin-left: -39px;
  display: block;
  border: #292d35 solid 4px;
  border-top: none;
  border-left: none;
  align-self: start;
  width: 350px;
  height: 475px;
 }
}

@media screen and (max-width: 1280px) {
 .container {
  div {
   p {
    width: 90%;
   }
   .dec1 {
    top: 5%;
    left: 5%;
   }
   .dec2 {
    right: 10%;
    top: 30%;
   }
   .dec3 {
    right: 10%;
    bottom: 10%;
   }
  }
 }
}
</style>
