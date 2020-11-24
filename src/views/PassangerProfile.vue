<template>
  <div>
    <Header></Header>
    <div>
      <div class="container">
        <div class="row align-items-start h-100">
          <div
            class="col-12 pl-md-5 pr-md-5 pl-lg-0 pr-lg-0 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-5 mb-0"
          >
            <div class="datosusuario card pt-3">
              <img
                src="../assets/person.png"
                class="img-thumbnail align-self-center h-25"
                alt=" Imagen de perfil"
              />
              <div class="card-body">
                <h5 class="card-title pt-3">Usuario</h5>
                <a type="button" class="btn btn-outline-dark btn-block">
                  Añadir ruta
                </a>
              </div>
            </div>
          </div>
          <div
            class="history-panel col-12 pl-md-5 pr-md-5 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-lg-5 mt-5 mb-5"
          >
            <h5>Tus viajes</h5>
            <history-passanger />
          </div>
          <div
            class="container-map col-12 pl-md-0 pr-md-0 col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-lg-5 mt-5 mb-5"
          >
            <DirectionsMapView />
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
import Foto from "@/assets/Enfermeria22.png";
import UserSC from "../serviceClients/UserServiceClient";
import DirectionsMapView from "../components/DirectionsMapView.vue";
import { EventBus } from "@/EventBus.js";
import HistoryPassanger from "./../components/HistoryPassanger.vue";

export default {
  name: "PassangerProfile",
  components: {
    Header,
    FooterwithBackground,
    DirectionsMapView,
    HistoryPassanger,
  },
  mounted() {
    EventBus.$emit("passengerRoutes-data", this.routes);
  },
  data() {
    return {
      Foto: Foto,
    };
  },
  props: {},

  methods: {
    createUserDB() {
      UserSC.createUser(this.user, (response) => {
        console.log("Usuario creado " + response.status);
      });
    },
    getUserDB() {
      UserSC.getUser();
    },
    updateUser() {},
  },
};
</script>

<style scoped>
.mapa {
  opacity: 0.95;
}
.datosusuario {
  opacity: 0.95;
}

.container {
  height: 70vh;
}

.container-map {
  height: 75vh;
}

.history-panel {
  height: 60vh;
}

@media (max-width: 991px) {
  .container-map {
    height: 90vh;
  }
}
</style>
