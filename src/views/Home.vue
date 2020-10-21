<template>
  <div id="user">
    
    <div id="home"><Header></Header>
      <div id="header1">
        <h1 role="">Conductor</h1>
        <h1 role="">Pasajero</h1>
        <div>
          <button class="botondri" padding="100px" type="button" @click="goToDriv">
          <img
            src="~@/assets/coche1.png"
            width="200"
            height="200"
            alt=""
            loading="lazy"
          />
        </button>
        <button class="botondri" type="button" @click="goToPas">
          <img
            src="~@/assets/persons.png"
            width="200"
            height="200"
            alt=""
            loading="lazy"
          />
        </button>
        </div>
        
      </div>
    <FooterwithBackground></FooterwithBackground>
  </div></div>
</template>
<script>
import Header from "../components/Header";
import FooterwithBackground from "../components/FooterwithBackground.vue";

export default {
    name: "Home",
    props:{
        nombre: String
    },  components: {
    Header,
    FooterwithBackground,
  },
    data(){
        return{
        telefono:0
    }},
    methods: {
    goToPas() {
      this.$router.push("home/passenger");
    },
    goToDriv() {
      this.$router.push("home/driver");
    },
  },

}
</script>

<style>
#home{
    padding-top: 50px;
}
#header1 h1 { display:inline;
margin: 100px;
margin-left: 200px; }

.botondri{
  background-color: #06416d;
  height:  200px;
  width: 400px;
  margin: 10px;
  border-radius: 10px ;
  border: beige 10px;  

  
}
</style>


