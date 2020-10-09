import { createWebHistory, createRouter } from "vue-router";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Profile from "./views/Profile.vue";
import VehicleRegistration from "./views/VehicleRegistration.vue";
import Home from "./views/Home.vue";
import CreateService from "./views/CreateService.vue";


const routes = [
  { path: "/", name: "login", component: Login },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/profile", name: "profile", component: Profile },
  {
    path: "/vehicle-registration",
    name: "vehicleRegistration",
    component: VehicleRegistration,
  }, 
  { path: "/home", name: "home", component: Home }, 
  { path: "/create-service", name: "createService", component: CreateService
  }
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
