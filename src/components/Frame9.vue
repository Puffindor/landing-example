<template>
 <div class="container">
  <img class="dec dec2" src="../assets/frame9/dec2.svg" />
  <img class="dec dec1" src="../assets/frame9/dec1.svg" />
  <div class="pic2">
   <img src="../assets/frame9/pic2.png" />
   <span>«Мемфис» в графическом дизайне</span>
  </div>
  <div class="bottom">
   <img class="dec dec4" src="../assets/frame9/dec4.svg" />
   <img class="dec dec3" src="../assets/frame9/dec3.svg" />
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

@media screen and (max-width: 400px) {
 .container {
  z-index: 1;
  position: relative;
  padding: 60px 36px;
  display: flex;
  flex-direction: column;
  .dec2 {
   width: 24px;
   height: 35px;
   top: 1%;
   right: 6%;
  }
  .dec1 {
   position: absolute;
   z-index: 100;
   width: 51px;
   height: 38px;
   left: 80%;
   top: 31%;
  }
  .pic2 {
   margin-bottom: 105px;
   img {
    width: 319px;
    height: 172px;
   }
   span {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    margin: 0;
   }
  }

  .pic3 {
   margin-top: 0;
   margin-bottom: 40px;
   img {
    width: 318px;
    height: 211px;
   }
  }

  .pic4 {
   img {
    width: 319px;
    height: 220px;
   }
  }
  .bottom {
   position: relative;
   display: flex;
   flex-direction: column;
   .dec3 {
    width: 198px;
    height: 135px;
    top: -12%;
    left: 9%;
   }
   .dec4 {
    transform: scaleX(-1);
    width: 103px;
    height: 98px;
    left: -17%;
    top: 90%;
   }
  }
 }
}
</style>
