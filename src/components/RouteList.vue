<template>
  <div>
    <section class="route-list-view">
      <div class="route-list-view-header">
        <div class="row">
          <div class="col">
            <select
              class="form-control"
              style="border: 0; background: #f1f1f1"
              @change="sortRoute($event)"
            >
              <option selected disabled>Ordenar</option>
              <optgroup label="Distancia">
                <option value="distance-asc">Corta</option>
                <option value="distance-desc">Larga</option>
              </optgroup>
              <optgroup label="Duracion">
                <option value="duration-asc">Mayor</option>
                <option value="duration-desc">Menor</option>
              </optgroup>
              <optgroup label="Fecha">
                <option value="date-asc">Fecha</option>
              </optgroup>
            </select>
          </div>
          <div class="col">
            <select
              id="inputState2"
              class="form-control"
              style="border: 0; background: #f1f1f1"
              v-model="selected"
            >
              <option disabled value="">Número de Pasajeros</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
              <option>0</option>
            </select>
          </div>
        </div>
        <div id="filter" style="display: none">
          <div class="row">
            <div class="col">
              <select
                id="inputState3"
                class="form-control"
                style="border: 0; background: #f1f1f1; margin: 5% 0 0 0"
                @change="sortRouteByDate($event)"
              >
                <option disabled value="" selected>Seleccione fecha</option>
                <option v-for="dat in date" :key="dat" :value="dat">
                  {{ dat }}
                </option>
              </select>
            </div>
            <div class="col">
              <select
                id="inputState4"
                class="form-control"
                style="border: 0; background: #f1f1f1; margin: 5% 0 0 0"
                @change="sortRouteByHour($event)"
              >
                <option disabled value="" selected>Seleccione hora</option>
                <option v-for="hour in hours" :key="hour" :value="hour">
                  {{ hour }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <button
              type="button"
              class="btn btn-outline-dark btn-block button"
              style="margin: 5% 0 0 0"
              @click="sendPassengerItemPressed()"
            >
              Confirmar Pasajeros
            </button>
          </div>
        </div>
      </div>
      <div class="accordion" id="accordionExample56">
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
            data-parent="#accordionExample56"
          >
            <div class="card-body">
              <div>Usuario: {{ route.userid }}</div>
              <div>Salida: {{ route.origin.address }}</div>
              <div>Distancia: {{ route.distance.text }}</div>
              <div>Tiempo aproximado: {{ route.duration.text }}</div>
              <div>Día de Salida: {{ route.date }}</div>
              <div>Hora de Salida: {{ route.time }}</div>
              <div class="row">
                <div class="col">
                  <button
                    type="button"
                    class="btn btn-outline-dark btn-block button"
                    @click="choosePassengerItemPressed(route)"
                    style="margin: 5% 0 5% 0"
                    data-toggle="modal"
                    data-target="#modalConfirmation"
                  >
                    Seleccionar Pasajero
                  </button>
                </div>
                <div class="col">
                  <button
                    type="button"
                    class="btn btn-outline-dark btn-block button"
                    @click="cancelPassengerItemPressed(route)"
                    style="margin: 5% 0 5% 0"
                  >
                    Cancelar Pasajero
                  </button>
                </div>
                <div class="col">
                  <button
                    type="button"
                    class="btn btn-outline-dark btn-block button"
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
  </div>
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
      selected: "",
      quotaMessage: "",
      confirmed: "",
      date: [],
      hours: [],
      datefilter: "",
      hoursfilter: "",
    };
  },
  created() {
    const db = firebase.firestore();
    db.collection("passengerRoutes").onSnapshot((snap) => {
      this.routes = [];
      snap.forEach((doc) => {
        let route = doc.data();
        route.id = doc.id;
        if (this.date.indexOf(route.date) === -1) {
          this.date.push(route.date);
        }
        this.routes.push(route);
      });
    });
  },
  methods: {
    /**
     * Esta función, ordena a los pasajeros por distancia de origen a destino
     * o por tiempo de duracion en el servicio.
     * Esta función se basó en el curso: https://www.udemy.com/course/vuejs-google-maps-api-for-beginners/
     */
    sortRoute(e) {
      const sortName = e.target.value.split("-")[0];
      const sortOrder = e.target.value.split("-")[1];
      var x = document.getElementById("filter");
      const db = firebase.firestore();
      if (sortName === "duration" || sortName === "distance") {
        x.style.display = "none";
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
      } else {
        x.style.display = "block";
      }
    },
    sortRouteByDate(e) {
      this.datefilter = e.target.value;
      const db = firebase.firestore();
      db.collection("passengerRoutes")
        .where("date", "==", this.datefilter)
        .get()
        .then((snap) => {
          this.routes = [];
          this.hours = [];
          snap.forEach((doc) => {
            let route = doc.data();
            route.id = doc.id;
            this.routes.push(route);
            if (this.hours.indexOf(route.time) === -1) {
              this.hours.push(route.time);
            }
          });
        });
    },
    sortRouteByHour(e) {
      this.hourfilter = e.target.value;
      console.log(this.datefilter);
      const db = firebase.firestore();
      db.collection("passengerRoutes")
        .where("date", "==", this.datefilter)
        .where("time", "==", this.hourfilter)
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
    /**
     * Esta función enviar la ruta del pasajero al componente
     * "DirectionsMapView" para pintar la ruta del pasajero en el mapa.
     */
    routePassengerItemPressed(route) {
      EventBus.$emit("passengerRoutes-data", [route]);
    },
    /**
     * Esta función, envia la lista de pasajeros a llevar al componente "Create Service"
     */
    sendPassengerItemPressed() {
      EventBus.$emit("choosePassengerRoutes-data", this.routesSelected);
      alert(
        "Los pasajeros han sido confirmados, por favor, dirígete a ordenar la ruta."
      );
    },
    /**
     * Esta función, avisa al conductor cuando ha seleccionado a un pasajero
     * Y actualiza el numero de pasajero para completar su servicio.
     */
    choosePassengerItemPressed(route) {
      if (this.selected === "") {
        alert("Primero escoja el número de pasajeros que desea llevar");
      } else {
        this.selected = this.selected - 1;
        if (this.selected == 0) {
          this.routesSelected.push(route);
          alert(
            " Pasajero Seleccionado. \n Cupo completado, por favor confirme los pasajeros"
          );
        } else if (this.selected < 0) {
          this.selected = 0;
          alert(
            " Operación fallida. \n No puede ingresar más pasajeros, confirme pasajeros o cancele alguno."
          );
        } else {
          this.routesSelected.push(route);
          alert(" Pasajero Seleccionado. \n Número de cupos: " + this.selected);
        }
      }
    },
    cancelPassengerItemPressed(route) {
      var count = 0;
      for (let index = 0; index < this.routesSelected.length; index++) {
        if (route === this.routesSelected[index]) {
          this.routesSelected.splice(index, 1);
          count++;
          alert("Usuario cancelado correctamente.");
          this.selected = this.selected + 1;
        }
      }
      if (count == 0) {
        alert("Este pasajero no se encuentra en la lista.");
      }
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
