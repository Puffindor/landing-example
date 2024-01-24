<template>
 <div v-if="isMobile" class="footer-mobile">
  <div class="top">
   <div>
    <p>Контактный центр, если не нашли ответы на свой вопрос</p>
    <h2>+7 800 222‒65‒21</h2>
   </div>
   <div>
    <p>E-mail</p>
    <h2>memphis@lec.ru</h2>
   </div>
  </div>

  <div class="bottom">
   <img src="../assets/footer/vk.svg" />
   <img class="social" src="../assets/footer/telegram.svg" />
   <img class="social" src="../assets/footer/youtube.svg" />
  </div>
 </div>

 <div v-else class="footer">
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
   <img src="../assets/footer/vk.svg" />
   <img class="social" src="../assets/footer/telegram.svg" />
   <img class="social" src="../assets/footer/youtube.svg" />
  </div>
 </div>
</template>
<script>
export default {
 props: ["isMobile"],
};
</script>
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

.footer-mobile {
 .bottom {
  padding: 50px 16px 40px 16px;
  .social {
   margin-left: 20px;
  }
 }
 .top {
  padding: 60px 16px;
  border: 4px solid #292d35;
  border-left: none;
  border-right: none;
  div {
   margin-bottom: 40px;
   p {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
   }
   h2 {
    font-family: Manrope;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
   }
  }
 }
}

@media screen and (max-width: 1280px) {
 .left {
  width: 68.6%;
  padding: 41px 50px 39px 96px;
 }
}
</style>
