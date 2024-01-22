<template>
 <div class="container">
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

@media screen and (max-width: 400px) {
 .container {
  transform: translateX(-150%);
  .text {
   padding: 60px 16px 0px 20px;

   .dec3 {
    display: none;
   }
  }
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
