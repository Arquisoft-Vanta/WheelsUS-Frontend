<template>
  <div id="passenger">
    <Header></Header>

    <div class="container-fluid">
      <div class="row">
        <div id="back-button">
          <button class="btn btn-primary" type="button" @click="goToHome">
            <img
              src="~@/assets/return1.png"
              width="50"
              height="50"
              alt=""
              loading="lazy"
            />
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2 role="">Historial de servicios</h2>
          <button class="botondri" padding="100px" type="button">
            <img
              src="~@/assets/listw.png"
              width="150"
              height="150"
              alt=""
              loading="lazy"
            />
          </button>
        </div>
        <div class="col">
          <h2 role="">Postularme a servicio</h2>
          <button class="botondri" type="button" @click="goToPostulation">
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
    </div>
    <FooterwithBackground></FooterwithBackground>
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
    goToHome() {
      this.$router.push("/home");
    },
    goToPostulation(){
      this.$router.push("/post-service")
    }
  },
};
</script>

<style>
#passenger {
  padding-top: 0px;
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