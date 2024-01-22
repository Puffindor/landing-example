<template>
 <div class="container">
  <img class="dec-1" src="../assets/form/dec1.png" />
  <img class="dec-2" src="../assets/form/dec2.png" />
  <img class="dec-3" src="../assets/form/dec3.png" />
  <img class="dec-4" src="../assets/form/dec4.png" />
  <img class="dec-5" src="../assets/form/dec5.png" />
  <img class="dec-6" src="../assets/form/dec6.png" />

  <div class="cancel">
   <router-link to="/">
    <img class="cross" src="../assets/form/cross.png"
   /></router-link>
  </div>
  <div class="head">
   <div>
    <h1>Регистрация на вебинар о мемфмсе</h1>
    <p>12 апреля 16:00 - 18:30 • онлайн</p>
   </div>
  </div>
  <form>
   <div class="name">
    <span>Имя</span>
    <input />
   </div>

   <div class="phone">
    <span>Телефон</span>
    <input />
   </div>

   <div class="email">
    <span>Почта</span>
    <input />
   </div>
   <button>Записаться</button>
  </form>
 </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
img {
 position: absolute;
}
.cancel {
 cursor: pointer;
 position: absolute;
 top: 90px;
 right: 90px;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 12px;
 border: 2px solid #292d35;
 background-color: #fe5101;
 transition: 100ms;
 .cross {
  position: relative;
 }
}
.cancel:hover {
 transition: 100ms;
 box-shadow: 4px 4px 0px 0px #292d35;
}

.dec-6 {
 right: 10%;
 top: 10%;
}

.dec-5 {
 top: 25%;
 left: 5%;
}
.dec-4 {
 bottom: 15%;
 right: 10%;
}
.dec-3 {
 top: 50%;
 right: 20%;
}

.dec-2 {
 top: 5%;
 left: 50%;
}

.dec-1 {
 bottom: 10%;
 left: 10%;
}

form {
 margin-top: 60px;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-gap: 24px;
 grid-template-areas:
  "name name"
  "phone email"
  "button button";
 width: 30%;
 button {
  padding: 22px 0px 22px;
  grid-area: button;
  border: 2px solid #292d35;
  background-color: #ffc621;

  font-family: Dela Gothic One;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  transition: 100ms;
 }
 button:hover {
  cursor: pointer;
  transition: 100ms;
  box-shadow: 8px 8px 0px 0px #292d35;
 }
 div {
  width: 100%;
  input {
   width: 100%;
   margin-top: 8px;
   border: 2px solid #292d35;
   padding: 20px 16px;
   font-family: Manrope;
   font-size: 18px;
   font-weight: 500;
   line-height: 22px;
   letter-spacing: 0em;
   text-align: left;
   outline: none;
  }
  span {
   font-family: Manrope;
   font-size: 16px;
   font-weight: 500;
   line-height: 16px;
   letter-spacing: 0em;
   text-align: left;
  }
 }
 .name {
  grid-area: name;
 }
 .phone {
  grid-area: phone;
 }
 .email {
  grid-area: email;
 }
}
.container {
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 width: 100%;
 height: 100%;
}
.head {
 width: 30%;
 display: block;

 h1 {
  border: 2px solid #292d35;
  box-shadow: 8px 8px 0px 0px #292d35;
  background-color: #604aff;
  padding: 12px 20px;
  border-bottom: none;
  font-family: Dela Gothic One;
  font-size: 35px;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
 }
}
p {
 width: fit-content;
 padding: 8px 16px;
 box-shadow: 8px 8px 0px 0px #292d35;
 background-color: #604aff;
 border: solid 2px #292d35;
 border-top: none;
 font-family: Manrope;
 font-size: 22px;
 font-weight: 700;
 line-height: 27px;
 letter-spacing: 0em;
 text-align: left;
 color: #ffffff;
}

@media screen and (max-width: 1280px) {
 form {
  margin-top: 15px;
 }
 .dec-2 {
  display: none;
 }
 .dec-6 {
  right: 20%;
  top: 10%;
 }
 .cancel {
  top: 5%;
  right: 5%;
 }
}
@media screen and (min-width: 2048px) {
 .container {
  border-right: solid 4px #292d35;
  border-left: solid 4px #292d35;
 }
}
</style>
