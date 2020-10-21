<template>
    <div id="home">
      <Header></Header>

      <div class="container-fluid ">
      <div class="row home-margin">
        <div class="col">
          <h2 role="">Conductor</h2>
          <button
            class="botondri"
            padding="100px"
            type="button"
            @click="goToDrive"
          >
            <img
              src="~@/assets/coche1.png"
              width="150"
              height="150"
              alt=""
              loading="lazy"
            />
          </button>
        </div>
        <div class="col">
          <h2 role="">Pasajero</h2>
          <button class="botondri" type="button" @click="goToPassenger">
            <img
              src="~@/assets/persons.png"
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
  padding-top: 0px;
}
#header1 h1 {
  display: inline;
  margin: 100px;
  margin-left: 200px;
}

.botondri {
  background-color: #06416d;
  height: 200px;
  width: 400px;
  margin: 10px;
  border-radius: 10px;
  border: beige 10px;
}
.home-margin{
  margin-top: 140px;
}
</style>


