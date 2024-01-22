<template>
 <section class="h">
  <header>
   <div>
    <h2>MEMPHIS</h2>
    <nav>
     <li @click="scroll('.about')">О лекции</li>
     <li @click="scroll('.speakers')">Спикеры</li>
     <li @click="scroll('.faq')">FAQ</li>
     <li @click="scroll('.contacts')">Контакты</li>
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
 methods: {
  scroll(el) {
   this.$emit("scroll", el);
  },
 },
};
</script>

<style lang="scss" scoped>
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

@media screen and (max-width: 1280px) {
 header {
  padding: 36px 50px;
 }
}
</style>
