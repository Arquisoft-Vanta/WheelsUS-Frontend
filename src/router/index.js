import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./../views/Login.vue";
import Signup from "./../views/Signup.vue";
import Profile from "./../views/Profile.vue";
import VehicleRegistration from "./../views/VehicleRegistration.vue";
import Home from "./../views/Home.vue";
import DriverProfile from "@/views/DriverProfile.vue";

Vue.use(VueRouter);

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
  { path: "/driver-profile", name: "driver-profile", component: DriverProfile },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
