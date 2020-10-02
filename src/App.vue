<template>
  <!--<Login></Login>-->
  <!--<Usuario nombre="Unal"></Usuario>-->
  <!-- <RegistrarVehiculo></RegistrarVehiculo> -->
  <!--<Banner></Banner>-->
  <Perfil></Perfil>
</template>

<script>
//import RegistrarVehiculo from "./components/RegistrarVehiculo.vue";
//import Banner from "./components/Banner.vue"
//import Login from "./components/Login.vue";
//import Usuario from "./components/Usuario.vue";
import Perfil from "./components/Perfil.vue";
export default {
  name: "App",
  components: {
    //Usuario,
    //Login,
    //Banner,
    //RegistrarVehiculo
    Perfil
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
