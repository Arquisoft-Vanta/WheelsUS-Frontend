import { createWebHistory, createRouter } from "vue-router";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Profile from "./views/Profile.vue";
import VehicleRegistration from "./views/VehicleRegistration.vue";

const routes = [
  { path: "/", name: "login", component: Login },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/profile", name: "profile", component: Profile },
  {
    path: "/vehicle-registration",
    name: "vehicleRegistration",
    component: VehicleRegistration,
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
