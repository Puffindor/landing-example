<template>
 <div class="container">
  <div class="left">
   <h3>Спикеры</h3>
   <div class="article a1">
    <img src="../assets/frame10/pic2.png" />
    <div>
     <h4>Артем Весячев</h4>
     <p>
      Ведущий эксперт в области искусства. Он обладает более чем 20-летним
      опытом работы в этой сфере.
     </p>
    </div>
   </div>
   <div class="article a2">
    <img src="../assets/frame10/pic3.png" />
    <div>
     <h4>Ингрих Виртгайм</h4>
     <p>
      Ведущий архитектор современности, который первый из советских дизайнеров
      решился использовать мемфис для дизайна интерьеров.
     </p>
    </div>
   </div>
  </div>
  <img v-if="isMobile" src="../assets/frame10/pic2.svg" />
  <img v-else class="pic" src="../assets/frame10/pic1.svg" />
 </div>
</template>
<script>
export default {
 props: ["isMobile"],
};
</script>
<style lang="scss" scoped>
p {
 width: 70%;
}
.left {
 padding: 100px 0px 0px 96px;
}
h3 {
 width: fit-content;
 font-family: Dela Gothic One;
 font-size: 35px;
 font-weight: 400;
 line-height: 43px;
 letter-spacing: 0em;
 text-align: left;
 padding: 12px 20px;
 box-shadow: 8px 8px 0px 0px #292d35;
 background-color: #ffc621;

 margin-bottom: 80px;
}
h4 {
 margin-bottom: 20px;
 font-family: Manrope;
 font-size: 35px;
 font-weight: 700;
 line-height: 35px;
 letter-spacing: 0em;
 text-align: left;
}
.container {
 display: flex;
 border-bottom: 2px solid #292d35;
}
.article {
 margin-bottom: 60px;
 display: flex;
 img {
  margin-right: 28px;
 }
}

@media screen and (max-width: 400px) {
 .container {
  flex-direction: column;

  .left {
   padding: 60px 16px 0px 16px;
  }
 }
 .article {
  margin-bottom: 32px;
  flex-direction: column;
  img {
   margin-bottom: 20px;
   margin-right: 0;
  }
  div {
   h4 {
    font-family: Manrope;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
   }
   p {
    font-family: Manrope;
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
   }
  }
 }
}

@media screen and (max-width: 1280px) {
 p {
  width: 90%;
 }
}
</style>
