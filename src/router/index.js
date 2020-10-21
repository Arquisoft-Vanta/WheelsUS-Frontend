import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "./../views/Login.vue";
import Signup from "./../views/Signup.vue";
import Profile from "./../views/Profile.vue";
import VehicleRegistration from "./../views/VehicleRegistration.vue";
import Home from "./../views/Home.vue";
import CreateService from "./../views/CreateService.vue";
import PostService from "./../views/PostService.vue";

Vue.use(VueRouter)

const routes = [
  { path: "/", name: "login", component: Login },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/profile", name: "profile", component: Profile },
  {
    path: "/vehicle-registration",
    name: "vehicleRegistration",
    component: VehicleRegistration,
  }, { path: "/home", name: "home", component: Home },
  { path: "/post-service", name: "postService", component: PostService },
  { path: "/create-service", name: "createService", component: CreateService }
  
];


const router = new VueRouter({
  mode: "history",
  routes
})

export default router