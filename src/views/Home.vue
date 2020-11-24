<template>
  <div id="home">
    <Header></Header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6 mt-0 mb-0 mt-md-5 mb-md-0">
          <div
            class="card border shadow mt-2 mb-2 bg-white rounded text-center mr-0 ml-0 mr-sm-5 ml-sm-5 mt-xs-0 mb-xs-0 mt-5"
          >
            <div class="card-body">
              <h1 class="card-title pt-3">Conductor</h1>
              <p class="card-text font-weight-normal pt-2">
                Ingresa en esta sección y descubre todo lo que la plataforma
                tiene para ti como <strong>conductor</strong>.
              </p>
              <a href="" class="btn btn-dark btn-block btn-lg mt-4" @click="goToDrive"
                >Entrar</a
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mt-0 mb-5 mt-md-5 mb-md-0">
          <div
            class="card text-dark bg-white rounded shadow border shadow mt-2 mb-2 text-center mr-0 ml-0 mr-sm-5 ml-sm-5 mt-xs-0 mb-xs-0 mt-5 mb-5"
          >
            <div class="card-body">
              <h1 class="card-title pt-3">Pasajero</h1>
              <p class="card-text font-weight-normal pt-2">
                Ingresa en esta sección y descubre todo lo que la plataforma
                tiene para ti como <strong>pasajero</strong>.
              </p>
              <a href="" class="btn btn-dark btn-block btn-lg mt-4" @click="goToPassenger"
                >Entrar</a
              >
            </div>
          </div>
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
  beforeCreate() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/");
    }
  },
};
</script>

