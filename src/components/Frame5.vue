<template>
 <div class="container">
  <div class="right">
   <img class="dec2" src="../assets/frame5/dec2.png" />
   <img class="dec3" src="../assets/frame5/dec3.png" />
   <img class="dec5" src="../assets/frame5/dec4.png" />
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
  background-image: url(../assets/frame5/dec1.png);
  span {
   color: #292d35;
   margin-bottom: 6px;
  }
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
