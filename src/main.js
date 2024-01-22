import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Lnading from "./components/Lnading.vue";
import RegistrationForm from "./components/RegistrationForm.vue";

const router = createRouter({
 history: createWebHashHistory(),
 routes: [
  { path: "/", component: Lnading },
  { path: "/registration", component: RegistrationForm },
 ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
