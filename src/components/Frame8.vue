<template>
 <div class="container">
  <div class="left">
   <h3>Как мемфис используется сейчас?</h3>
   <p>
    Сегодня стиль Мемфис используется в различных областях, от архитектуры
    и дизайна интерьера до моды и графического дизайна.
   </p>
   <p>
    Он остаётся популярным и вдохновляет дизайнеров и художников на создание
    новых экспериментальных проектов, которые сочетают в себе разные элементы
    и цвета.
   </p>
  </div>

  <img src="../assets/frame8/dec1.png" />
 </div>
</template>

<style lang="scss" scoped>
img {
 margin: 51px 91px 0px 70px;
}
.container {
 height: fit-content;
 display: flex;
 border-bottom: solid 4px #292d35;
}
h3 {
 width: 63%;
 padding: 12px 20px;
 background-color: #ff84ac;
 border: 2px solid #292d35;
 box-shadow: 8px 8px 0px 0px #292d35;
 margin-bottom: 60px;
}
p {
 width: 63%;
 margin-bottom: 30px;
}
.left {
 padding: 100px 0px 0px 95px;
}
@media screen and (max-width: 1280px) {
 h3 {
  width: 100%;
 }
 p {
  width: 100%;
 }
}
</style>
