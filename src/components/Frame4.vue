<template>
 <div class="container">
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
</style>
