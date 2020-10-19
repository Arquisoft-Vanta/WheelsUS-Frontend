<template>
  <div>
    <Header></Header>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="false"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Lista de Pasajeros Postulados
            </h5>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <RouteList />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Ordena el recorrido de tu ruta
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div>
                <draggable v-model="orderedRoutes" ghost-class="ghost">
                  <transition-group type="transition" name="flip-list">
                    <div
                      class="sortable"
                      :id="`${element.type + element.id}`"
                      v-for="element in orderedRoutes"
                      :key="`${element.type + element.id}`"
                    >
                      <strong
                        >{{ element.type }} pasajero {{ element.id }}:</strong
                      >
                      <strong>{{ element.address }}</strong>
                    </div>
                  </transition-group>
                </draggable>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col2 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-4">
            <div class="createservice card">
              <div class="card-body">
                <div class="form-inline" style="margin: 0 0 5% 0">
                  <input
                    id="placeoforigin"
                    class="form-control"
                    type="text"
                    placeholder="Lugar de Salida"
                    style="border: 0; background: #f1f1f1; width: 100%"
                    ref="origin"
                  />
                </div>
                <div class="form-inline" style="margin: 0 0 5% 0">
                  <input
                    id="placeofdeparture"
                    class="form-control"
                    type="text"
                    placeholder="Lugar de Llegada"
                    style="border: 0; background: #f1f1f1; width: 100%"
                    ref="destination"
                  />
                </div>
                <form>
                  <div class="form-group text-left">
                    <input
                      class="form-control"
                      type="date"
                      placeholder="Hora de Salida"
                      style="border: 0; background: #f1f1f1"
                    />
                  </div>
                  <div class="form-group text-left">
                    <input
                      class="form-control"
                      type="time"
                      placeholder="Hora de Salida"
                      style="border: 0; background: #f1f1f1"
                    />
                  </div>
                  <div class="row" style="margin: 0 0 8% 0">
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        style="border: 0; background: #f1f1f1"
                        placeholder="Valor"
                      />
                    </div>
                    <div class="col">
                      <select
                        id="inputState"
                        class="form-control"
                        style="border: 0; background: #f1f1f1"
                      >
                        <option selected>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                        <option>0</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary button"
                    @click="calculateButtonPressed"
                  >
                    Crear Servicio
                  </button>
                  <div style="margin: 2% 0 0 0">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      data-display="static"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Escoger Pasajeros
                    </button>
                  </div>
                                    <div style="margin: 2% 0 0 0">

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal2"
                  >
                    Ordenar Ruta
                  </button>
                                    </div>
                </form>
                <!--<OriginDestination />-->
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-8 mt-8">
            <DirectionsMapView />
          </div>
        </div>
      </div>
    </div>
    <footerwith-background></footerwith-background>
  </div>
</template>

<script>
//import OriginDestination from "../components/OriginDestinationForm";
import { EventBus } from "@/EventBus.js";
import RouteList from "../components/RouteList.vue";
import DirectionsMapView from "../components/DirectionsMapView.vue";
import Header from "../components/Header.vue";
import FooterwithBackground from "../components/FooterwithBackground.vue";
import axios from "axios";
import firebase from "firebase";
import Draggable from "vuedraggable";

