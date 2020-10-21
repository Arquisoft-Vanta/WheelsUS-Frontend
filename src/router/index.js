import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "./../views/Login.vue";
import Signup from "./../views/Signup.vue";
import Profile from "./../views/Profile.vue";
import VehicleRegistration from "./../views/VehicleRegistration.vue";
import Home from "./../views/Home.vue";
import Pasajero from "./../views/Passenger.vue";
import Driver from "./../views/Driver.vue";
import RideRegistration from "./../views/RideRegistration.vue";

Vue.use(VueRouter)

const routes = [
  { path: "/", name: "login", component: Login },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/profile", name: "profile", component: Profile },
  { path: "/profile", name: "profile", component: Profile },
  { path: "/ride-registration", name: "rideRegistration", component: RideRegistration },
  {
    path: "/vehicle-registration",
    name: "vehicleRegistration",
    component: VehicleRegistration,
  }, { path: "/home", name: "home", component: Home },
  { path: "/home/passenger", name: "passenger", component: Pasajero },
  { path: "/home/driver", name: "driver", component: Driver }
];


const router = new VueRouter({
  mode: "history",
  routes
})

export default router
