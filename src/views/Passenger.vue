<template>
  <div id="user">
    <div id="passenger">
      <Header></Header>
      <div id="header">
        <button class="botonreg1" type="button" @click="goToHome">
          <img
            src="~@/assets/return1.png"
            width="50"
            height="50"
            alt=""
            loading="lazy"
          />
        </button>

        <h1 role="">Historial de servicios</h1>
        <h1 role="">Postularme a servicio</h1>
        <div>
          <button class="botondri" padding="100px" type="button">
            <img
              src="~@/assets/listw.png"
              width="200"
              height="200"
              alt=""
              loading="lazy"
            />
          </button>
          <button class="botondri" type="button">
            <img
              src="~@/assets/pasajerow.png"
              width="150"
              height="150"
              alt=""
              loading="lazy"
            />
          </button>
        </div>
        
      </div>
      <FooterwithBackground></FooterwithBackground>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import FooterwithBackground from "../components/FooterwithBackground.vue";

export default {
  name: "Passenger",
  props: {
    nombre: String,
  },
  components: {
    Header,
    FooterwithBackground,
  },
  data() {
    return {
      telefono: 0,
    };
  },
  methods: {
    goToPas() {
      this.$router.push("passenger");
    },
    goToHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style>
#passenger {
  padding-top: 50px;
}
#header h1 {
  display: inline;
 
  margin-left: 200px;
  margin-right: 100px;
}

.botondri {
  background-color: #06416d;
  height: 200px;
  width: 400px;

  margin-left: 100px;
  border-radius: 10px;
  border: beige 10px;
}
.botonreg1 {
  background-color: #06416d;
  color: white;
  border: none;
  margin-left: -100px;
  border-radius: 100px;
}
</style>