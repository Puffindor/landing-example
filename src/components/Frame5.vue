<template>
 <div id="con2" class="mobile-container" v-if="isMobile">
  <div class="pic"></div>
  <div class="left">
   <img class="dec2" src="../assets/frame5/dec2.svg" />
   <img class="dec3" src="../assets/frame5/dec3.svg" />
   <img class="dec5" src="../assets/frame5/dec4.svg" />
   <div class="p-con">
    <div class="dec4"><span>3</span></div>
    <div class="text">
     <h1>Экспериментал<br />ьные материалы</h1>
     <p>
      Дизайнеры использовали новые и экспериментальные материалы, такие
      как металл, пластик и лакированное дерево.
     </p>
    </div>
   </div>
  </div>
 </div>

 <div v-else class="container">
  <div class="right">
   <img class="dec2" src="../assets/frame5/dec2.svg" />
   <img class="dec3" src="../assets/frame5/dec3.svg" />
   <img class="dec5" src="../assets/frame5/dec4.svg" />
   <div class="dec4"><span>3</span></div>
   <h3>Экспериментальные материалы</h3>
   <p>
    Дизайнеры использовали новые и экспериментальные материалы, такие
    как металл, пластик и лакированное дерево.
   </p>
  </div>
  <img src="../assets/pic-5.png" />
 </div>
</template>
<script>
export default {
 props: ["isMobile"],
 mounted() {
  if (this.isMobile) {
   setTimeout(() => {
    document.getElementById("con2").scrollTo({
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
h3 {
 margin-bottom: 16px;
}
.container {
 display: flex;
 border-bottom: solid 4px #292d35;
}
.right {
 position: relative;
 border-right: solid 4px #292d35;
 padding: 100px 0px 104px 100px;

 .dec2 {
  top: 53px;
  right: 53px;
 }
 .dec5 {
  z-index: -1;
  top: 38px;
  right: 94px;
 }

 .dec3 {
  bottom: 53px;
  left: 53px;
 }
 img {
  position: absolute;
 }

 .dec4 {
  left: 35px;
  bottom: 280px;
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
  background-image: url(../assets/frame5/dec1.svg);
  span {
   color: #292d35;
   margin-bottom: 6px;
  }
 }
}

.mobile-container {
 width: 100vw;
 display: grid;
 grid-template-columns: 1fr 355px;
 grid-template-rows: 1fr;
 overflow: scroll;
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
   left: 35px;
   bottom: 339px;

   color: white;
   font-family: Dela Gothic One;
   font-size: 35px;
   font-weight: 400;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 63px;
   height: 63px;

   background-image: url(../assets/frame5/dec1.svg);
   span {
    color: black;
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
  padding: 60px 20px 43px 16px;
  width: 100%;
  border: #292d35 solid 4px;
  border-top: none;
  border-right: none;
  border-left: none;
  .dec2 {
   z-index: 10;
   top: 6%;
   right: 6%;
   width: 36px;
   height: 15px;
   position: absolute;
  }
  .dec3 {
   width: 31px;
   height: 45px;
   position: absolute;
   bottom: 5%;
   left: 5%;
  }
  .dec5 {
   top: 5%;
   right: 10%;
   width: 30px;
   height: 30px;
   position: absolute;
  }
 }
 h1 {
  width: 110%;
  font-family: Dela Gothic One;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 12px;
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
  background-image: url(../assets/pic-5.png);
  background-position: 82%;
  background-color: #ff84ac;
 }
}
@media screen and (max-width: 1280px) {
 .right {
  .dec3 {
   bottom: 5%;
   left: 1%;
  }
 }
}
</style>
