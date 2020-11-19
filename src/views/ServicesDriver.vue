<template>
  <div>
    <Header></Header>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-4">
          <div class="card" style="margin: 5% 0 0 0">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-active-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  >Activos</a
                >
                <a
                  class="nav-item nav-link"
                  id="nav-made-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                  >Realizados</a
                >
              </div>
            </nav>
          </div>
          <div
            class="card"
            style="height: 80%; overflow: scroll; margin: 0 0 -20% 0"
          >
            <div class="card-body" style="margin: -15% 0 0 0">
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div class="accordion" id="accordionExample">
                    <div
                      class="card"
                      v-for="route in routesActive"
                      :key="route.id"
                    >
                      <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                          <button
                            class="btn btn-link btn-block text-left"
                            type="button"
                            data-toggle="collapse"
                            :data-target="`#data${route.id}`"
                            aria-expanded="true"
                            :aria-controls="`data${route.id}`"
                            style="color: #06416d"
                          >
                            <div>
                              Origen:
                              {{ route.originDriver.address.split(",")[0] }}
                            </div>
                            <div>
                              Destino:
                              {{
                                route.destinationDriver.address.split(",")[0]
                              }}
                            </div>
                          </button>
                        </h2>
                      </div>
                      <div
                        :id="`data${route.id}`"
                        class="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body">
                          <div>Dia: {{ route.date }}</div>
                          <div>Hora: {{ route.time }}</div>
                          <div class="row">
                            <div class="col">
                              <button
                                type="button"
                                class="btn btn-outline-dark btn-block button"
                                @click="changeStateofRoute(route)"
                                style="margin: 5% 0 5% 0"
                                data-toggle="modal"
                                data-target="#modalConfirmation"
                              >
                                Servicio Realizado
                              </button>
                            </div>
                            <div class="col">
                              <button
                                type="button"
                                class="btn btn-outline-dark btn-block button"
                                @click="deleteRoute(route)"
                                style="margin: 5% 0 5% 0"
                              >
                                Cancelar Servicio
                              </button>
                            </div>
                            <div class="col">
                              <button
                                type="button"
                                class="btn btn-outline-dark btn-block button"
                                style="margin: 5% 0 5% 0"
                                @click="routePassengerItemPressed(route)"
                              >
                                Ver Ruta
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div class="accordion" id="accordionExample2">
                    <div
                      class="card"
                      v-for="route in routesMade"
                      :key="route.id"
                    >
                      <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                          <button
                            class="btn btn-link btn-block text-left"
                            type="button"
                            data-toggle="collapse"
                            :data-target="`#data${route.id}`"
                            aria-expanded="true"
                            :aria-controls="`data${route.id}`"
                            style="color: #06416d"
                          >
                            <div>
                              Origen:
                              {{ route.originDriver.address.split(",")[0] }}
                            </div>
                            <div>
                              Destino:
                              {{
                                route.destinationDriver.address.split(",")[0]
                              }}
                            </div>
                          </button>
                        </h2>
                      </div>
                      <div
                        :id="`data${route.id}`"
                        class="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample2"
                      >
                        <div class="card-body">
                          <div>Dia: {{ route.date }}</div>
                          <div>Hora: {{ route.time }}</div>
                          <div class="row">
                            <div class="col">
                              <button
                                type="button"
                                class="btn btn-outline-dark btn-block button"
                                style="margin: 5% 0 5% 0"
                                @click="routePassengerItemPressed(route)"
                              >
                                Ver Ruta
                              </button>
                            </div>
                            <div class="col">
                              <button
                                type="button"
                                class="btn btn-outline-dark btn-block button"
                                style="margin: 5% 0 5% 0"
                                @click="chooseRoute(route)"
                              >
                                Calificar Pasajeros
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-8 mt-0 mt-md-8 mb-5 mb-md-0"
        >
          <DirectionsMapView />
        </div>
      </div>
    </div>
    <FooterwithBackground></FooterwithBackground>
  </div>
</template>

<script>
import Header from "../components/Header";
import FooterwithBackground from "../components/FooterwithBackground.vue";
import DirectionsMapView from "../components/DirectionsMapView.vue";
import { EventBus } from "@/EventBus.js";
import firebase from "firebase";
import UserSC from "../serviceClients/UserServiceClient";

export default {
  name: "MyServicesDriver",
  components: {
    Header,
    FooterwithBackground,
    DirectionsMapView,
  },

  data() {
    return {
      routesActive: [],
      routesMade: [],
      userMail: "",
    };
  },
  created() {
    this.getUserDB();
  },
  mounted() {
    EventBus.$emit("passengerRoutes-data", this.routes);
  },
  methods: {
    getUserDB() {
      UserSC.getUser((data) => {
        this.userMail = data.userMail;
        this.getRoutesActives();
        this.getRoutesMade();
      });
    },
    getRoutesActives() {
      const db = firebase.firestore();
      db.collection("driverRoute")
        .where("dataDriver.driverMail", "==", this.userMail)
        .where("routeActive", "==", true)
        .where("servicePerformed", "==", false)
        .get()
        .then((snap) => {
          this.routesActive = [];
          snap.forEach((doc) => {
            let route = doc.data();
            route.id = doc.id;
            this.routesActive.push(route);
          });
        });
    },
    getRoutesMade() {
      const db = firebase.firestore();
      db.collection("driverRoute")
        .where("dataDriver.driverMail", "==", this.userMail)
        .where("servicePerformed", "==", true)
        .get()
        .then((snap) => {
          this.routesMade = [];
          snap.forEach((doc) => {
            let route = doc.data();
            route.id = doc.id;
            this.routesMade.push(route);
          });
        });
    },
    changeStateofPassenger(id) {
      const db = firebase.firestore();
      const a = db.collection("passengerRoutes").doc(id);
      a.update({
        selected: false,
      });
    },
    deleteRoute(route) {
      const db = firebase.firestore();
      for (let i = 65; i < 69; i++) {
        if (route.passengers[String.fromCharCode(i)].id !== "") {
          this.changeStateofPassenger(
            route.passengers[String.fromCharCode(i)].id
          );
        }
      }
      db.collection("driverRoute").doc(route.id).delete();
      this.$bvToast.toast("Ruta Cancelada Correctamente!", {
        title: "Ruta Cancelada",
        autoHideDelay: 5000,
        appendToast: true,
        variant: "success",
        solid: true,
      });
      this.getRoutesActives();
    },
    changeStateofRoute(route) {
      const db = firebase.firestore();
      const a = db.collection("driverRoute").doc(route.id);
      this.$bvToast.toast("Ruta Realizada Correctamente!", {
        title: "Servicio Realizado",
        autoHideDelay: 5000,
        appendToast: true,
        variant: "success",
        solid: true,
      });
      a.update({
        servicePerformed: true,
      });
      this.getRoutesActives();
      this.getRoutesMade();
    },
  },
};
</script>

<style>
</style>