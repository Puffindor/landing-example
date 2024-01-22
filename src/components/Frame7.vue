<template>
 <div class="container">
  <div class="right">
   <img class="dec2" src="../assets/frame7/dec2.svg" />
   <img class="dec3" src="../assets/frame7/dec3.svg" />
   <img class="dec5" src="../assets/frame7/dec4.svg" />
   <div class="dec4"><span>5</span></div>
   <h3>Ирония</h3>
   <p>
    В дизайне мемфис часто использовалась ирония и игра с визуальными
    ожиданиями, например, в дизайне могли встречаться объекты с явными
    недостатками или ощущением ломанной мебели.
   </p>
  </div>
  <img src="../assets/pic-7.png" />
 </div>
</template>

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
 .dec3 {
  z-index: -1;
  bottom: 38px;
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
  background-image: url(../assets/frame7/dec1.svg);
  span {
   color: white;
   margin-bottom: 6px;
  }
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
