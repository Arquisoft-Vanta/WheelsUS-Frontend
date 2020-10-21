<template>
  <div id="driver">
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
          <h2 role="">Crear servicio</h2>
          <button class="botondri" padding="100px" type="button" @click="goToCreateService">
            <img
              src="~@/assets/new.png"
              width="150"
              height="150"
              alt=""
              loading="lazy"
            />
          </button>
        </div>
        <div class="col">
          <h2 role="">Ver pasajeros en linea</h2>
          <button class="botondri" type="button">
            <img
              src="~@/assets/online.png"
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
  name: "Driver",
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
    goToCreateService(){
      this.$router.push("/create-service")
    }
  },
};
</script>

<style>
#driver {
  padding-top: 0px;
}
#back-button {
    margin: 16px 0 0 10px;

}

.botondri {
  background-color: #06416d;
  height: 200px;
  width: 400px;

  margin-left: 100px;
  border-radius: 10px;
  border: beige 10px;
}
</style>