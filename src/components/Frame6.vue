<template>
 <div class="mobile-container" v-if="isMobile">
  <div class="left">
   <img class="dec3" src="../assets/frame6/dec3.svg" />
   <img class="dec5" src="../assets/frame6/dec2.svg" />
   <div class="p-con">
    <div class="dec4"><span>4</span></div>
    <div class="text">
     <h1>Коллаж</h1>
     <p>
      Cтиль мемфис известен своим коллажированием разных элементов в одном
      объекте, сочетая, кажется, непримиримые элементы, такие как различные
      цвета и текстуры.
     </p>
    </div>
   </div>
  </div>
  <div class="pic"></div>
 </div>

 <div v-else class="container">
  <img src="../assets/pic-6.png" />
  <div class="right">
   <img class="dec3" src="../assets/frame6/dec3.svg" />
   <img class="dec5" src="../assets/frame6/dec2.svg" />
   <div class="dec4"><span>4</span></div>
   <h3>Коллаж</h3>
   <p>
    Cтиль мемфис известен своим коллажированием разных элементов в одном
    объекте, сочетая, кажется, непримиримые элементы, такие как различные цвета
    и текстуры.
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
h3 {
 margin-bottom: 16px;
}
.container {
 display: flex;
 border-bottom: solid 4px #292d35;
}
.right {
 position: relative;
 border-left: solid 4px #292d35;
 padding: 100px 0px 104px 100px;

 .dec2 {
  top: 53px;
  right: 53px;
 }
 .dec3 {
  z-index: -1;
  top: 38px;
  right: 38px;
 }

 .dec5 {
  z-index: -1;
  bottom: 50px;
  left: 50px;
 }

 img {
  position: absolute;
 }

 .dec4 {
  left: 35px;
  bottom: 300px;
  position: absolute;
  color: white;
  font-family: Dela Gothic One;
  font-size: 35px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 63px;
  background-image: url(../assets/frame6/dec1.svg);
  span {
   color: #292d35;
   margin-bottom: 6px;
  }
 }
}

.mobile-container {
 width: 100vw;
 display: grid;
 grid-template-columns: 390px 1fr;
 grid-template-rows: 1fr;
 overflow: scroll;
 .p-con {
  width: 100%;
  display: flex;
  flex-direction: row;
  .text {
   width: 76%;
   margin-left: 15px;
   margin-top: 10px;
  }
  .dec4 {
   left: 35px;
   bottom: 300px;

   color: white;
   font-family: Dela Gothic One;
   font-size: 35px;
   font-weight: 400;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 63px;
   height: 63px;
   background-image: url(../assets/frame6/dec1.svg);
   span {
    color: #292d35;
    margin-bottom: 6px;
   }
  }
  p {
   font-family: Manrope;
   font-size: 18px;
   font-weight: 600;
   line-height: 25px;
   letter-spacing: 0em;
   text-align: left;
   margin: 0;
  }
 }
 .left {
  position: relative;
  padding: 60px 20px 53px 16px;
  width: 90%;
  border: #292d35 solid 4px;
  border-top: none;

  border-left: none;
  .dec3 {
   top: 5%;
   right: 10%;
   width: 45px;
   height: 43px;
   position: absolute;
  }
  .dec5 {
   bottom: 5%;
   left: 5%;
   width: 44px;
   height: 44px;
   position: absolute;
  }
 }
 h1 {
  font-family: Dela Gothic One;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 12px;
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

 .pic {
  display: block;
  border: #292d35 solid 4px;
  border-top: none;
  border-left: none;
  align-self: start;
  width: 360px;
  height: 447px;
  background-image: url(../assets/pic-6.png);
  background-position: 82%;
  background-color: #ff84ac;
  margin-left: -39px;
 }
}

@media screen and (max-width: 1280px) {
 .right {
  .dec5 {
   bottom: 2%;
   left: 2%;
  }
 }
}
</style>
