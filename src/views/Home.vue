<template>
  <div id="home">
    <Header></Header>
    <div class="container-fluid">
      <div class="row home-margin">
        <div class="col-12 col-md-6">
          <h2 role="">Conductor</h2>
          <button class="botondri ml-0" type="button" @click="goToDrive">
            <img
              src="~@/assets/coche1.png"
              width="100"
              height="100"
              alt=""
              loading="lazy"
            />
          </button>
        </div>
        <div class="col-12 col-md-6">
          <h2 role="">Pasajero</h2>
          <button class="botondri ml-0" type="button" @click="goToPassenger">
            <img
              src="~@/assets/persons.png"
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
  name: "Home",
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
    goToPassenger() {
      this.$router.push("/passenger");
    },
    goToDrive() {
      this.$router.push("/driver");
    },
  },
};
</script>

<style>
#home {
  padding-top: 1%;
}

.botondri {
  background-color: #1455d9;
  height: 100%;
  width: 90%;
  border-radius: 10px;
  border: beige 10px;
}
.home-margin {
  margin-top: 10%;
}
</style>
