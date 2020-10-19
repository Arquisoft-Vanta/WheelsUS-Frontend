<template>
  <section class="route-list-view">
    <div class="route-list-view-header">
      <div class="row">
        <div class="col">
          <select class="form-control" @change="sortRoute($event)">
            <option selected disabled>Ordenar</option>
            <optgroup label="Distancia">
              <option value="distance-asc">Corta</option>
              <option value="distance-desc">Larga</option>
            </optgroup>
            <optgroup label="Duracion">
              <option value="duration-asc">Mayor</option>
              <option value="duration-desc">Menor</option>
            </optgroup>
          </select>
        </div>
        <div class="col">
          <button
            type="button"
            class="btn btn-primary button"
            style="margin: 0 5% 0 0"
            @click="sendPassengerItemPressed()"
          >
            Confirmar Pasajeros
          </button>
        </div>
      </div>
    </div>
    <div class="accordion" id="accordionExample">
      <div class="card" v-for="route in routes" :key="route.id">
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
              Destino: {{ route.destination.address }}
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
            <div>Usuario: {{ route.userid }}</div>
            <div>Salida: {{ route.origin.address }}</div>
            <div>Distancia: {{ route.distance.text }}</div>
            <div>Tiempo aproximado: {{ route.duration.text }}</div>
            <div class="row">
              <div class="col">
                <button
                  type="button"
                  class="btn btn-primary button"
                  @click="choosePassengerItemPressed(route)"
                  style="margin: 5% 0 5% 0"
                >
                  Seleccionar Pasajero
                </button>
              </div>
              <div class="col">
                <button
                  type="button"
                  class="btn btn-primary button"
                  @click="cancelPassengerItemPressed(route)"
                  style="margin: 5% 0 5% 0"
                disabled>
                  Cancelar Pasajero
                </button>
              </div>
              <div class="col">
                <button
                  type="button"
                  class="btn btn-primary button"
                  style="margin: 5% 0 5% 0"
                  @click="routePassengerItemPressed(route)"
                >
                  Ver Ruta Pasajero
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";
import { EventBus } from "@/EventBus.js";
export default {
  components: {},
  data() {
    return {
      routes: [],
      routesSelected: [],
    };
  },
  created() {
    const db = firebase.firestore();
    db.collection("passengerRoutes").onSnapshot((snap) => {
      this.routes = [];
      snap.forEach((doc) => {
        let route = doc.data();
        route.id = doc.id;
        this.routes.push(route);
      });
    });
  },
  methods: {
    sortRoute(e) {
      const sortName = e.target.value.split("-")[0];
      const sortOrder = e.target.value.split("-")[1];

      const db = firebase.firestore();
      db.collection("passengerRoutes")
        .orderBy(sortName + ".value", sortOrder)
        .get()
        .then((snap) => {
          this.routes = [];
          snap.forEach((doc) => {
            let route = doc.data();
            route.id = doc.id;
            this.routes.push(route);
          });
        });
    },
    routeItemPressed(route) {
      EventBus.$emit("routes-data", [route]);
    },
    showAllRoutesButtonPressed() {
      EventBus.$emit("routes-data", this.routes);
    },
    showAllRoutesPassengerButtonPressed() {
      EventBus.$emit("passengerRoutes-data", this.routes);
    },
    routePassengerItemPressed(route) {
      EventBus.$emit("passengerRoutes-data", [route]);
    },
    sendPassengerItemPressed() {
      EventBus.$emit("choosePassengerRoutes-data", this.routesSelected);
    },
    choosePassengerItemPressed(route) {
      this.routesSelected.push(route);
},
    cancelPassengerItemPressed(route) {
      this.routesSelected.pop(route);
    },
  },
};
</script>

<style scoped>
.route-list-view-header {
  padding: 10px;
}

.item {
  padding: 10px;
  cursor: pointer;
}

.item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.show-all {
  padding: 4px 10px;
}
</style>