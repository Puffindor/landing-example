<template>
 <div class="container">
  <img class="dec dec1" src="../assets/frame9/dec1.png" />
  <img class="dec dec2" src="../assets/frame9/dec2.png" />
  <img class="dec dec3" src="../assets/frame9/dec3.png" />
  <img class="dec dec4" src="../assets/frame9/dec4.png" />
  <div class="pic2">
   <img src="../assets/frame9/pic2.png" />
   <span>«Мемфис» в графическом дизайне</span>
  </div>
  <div class="bottom">
   <div class="pic3">
    <img src="../assets/frame9/pic3.png" />
   </div>

   <div class="pic4">
    <img src="../assets/frame9/pic4.png" />
    <span>«Мемфис» в веб-дизайне</span>
   </div>
  </div>
 </div>
</template>

<style lang="scss" scoped>
.dec3 {
 left: 100px;
 top: 800px;
 z-index: -1;
}
.dec2 {
 right: 50px;
 top: 50px;
}
.dec4 {
 right: 0;
 top: 250px;
}
.dec1 {
 left: 850px;
 top: 574px;
}
.pic3 {
 margin-top: 126px;
}
.bottom {
 display: flex;
 justify-content: space-between;
}
.dec {
 position: absolute;
}
.container {
 z-index: 1;
 position: relative;
 background-image: url(../assets/frame9/pic1.png);
 padding: 140px 0px;
 border-bottom: solid 4px #292d35;
}
.pic2 {
 display: flex;
 flex-direction: column;
 width: fit-content;
 margin-bottom: 89px;
 img {
  margin-bottom: 28px;
 }
}
.pic4 {
 display: flex;
 flex-direction: column;
 width: fit-content;
 img {
  margin-bottom: 28px;
 }
}
span {
 background-color: white;
 position: relative;
 z-index: 2;
 font-family: Manrope;
 font-size: 16px;
 font-weight: 600;
 line-height: 22px;
 letter-spacing: 0em;
 text-align: left;
 padding: 12px;
 border: 2px solid #292d35;
 margin-left: 85px;
 width: fit-content;
}
</style>
