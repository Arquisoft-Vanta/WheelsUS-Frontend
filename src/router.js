import { createWebHistory, createRouter } from "vue-router";
import Login from "./views/Login.vue";

const routes = [{ path: "/", name: "login", component: Login }];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
