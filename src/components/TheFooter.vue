<template>
 <div class="footer">
  <div class="left">
   <div>
    <p>Контактный центр, если не нашли ответы на свой вопрос</p>
    <span>+7 800 222‒65‒21</span>
   </div>
   <div>
    <p>E-mail</p>
    <span>memphis@lec.ru</span>
   </div>
  </div>
  <div class="icons">
   <img src="../assets/footer/icons.png" />
  </div>
 </div>
</template>

<style lang="scss" scoped>
p {
 font-family: Manrope;
 font-size: 16px;
 font-weight: 500;
 line-height: 20px;
 letter-spacing: 0em;
 text-align: left;
 margin-bottom: 8px;
}
span {
 font-family: Manrope;
 font-size: 28px;
 font-weight: 700;
 line-height: 28px;
 letter-spacing: 0em;
 text-align: left;
}
.icons {
 width: 20%;
 padding: 40px 96px 39px 94px;
}
.footer {
 border-top: 2px solid #292d35;
 display: flex;
}
.left {
 justify-content: space-between;
 width: 78.6%;
 border-right: 2px solid #292d35;
 padding: 41px 207px 39px 96px;
 display: flex;
}

@media screen and (max-width: 1280px) {
 .left {
  width: 68.6%;
  padding: 41px 50px 39px 96px;
 }
}
</style>
