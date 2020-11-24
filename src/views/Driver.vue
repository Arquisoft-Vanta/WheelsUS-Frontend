<template>
  <div id="driver">
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
            class="card border shadow mt-2 mb-5 bg-white rounded text-center mr-0 ml-0 mr-sm-5 ml-sm-5 mt-xs-0 mb-xs-0 mt-5"
          >
            <div class="card-body">
              <h1 class="card-title pt-3">Nuevo servicio</h1>
              <p class="card-text font-weight-normal pt-2">
                En esta sección podrás crear un
                <strong>nuevo servicio</strong> y ponerlo a disposición de todos
                los <strong>pasajeros</strong>.
              </p>
              <a
                href=""
                class="btn btn-dark btn-block btn-lg mt-4"
                @click="goToCreateService"
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
              <h1 class="card-title pt-3">Servicios actuales</h1>
              <p class="card-text font-weight-normal pt-2">
                En esta sección podrás observar
                <strong>todos los servicios</strong> que tienes disponibles a
                los <strong>pasajeros</strong>.
              </p>
              <a
                href=""
                class="btn btn-dark btn-block btn-lg mt-4"
                @click="goToMyServices"
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
    goToCreateService() {
      this.$router.push("/create-service");
    },
    goToMyServices() {
      this.$router.push({ name: "route-services" });
    },
    goToViewPassengers() {
      this.$router.push("/view-passengers");
    },
  },
};
</script>
