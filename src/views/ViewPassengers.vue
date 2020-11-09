<template>
  <div>
    <Header></Header>
    <div>
      <div class="container">
        <div class="row justify-content-between mb-5">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-4">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="card d-block w-100" alt="..."></div>
                  <div class="carousel-item">
                    <img src="" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
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
      orderedRoutesOfPassengers: [],
      routeDefinitive: [],
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
        distance: 0,
        duration: 0,
        userid: "",
        passengers: {
          A: "",
          B: "",
          C: "",
          D: "",
        },
        value: "",
        date: Date,
        time: "",
      },

      error: "",
    };
  },
  components: {
    RouteList,
    DirectionsMapView,
    Header,
    FooterwithBackground,
    Draggable,
  },
  mounted() {
    EventBus.$on("choosePassengerRoutes-data", (routes) => {
      /**
       *En esta función se traen los datos de los pasajeros seleccionados
       *por parte del conductor en el componente "Route List" y se guardan
       *en el objeto "route" para posteriormente enviar a Firebase
       */
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
          /**
           *Existen casos donde algunos pasajeros salen del mismo lugar.
           *Entonces, para practicidad por parte del conductor, solo se
           *guardan ubicaciones unicas en la variable "orderedRoutesOfPassengers"
           *para que cuando el conductor pueda ordenar la ruta, no le aparezca
           *una ubicacion dos veces repetidas.
           */
          this.orderedRoutesOfPassengers.forEach(({ address }) => {
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
            this.orderedRoutesOfPassengers.push(
              this.route.originPassengers[String.fromCharCode(letterchar)]
            );
          }
          if (repeatDirectionDestination == 0) {
            this.orderedRoutesOfPassengers.push(
              this.route.destinationPassengers[String.fromCharCode(letterchar)]
            );
          }
          letterchar = letterchar + 1;
        }
      );
      this.route.distance = sumatoryDistance / 1000;
      this.route.duration = sumatoryTime / 60;
      this.route.value = sumatoryValue;
    });

    EventBus.$emit("passengerRoutes-data", this.routes);
    /**
     *Esta parte del código, permite crear la opcion de Autocompletar
     *de Google en los inputs, para facilidad del conductor a la hora de
     *buscar su origen y destino.
     *Se limita la restricción para que solo salgan ubicaciones de Colombia.
     */
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
    /**
     *Esta función pinta el mapa de Google Maps
     */
    this.map = new google.maps.Map(this.$refs["map"], {
      center: new google.maps.LatLng(4.636973, -74.079335),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
  },
  methods: {
    /**
     * Esta función guarda el objeto "route" con todas las paradas y datos
     *  en la colección "driverRoute", de firebase.
     */
    saveRoute() {
      const db = firebase.firestore();
      db.collection("driverRoute").doc().set(this.route);
    },
    /**
     * Esta función, envia "routeDefinitive" al componente "DirectionsMapView",
     * para que pueda mostrar dinamicamente en el mapa el posible orden de recogida
     * y destino de cada pasajero.
     */
    sendPossibleRouteToMap() {
      while (this.routeDefinitive != 0) {
        this.routeDefinitive.pop();
      }
      this.routeDefinitive.push(this.route.originDriver);
      this.routeDefinitive.push(this.route.destinationDriver);
      this.routeDefinitive.push(this.orderedRoutesOfPassengers);
      EventBus.$emit("possibleRoute-data", this.routeDefinitive);
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
  /* margin: 6% 0 20% 0; */
}
.mapg {
  opacity: 100%;
  border-radius: 2%;
  /* margin: 5% 0 0% 0; */
}
strong {
  display: inline-block;
}

.sortable {
  width: 100%;
  background: white;
  padding: 1em;
  margin: 0 0 2% 0;
  cursor: move;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.14);
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
