<template>
 <div id="con" class="mobile-container" v-if="isMobile">
  <div class="pic"></div>
  <div class="left">
   <img class="dec2" src="../assets/dec3-2.svg" />
   <img class="dec3" src="../assets/dec3-3.svg" />
   <h1>Чем выделяется этот стиль?</h1>
   <div class="p-con">
    <div class="dec4"><span>1</span></div>
    <div class="text">
     <h2>Яркие цвета</h2>
     <p>
      В дизайне Мемфис используются яркие, контрастные цвета, такие как розовый,
      голубой, желтый, зеленый и красный.
     </p>
    </div>
   </div>
  </div>
 </div>

 <div v-else class="container">
  <div class="left">
   <img class="dec2" src="../assets/dec3-2.svg" />
   <img class="dec3" src="../assets/dec3-3.svg" />

   <div class="dec4"><span>1</span></div>

   <h3>Чем выделяется этот стиль?</h3>
   <h4>Яркие цвета</h4>
   <p>
    В дизайне Мемфис используются яркие, контрастные цвета, такие как розовый,
    голубой, желтый, зеленый и красный.
   </p>
  </div>
  <div class="back">
   <img src="../assets/dec3-1.svg" />
  </div>
 </div>
</template>

<script>
export default {
 props: ["isMobile"],
 mounted() {
  if (this.isMobile) {
   setTimeout(() => {
    document.getElementById("con").scrollTo({
     top: 0,
     left: 10000,
     behavior: "smooth",
    });
   }, 0);
  }
 },
};
</script>

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
  background-image: url(../assets/dec3-4.svg);
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
.mobile-container {
 width: 100vw;
 display: grid;
 grid-template-columns: 1fr 355px;
 grid-template-rows: 1fr;
 overflow: scroll;
 .dec2 {
  bottom: 5%;
  width: 52px;
  height: 39px;
  position: absolute;
 }
 .dec3 {
  right: 0;
  width: 60px;
  height: 60px;
  position: absolute;
  z-index: -1;
 }
 .p-con {
  width: 100%;
  display: flex;
  flex-direction: row;
  .text {
   width: 70%;
   margin-left: 15px;
   margin-top: 10px;
  }
  .dec4 {
   width: 63px;
   height: 63px;
   position: static;
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
  padding: 60px 20px 43px 16px;
  width: 100%;
  border: #292d35 solid 4px;
  border-top: none;
  border-right: none;
  border-left: none;
 }
 h1 {
  box-shadow: 8px 8px 0px 0px #292d35;
  font-family: Dela Gothic One;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  padding: 12px 20px;
  border: 2px solid #292d35;
  background-color: #ffc621;
  margin-bottom: 40px;
 }
 h2 {
  font-family: Dela Gothic One;
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 12px;
 }

 .pic {
  display: block;
  border: #292d35 solid 4px;
  border-top: none;
  border-left: none;
  align-self: start;
  width: 360px;
  height: 440px;
  background-image: url(../assets/dec3-1.svg);
  background-position: 82%;
  background-color: #ff84ac;
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
