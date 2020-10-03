<template>
  <!--<Login></Login>-->
  <!--<Usuario nombre="Unal"></Usuario>-->

  <!--<RegistrarVehiculo></RegistrarVehiculo>-->
  <!--<Banner></Banner>-->
  <signup></signup>
</template>

<script>
import signup from "./components/signup.vue";
//import RegistrarVehiculo from "./components/RegistrarVehiculo.vue";
//import Banner from "./components/Banner.vue"
//import Login from "./components/Login.vue";
//import Usuario from "./components/Usuario.vue";

export default {
  name: "App",
  components: {
    //Usuario,
    //Login,
    //Banner,
    //RegistrarVehiculo,
    signup
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
