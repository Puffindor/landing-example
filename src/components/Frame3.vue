<template>
 <div class="container">
  <div class="left">
   <img class="dec2" src="../assets/dec3-2.png" />
   <img class="dec3" src="../assets/dec3-3.png" />

   <div class="dec4"><span>1</span></div>

   <h3>Чем выделяется этот стиль?</h3>
   <h4>Яркие цвета</h4>
   <p>
    В дизайне Мемфис используются яркие, контрастные цвета, такие как розовый,
    голубой, желтый, зеленый и красный.
   </p>
  </div>
  <div class="back">
   <img src="../assets/dec3-1.png" />
  </div>
 </div>
</template>

<style lang="scss" scoped>
.container {
 border-top: solid 4px #292d35;
 border-bottom: solid 4px #292d35;
 height: fit-content;
 display: flex;
}
.back {
 width: 40%;

 position: relative;
 background-color: #ff84ac;
 img {
  height: 100%;
  position: absolute;
  top: 0;
  left: -679px;
 }
}
.left {
 border-right: solid 4px #292d35;
 height: 100%;
 position: relative;
 z-index: 99;
 background-color: #ffffff;
 width: 60%;
 img {
  position: absolute;
 }
 .dec3 {
  top: 6%;
  left: 2%;
  z-index: 1;
 }
 .dec2 {
  bottom: 10%;
  right: 5%;
 }
 .dec4 {
  left: 11%;
  bottom: 42%;
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
  background-image: url(../assets/dec3-4.png);
  span {
   margin-bottom: 6px;
  }
 }

 h3 {
  width: fit-content;
  z-index: 2;
  position: relative;
  padding: 12px 20px;
  background-color: #ffc621;
  border: 2px solid #292d35;
  box-shadow: 8px 8px 0px 0px #292d35;
  margin-bottom: 56px;
  font-family: Dela Gothic One;
  margin: 100px 187px 56px 96px;
  font-size: 35px;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: left;
 }
 h4 {
  margin-left: 196px;
  font-family: Dela Gothic One;
  font-size: 35px;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
 }
 p {
  margin: 0px 104px 100px 196px;

  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
 }
}
@media screen and (min-width: 1921px) {
 .left {
  .dec4 {
   bottom: 37%;
   left: 10%;
  }
  .dec2 {
   bottom: 4%;
   right: 4%;
  }
 }
}

@media screen and (max-width: 1280px) {
 .back {
  img {
   left: -230%;
  }
 }
 .left {
  .dec4 {
   left: 16%;
   bottom: 46%;
  }
 }
}
</style>