export default {
  name: "CreateService",
  data() {
    return {
      orderedRoutes: [],
      route: {
        originDriver: {
          address: "",
          lat: 0,
          lng: 0,
        },
        originPassengers: {
          A: {
            address: "",
            lat: 0,
            lng: 0,
            type: "Origen",
            id: 1,
          },
          B: {
            address: "",
            lat: 0,
            lng: 0,
            type: "Origen",
            id: 2,
          },
          C: {
            address: "",
            lat: 0,
            lng: 0,
            type: "Origen",
            id: 3,
          },
          D: {
            address: "",
            lat: 0,
            lng: 0,
            type: "Origen",
            id: 4,
          },
        },
        destinationPassengers: {
          A: {
            address: "",
            lat: 0,
            lng: 0,
            type: "Destino",
            id: 1,
          },
          B: {
            address: "",
            lat: 0,
            lng: 0,
            type: "Destino",
            id: 2,
          },
          C: {
            address: "",
            lat: 0,
            lng: 0,
            type: "Destino",
            id: 3,
          },
          D: {
            address: "",
            lat: 0,
            lng: 0,
            type: "Destino",
            id: 4,
          },
        },
        destinationDriver: {
          address: "",
          lat: 0,
          lng: 0,
        },
        distance: Number,
        duration: Number,
        userid: "",
        passengers: {
          A: "",
          B: "",
          C: "",
          D: "",
        },
      },

      error: "",
    };
  },
  components: {
    //OriginDestination,
    RouteList,
    DirectionsMapView,
    Header,
    FooterwithBackground,
    Draggable,
  },
  mounted() {
    EventBus.$on("choosePassengerRoutes-data", (routes) => {
      let sumatoryDistance = 0;
      let sumatoryTime = 0;
      let letterchar = 65;
      routes.forEach(
        ({ origin, destination, distance, duration, userid, id }) => {
          let repeatDirectionOrigin = 0;
          let repeatDirectionDestination = 0;

          this.route.originPassengers[String.fromCharCode(letterchar)].address =
            origin.address;
          this.route.originPassengers[String.fromCharCode(letterchar)].lat =
            origin.lat;
          this.route.originPassengers[String.fromCharCode(letterchar)].lng =
            origin.lng;
          this.route.destinationPassengers[
            String.fromCharCode(letterchar)
          ].address = destination.address;
          this.route.destinationPassengers[
            String.fromCharCode(letterchar)
          ].lat = destination.lat;
          this.route.destinationPassengers[
            String.fromCharCode(letterchar)
          ].lng = destination.lng;
          sumatoryDistance = sumatoryDistance + distance.value;
          sumatoryTime = sumatoryTime + duration.value;
          this.orderedRoutes.forEach(({ address }) => {
            if (
              address ==
              this.route.originPassengers[String.fromCharCode(letterchar)]
                .address
            ) {
              repeatDirectionOrigin = repeatDirectionOrigin + 1;
            }
            if (
              address ==
              this.route.destinationPassengers[String.fromCharCode(letterchar)]
                .address
            ) {
              repeatDirectionDestination = repeatDirectionDestination + 1;
            }
          });
          if (repeatDirectionOrigin == 0) {
            this.orderedRoutes.push(
              this.route.originPassengers[String.fromCharCode(letterchar)]
            );
          }
          if (repeatDirectionDestination == 0) {
            this.orderedRoutes.push(
              this.route.destinationPassengers[String.fromCharCode(letterchar)]
            );
          }
          letterchar = letterchar + 1;
        }
      );
      this.route.distance = sumatoryDistance / 1000;
      this.route.duration = sumatoryTime / 60;
    });

    EventBus.$emit("passengerRoutes-data", this.routes);

    for (let ref in this.$refs) {
      const autocomplete = new google.maps.places.Autocomplete(
        this.$refs[ref],
        {
          bounds: new google.maps.LatLngBounds(
            new google.maps.LatLng(45.4215296, -75.6971931)
          ),
          componentRestrictions: { country: "co" },
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        this.route[ref].address = `${place.name}, ${place.vicinity}`;
        this.route[ref].lat = place.geometry.location.lat();
        this.route[ref].lng = place.geometry.location.lng();
      });
    }
    this.map = new google.maps.Map(this.$refs["map"], {
      center: new google.maps.LatLng(4.636973, -74.079335),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
  },
  methods: {
    showAllRoutesButtonPressed() {
      EventBus.$emit("routes-data", this.routes);
    },
    calculateButtonPressed() {
      this.createRoute(
        this.route.origin,
        this.route.origin2,
        this.route.origin3,
        this.route.destination
      );
    },
    saveRoute() {
      const db = firebase.firestore();
      db.collection("routes").doc().set(this.route);
    },
    createRoute(ori, ori2, ori3, dest) {
      const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=${ori.lat},${ori.lng}&destination=${dest.lat},${dest.lng}&key=AIzaSyAxm0QLs59dJ34JezS4XmSs75bHKrFUBz0`;
      const URL2 = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${ori.lat},${ori.lng}&destinations=${dest.lat},${dest.lng}&key=AIzaSyAxm0QLs59dJ34JezS4XmSs75bHKrFUBz0`;
      const URL3 = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${ori.lat},${ori.lng}%7C${ori2.lat},${ori2.lng}%7C${ori3.lat},${ori3.lng}&destinations=${dest.lat},${dest.lng}&key=AIzaSyAxm0QLs59dJ34JezS4XmSs75bHKrFUBz0`;
      console.log(URL);
      console.log(URL2);
      console.log(URL3);
      axios
        .get(URL2)
        .then((response) => {
          if (response.data.error_message) {
            this.error = response.data.error_message;
          } else {
            const elements = response.data.rows[0].elements;

            if (elements[0].status === "ZERO_RESULTS") {
              this.error = "No Results Found.";
            } else {
              this.route.distance = elements[0].distance;
              this.route.duration = elements[0].duration;
              this.route.color = this.getRandomColor();
              this.route.userid = "ojtinjacar@unal.edu.co";

              this.saveRoute();
            }
            this.spinner = false;
          }
        })
        .catch((error) => {
          console.log(error.message);
          this.error = error.message;
          this.spinner = false;
        });
    },
  },
};
</script>

<style scoped>
.createservice {
  color: black;
  background-color: white;
  opacity: 90%;
  border-radius: 2%;
  margin: 6% 0 20% 0;
}
.mapg {
  opacity: 100%;
  border-radius: 2%;
  margin: 5% 0 0% 0;
}
strong {
  display: inline-block;
}

.sortable {
  width: 100%;
  background: white;
  padding: 1em;
  cursor: move;
}
.flip-list-move {
  transition: transform 0.5s;
}
.ghost {
  border-left: 6px solid #06416d;
  box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.14);
  opacity: 0.7;
}

</style>