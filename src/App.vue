<template>
  <Login></Login>
  <!--<Usuario nombre="Unal"></Usuario>-->
</template>

<script>
import Login from "./components/Login.vue";
//import Usuario from "./components/Usuario.vue";
export default {
  name: "App",
  components: {
    //Usuario,
    Login,
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
