<template>
 <div class="container">
  <img class="dec-1" src="../assets/form/dec1.svg" />
  <img class="dec-2" src="../assets/form/dec2.svg" />
  <img class="dec-3" src="../assets/form/dec3.svg" />
  <img class="dec-4" src="../assets/form/dec4.svg" />
  <img class="dec-5" src="../assets/form/dec5.svg" />
  <img class="dec-6" src="../assets/form/dec6.svg" />

  <div class="cancel">
   <router-link class="link" to="/">
    <img class="cross" src="../assets/form/cross.svg"
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
    <div class="input" :class="{ invalid: !validName }">
     <input @blur="validateName" v-model="name" />
    </div>
    <label v-if="!validName" class="warning">Invalid name</label>
   </div>

   <div class="phone">
    <span>Телефон</span>
    <div class="input" :class="{ invalid: !validPhone }">
     <span>+7</span>
     <input @blur="validatePhoneNumber" v-model="phone" />
    </div>
    <label v-if="!validPhone" class="warning">Invalid phone</label>
   </div>

   <div class="email">
    <span>Почта</span>
    <div class="input">
     <input v-model="email" />
    </div>
   </div>
   <button
    :disabled="
     !validName ||
     !validPhone ||
     phone.length < 1 ||
     name.length < 1 ||
     email.length < 1 ||
     !check1
    "
   >
    Записаться
   </button>
   <div class="boxes">
    <div>
     <div @click="check1 = !check1" class="checkbox">
      <img v-if="check1" src="../assets/check.svg" />
     </div>
     <p>
      Регистрируясь, вы соглашаетесь с
      <strong>пользовательским соглашением <br /> </strong> и
      <strong>политикой конфиденциальности</strong>
     </p>
    </div>
    <div>
     <div @click="check2 = !check2" class="checkbox">
      <img v-if="check2" src="../assets/check.svg" />
     </div>
     <p>
      Получать уведомление с напоминаниями о дате и времени проведения вебинара
     </p>
    </div>
   </div>
  </form>
 </div>
</template>

<script>
import { isValidPhoneNumber } from "libphonenumber-js";
export default {
 data() {
  return {
   check1: false,
   check2: false,
   name: "",
   validName: true,
   phone: "",
   validPhone: true,
   email: "",
  };
 },
 methods: {
  validatePhoneNumber() {
   if (this.phone) {
    this.validPhone = isValidPhoneNumber(this.phone, "RU");
    console.log(isValidPhoneNumber(this.phone, "RU"));
   }
  },
  validateName() {
   if (this.name) {
    if (this.name.length < 2) {
     this.validName = false;
     return;
    }
    if (this.name.match(/\d+/g) !== null) {
     this.validName = false;
     return;
    }
   }
   this.validName = true;
  },
 },
 computed: {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap");
.boxes {
 grid-area: box;
 div:first-child {
  align-items: flex-start;
 }
 div {
  display: flex;
  align-items: center;
  strong {
   color: #604aff;
  }
  .checkbox {
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   margin-right: 12px;
   width: 20px;
   height: 20px;
   border: 2px solid #292d35;
   transition: 100ms;
  }
  .checkbox:hover {
   transition: 100ms;
   border: 2px solid #292d358c;
  }
  p {
   padding: 0;
   background-color: transparent;
   box-shadow: none;
   border-style: hidden;
   color: black;
   font-family: Mulish;
   font-size: 14px;

   line-height: 20px;
   letter-spacing: 0em;
   text-align: left;
  }
 }
}
.link {
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;
 padding: 12px;
}
input {
 height: 100%;
 border-style: hidden;
 outline: none;
 font-family: Manrope;
 font-size: 18px;
 font-weight: 500;
 line-height: 22px;
 letter-spacing: 0em;
 text-align: left;
}
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
 grid-gap: 30px;
 grid-template-areas:
  "name name"
  "phone email"
  "button button"
  "box box";

 button {
  margin-top: 20px;
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

 button:disabled:hover {
  box-shadow: none;
 }

 button:disabled {
  position: relative;
 }

 button:disabled:before {
  top: 50%;
  left: -0.2%;
  position: absolute;
  content: "";
  display: block;
  height: 2px;
  width: 100%;
  background-color: black;
  transform: rotate(5.9deg);
 }

 button:disabled:after {
  top: 50%;
  left: 0.2%;
  position: absolute;
  content: "";
  display: block;
  height: 2px;
  width: 100%;
  background-color: black;
  transform: rotate(354.1deg);
 }

 .input {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 8px;
  border: 2px solid #292d35;
  padding: 20px 16px;
  outline: none;
  transition: 100ms;
  span {
   margin-right: 5px;
   font-family: Manrope;
   font-size: 18px;
   font-weight: 500;
   line-height: 22px;
   letter-spacing: 0em;
   text-align: left;
  }
 }
 .input.invalid {
  border: 2px solid #fe5101;
 }
 .input:hover {
  transition: 100ms;
  border: 2px solid #292d3583;
 }

 .input:focus-within {
  transition: 100ms;
  border: 2px solid #604aff;
 }
 div {
  width: 100%;
  .warning {
   font-family: Manrope;
   font-size: 14px;
   font-weight: 500;
   line-height: 14px;
   letter-spacing: 0em;
   text-align: left;
   position: absolute;
   display: block;
   margin-top: 8px;
   color: #fe5101;
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
  position: relative;
  grid-area: name;
  height: 100%;
  .input {
   input {
    width: 100%;
   }
  }
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

@media screen and (max-width: 400px) {
 .cancel {
  display: none;
 }
 .head {
  width: 100%;
  h1 {
   font-family: Dela Gothic One;
   font-size: 16px;
   font-weight: 400;
   line-height: 19px;
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
 }
 .container {
  padding: 60px 16px 72px 16px;
 }
 .dec-1 {
  display: none;
 }
 .dec-2 {
  display: none;
 }
 .dec-3 {
  display: none;
 }
 .dec-1 {
  display: none;
 }
 .dec-4 {
  display: none;
 }
 .dec-5 {
  display: none;
 }

 .dec-6 {
  display: none;
 }

 form {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  grid-template-areas:
   "name"
   "phone"
   "email"
   "button"
   "box";
 }
}

@media screen and (max-width: 1280px) {
 form {
  margin-top: 15px;
 }
 .dec-3 {
  right: 10%;
 }
 .dec-2 {
  display: none;
 }
 .dec-6 {
  display: none;
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
