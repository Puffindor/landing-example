<template>
 <section v-if="isMobile" class="h-mobile">
  <header>
   <router-link class="link" to="/"> <h2>MEMPHIS</h2></router-link>
   <img v-if="isOpen" @click="opneHeader" src="../assets/header/cross.svg" />
   <img v-else @click="opneHeader" src="../assets/header/menu.svg" />
  </header>
  <div class="menu-out" v-if="isOpen">
   <div class="menu">
    <nav>
     <router-link class="link" to="/">
      <li @click="scroll('.about')">О лекции</li></router-link
     >
     <router-link class="link" to="/">
      <li @click="scroll('.speakers')">Спикеры</li>
     </router-link>

     <router-link class="link" to="/">
      <li @click="scroll('.faq')">FAQ</li>
     </router-link>

     <router-link class="link" to="/">
      <li @click="scroll('.contacts')">Контакты</li>
     </router-link>
    </nav>
    <div class="contacts">
     <p>Контактный центр, если не нашли ответы на свой вопрос</p>
     <h2>+7 800 222‒65‒21</h2>
    </div>
    <div class="contacts">
     <p>E-mail</p>
     <h2>memphis@lec.ru</h2>
    </div>

    <button>
     <router-link class="link" to="/registration" @click="isOpen = false">
      ЗАПИСАТЬСЯ НА ЛЕКЦИЮ</router-link
     >
    </button>
   </div>
  </div>
 </section>

 <section v-else class="h">
  <header>
   <div>
    <router-link class="link" to="/"> <h2>MEMPHIS</h2></router-link>
    <nav>
     <router-link class="link" to="/">
      <li @click="scroll('.about')">О лекции</li></router-link
     >
     <router-link class="link" to="/">
      <li @click="scroll('.speakers')">Спикеры</li>
     </router-link>

     <router-link class="link" to="/">
      <li @click="scroll('.faq')">FAQ</li>
     </router-link>

     <router-link class="link" to="/">
      <li @click="scroll('.contacts')">Контакты</li>
     </router-link>
    </nav>
   </div>
   <router-link to="/registration">
    <button>ЗАПИСАТЬСЯ НА ЛЕКЦИЮ</button></router-link
   >
  </header>
 </section>
</template>
<script>
export default {
 props: ["isMobile"],
 data() {
  return {
   isOpen: false,
  };
 },
 methods: {
  opneHeader() {
   this.isOpen = !this.isOpen;
  },
  scroll(el) {
   this.$emit("scroll", el);
   this.isOpen = false;
  },
 },
};
</script>

<style lang="scss" scoped>
.link {
 text-decoration: none;
 color: black;
}
.h {
 height: 128px;
 width: 100vw;
 display: flex;
 justify-content: center;
}
header {
 width: 100%;
 height: 100%;
 border-bottom: solid 4px #292d35;
 position: relative;
 z-index: 99;
 justify-content: space-between;
 align-items: center;
 display: flex;
 padding: 36px 96px;
 div {
  display: flex;
  align-items: center;
 }
}
h2 {
 margin-right: 80px;
 font-family: Dela Gothic One;
 font-size: 28px;
 font-weight: 400;
 line-height: 28px;
 letter-spacing: 0em;
 text-align: left;
}
button {
 padding: 16px 20px;
 font-family: Dela Gothic One;
 font-size: 16px;
 font-weight: 400;
 line-height: 16px;
 letter-spacing: 0em;
 text-align: left;
 background-color: #ffc621;
 border: 2px solid #292d35;
 transition: 100ms;
 cursor: pointer;
}
button:hover {
 box-shadow: 4px 4px 0px 0px #292d35;

 transition: 100ms;
}
nav {
 height: 100%;
 align-items: center;
 display: flex;
 list-style: none;
 li {
  margin-right: 60px;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 800;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  transition: 100ms;
 }
 li:hover {
  cursor: pointer;
  opacity: 0.5;
  transition: 100ms;
 }
}

.menu-out {
 z-index: 1000000;
 top: 100px;
 position: absolute;
 height: 100vh;
 background-color: #292d3584;
}
.menu {
 display: flex;
 flex-direction: column;
 background-color: #ffffff;
 padding: 42px 16px 32px 16px;

 button {
  font-family: Dela Gothic One;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
 }
 .contacts {
  p {
   font-family: Manrope;
   font-size: 16px;
   font-weight: 500;
   line-height: 20px;
   letter-spacing: 0em;
   text-align: left;
   margin-bottom: 8px;
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
 .contacts:last-child {
  margin-bottom: 60px;
 }

 .contacts {
  margin-bottom: 40px;
 }

 nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  li {
   margin-bottom: 40px;
   align-items: flex-start;
  }
 }
}

.h-mobile {
 height: fit-content;

 position: relative;

 header {
  padding: 28px 16px;
 }
}

@media screen and (max-width: 1280px) {
 header {
  padding: 36px 50px;
 }
}

@media screen and (max-width: 400px) {
}
</style>
