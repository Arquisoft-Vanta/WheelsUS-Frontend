<template>
  <div id="passenger">
    <Header></Header>

    <div class="container-fluid">
      <div class="row">
        <div id="back-button" class="col-12">
          <button
            class="botonreg1 mt-md-4 mb-md-4"
            type="button"
            @click="goToHome"
          >
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
        <div class="col-12 col-md-6">
          <h2 role="">Historial de servicios</h2>
          <button class="botondri" type="button" @click="goToHistory">
            <img
              src="~@/assets/listw.png"
              width="100"
              height="100"
              alt=""
              loading="lazy"
            />
          </button>
        </div>
        <div class="col-12 col-md-6">
          <h2 role="">Postularme a servicio</h2>
          <button class="botondri" type="button" @click="goToPostulation">
            <img
              src="~@/assets/pasajerow.png"
              width="100"
              height="100"
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
    goToPostulation() {
      this.$router.push("/post-service");
    },
    goToHistory() {
      this.$router.push("/nomination-services");
    },
  },
};
</script>

<style>
#passenger {
  padding-top: 3%;
}

.botondri {
  background-color: #1455d9;
  height: 25vh;
  width: 70%;
  border-radius: 10px;
  border: beige 10px;
}
.botonreg1 {
  background-color: #1455d9;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
