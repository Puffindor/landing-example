<template>
 <div class="container">
  <img src="../assets/pic-6.png" />
  <div class="right">
   <img class="dec3" src="../assets/frame6/dec3.png" />
   <img class="dec5" src="../assets/frame6/dec2.png" />
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
  background-image: url(../assets/frame6/dec1.png);
  span {
   color: #292d35;
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
