<template>
 <div class="container">
  <img class="dec2" src="../assets/frame1/dec1.svg" />
  <div class="left">
   <img class="star" src="../assets/frame1/star.svg" />
   <img class="dec1" src="../assets/frame1/dec2.svg" />
   <!-- <img class="back" src="../assets/frame1/background.png" /> -->
   <span class="date">12 апреля 16:00 - 18:30 • онлайн</span>
   <h1>УЗНАЙТЕ ВСЕ О СТИЛЕ МЕМФИС</h1>
   <p>
    О его влиянии на современный дизайн на нашем вебинаре! Присоединяйтесь
    к нашей лекции и погрузитесь в мир ярких цветов, уникальных форм и смелых
    решений, которые определяют этот стиль
   </p>

   <button>
    <router-link class="link" to="/registration">
     ЗАПИСАТЬСЯ НА ЛЕКЦИЮ
    </router-link>
   </button>
  </div>
  <div class="right">
   <img src="../assets/background1-2.png" />
  </div>
 </div>
</template>

<script>
export default {
 methods: {
  test() {
   alert("adasd");
  },
 },
};
</script>

<style lang="scss" scoped>
.link {
 color: black;
 position: relative;
 z-index: 999999;
 text-decoration: none;
}
.dec1 {
 position: absolute;
 right: 15%;
 top: 5%;
}
.dec2 {
 position: absolute;
 right: 15%;
 bottom: 5%;
}
.dec2 {
 position: absolute;
}
.container {
 position: relative;
 overflow: hidden;
 display: flex;
 width: 100%;
 height: fit-content;

 .right {
  border-bottom: solid 4px #292d35;

  background-color: #fe5101;
  //   img {
  //    position: absolute;
  //   }
 }
 .date {
  z-index: 2;
  padding: 8px 16px;
  box-shadow: 8px 8px 0px 0px #292d35;
  position: relative;
  background-color: #604aff;
  border: 2px solid #292d35;
  font-family: "Manrope", sans-serif;
  color: white;
  font-weight: 700;
  font-size: 22px;
 }
 .left {
  border-color: #292d35;
  border-right: solid 4px #292d35;

  border-bottom: solid 4px #292d35;
  position: relative;
  padding: 102px 0px 0px 96px;
  background-color: #ffc621;
  background-image: url(../assets/frame1/background.png);
  .back {
   top: 0;
   left: 0;
   z-index: 0;
   position: absolute;
  }
  .star {
   z-index: 1;
   position: absolute;
   top: -10%;
   left: 0;
  }
  button {
   position: relative;
   margin-top: 98px;
   font-family: "Dela Gothic One", sans-serif;
   font-size: 18px;
   padding: 24px;
   background-color: #ffffff;
   border: 2px solid #292d35;
   box-shadow: 3px 4px 0px 0px #292d35;
   transition: 100ms;
  }
  button:hover {
   cursor: pointer;
   transition: 100ms;
   box-shadow: 8px 8px 0px 0px #292d35;
  }
  p {
   position: relative;
   margin-top: 28px;
   color: #292d35;
   font-family: "Manrope", sans-serif;
   font-weight: 700;
   font-size: 22px;
  }
  h1 {
   position: relative;
   margin-top: 36px;
   z-index: 10;
   line-height: 79.2px;
   font-size: 68px;
   font-family: "Dela Gothic One", sans-serif;
   color: white;

   font-weight: 400;
   text-shadow: 5px 5px #292d35;
   -webkit-text-stroke: 3px #292d35;
  }
 }
}

@media screen and (max-width: 400px) {
 .dec1 {
  width: 60px;
  height: 61px;
  right: 5%;
  top: 30%;
 }

 .dec2 {
  z-index: 1;
  width: 93px;
  height: 61px;
  right: 5%;
  bottom: 1%;
 }
 .container {
  .date {
   display: block;
   font-size: 18px;
  }
  .left {
   border-right: none;
   position: relative;

   padding: 60px 16px 60px;
   h1 {
    width: 50%;
    font-family: Dela Gothic One;
    font-size: 38px;
    font-weight: 400;
    line-height: 46px;
    letter-spacing: 0em;
    text-align: left;
   }
   p {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
   }
   button {
    width: 100%;
    margin-top: 48px;
    height: 9%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    text-decoration: none;
   }
  }
  .right {
   display: none;
  }
 }
}

// @media screen and (max-width: 1280px) {
//  .container {
//   .left {
//    padding: 50px 0px 0px 50px;
//   }
//  }
//  .dec1 {
//   position: absolute;
//   right: 5%;
//   top: 5%;
//  }
//  .dec2 {
//   position: absolute;
//   right: 5%;
//   bottom: 5%;
//  }
// }
</style>
