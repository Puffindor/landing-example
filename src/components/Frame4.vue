<template>
 <div class="mobile-container" v-if="isMobile">
  <div class="left">
   <img class="dec2" src="../assets/frame4/dec2.svg" />
   <img class="dec3" src="../assets/frame4/dec3.svg" />
   <div class="p-con">
    <div class="dec4"><span>2</span></div>
    <div class="text">
     <h1>Необычные формы</h1>
     <p>
      Объекты в стиле Мемфис могут иметь необычные формы, которые непохожи на
      то, что мы обычно видим в повседневной жизни. Это может быть например
      мебель, которая имеет геометрические формы или необычные изгибы.
     </p>
    </div>
   </div>
  </div>
  <div class="pic"></div>
 </div>

 <div v-else class="container">
  <img src="../assets/pic-4.png" />
  <div class="right">
   <img class="dec2" src="../assets/frame4/dec2.svg" />
   <img class="dec3" src="../assets/frame4/dec3.svg" />
   <div class="dec4"><span>2</span></div>
   <h3>Необычные формы</h3>
   <p>
    Объекты в стиле Мемфис могут иметь необычные формы, которые непохожи на то,
    что мы обычно видим в повседневной жизни. Это может быть например мебель,
    которая имеет геометрические формы или необычные изгибы.
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
 .dec2 {
  top: 53px;
  right: 53px;
 }

 .dec3 {
  bottom: 53px;
  left: 53px;
 }
 img {
  position: absolute;
 }
 position: relative;
 border-left: solid 4px #292d35;
 padding: 100px 0px 104px 100px;
}
.dec4 {
 left: 35px;
 bottom: 339px;
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
 background-image: url(../assets/frame4/dec1.svg);
 span {
  margin-bottom: 6px;
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
  padding: 60px 20px 53px 16px;
  width: 90%;
  border: #292d35 solid 4px;
  border-top: none;

  border-left: none;
  .dec2 {
   width: 43px;
   height: 43px;
   right: 5%;
   top: 5%;
   position: absolute;
  }
  .dec3 {
   width: 33px;
   height: 42px;
   bottom: 5%;
   left: 5%;
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
  background-image: url(../assets/pic-4.png);
  background-position: 82%;
  background-color: #ff84ac;
  margin-left: -39px;
 }
}
</style>
