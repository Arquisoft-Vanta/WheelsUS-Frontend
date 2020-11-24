<template>
  <div id="passenger">
    <Header></Header>
    <div class="container-fluid mb-5">
      <div class="row">
        <div class="col-12 col-md-2 offset-md-5 mt-4">
          <button
            class="btn btn-dark btn-block btn-lg"
            type="button"
            @click="goToHome"
          >
            Atrás
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div
            class="card border shadow mt-2 mb-2 bg-white rounded text-center mr-0 ml-0 mr-sm-5 ml-sm-5 mt-xs-0 mb-xs-0 mt-5"
          >
            <div class="card-body">
              <h1 class="card-title pt-3">Historial de servicios</h1>
              <p class="card-text font-weight-normal pt-2">
                En esta sección podrás ver tu historial de
                <strong>servicios realizados</strong> como
                <strong>pasajero</strong>.
              </p>
              <a
                href=""
                class="btn btn-dark btn-block btn-lg mt-4"
                @click="goToHistory"
                >Entrar</a
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="card border shadow mt-2 mb-5 bg-white rounded text-center mr-0 ml-0 mr-sm-5 ml-sm-5 mt-xs-0 mb-xs-0 mt-5"
          >
            <div class="card-body">
              <h1 class="card-title pt-3">Postularte a servicio</h1>
              <p class="card-text font-weight-normal pt-2">
                En esta sección podrás postularte a un
                <strong>servicio disponible</strong> como
                <strong>pasajeros</strong>.
              </p>
              <a
                href=""
                class="btn btn-dark btn-block btn-lg mt-4"
                @click="goToPostulation"
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
    goToPassangerProfile() {
      this.$router.push("/passenger-profile");
    },
    goToHistory() {
      this.$router.push("/nomination-services");
    },
  },
};
</script>
