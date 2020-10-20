<template>
  <div id="user">
    <div id="home"><Header></Header>
      <h1>Landing page WHEELS US</h1>
      <h2>Coming soon!</h2>
      <button class="btn btn-primary button" type="button">BOTON</button>
    <FooterwithBackground></FooterwithBackground>
  </div></div>
</template>

<script>
import Header from "../components/Header";
import FooterwithBackground from "../components/FooterwithBackground.vue";

export default {
    name: "Usuario",
    props:{
        nombre: String
    },  components: {
    Header,
    FooterwithBackground,
  },
    data(){
        return{
        telefono:0
    }}

}
</script>

<style>
#home{
    padding-top: 10%;
}
</style>