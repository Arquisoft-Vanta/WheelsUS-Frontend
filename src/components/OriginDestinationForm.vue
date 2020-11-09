<template>
  <section class="origin-destination-form">    
    <div class="form">
      <h4>Postula tu ruta</h4>
      <div v-show="error">{{ error }}</div>
      <div class="four fields">
        <div class="field">
          <div>
            <input
              v-model="origin"
              type="text"
              placeholder="Origen"
              ref="origin"
              style="width: 100%; margin: 5% 0% 5% 0%"
              class="form-control"
              required
            />
          </div>
        </div>
        <div class="field">
          <div>
            <input
              v-model="destination"
              type="text"
              placeholder="Destino"
              ref="destination"
              style="width: 100%; margin: 5% 0% 5% 0%"
              class="form-control"
              required
            />
          </div>
        </div>
        <div class="field">
          <div>
            <input
              v-model="route.time"
              type="time"
              placeholder="Tiempo"
              ref="time"
              style="width: 100%; margin: 5% 0% 5% 0%"
              class="form-control"
              required
            />
          </div>
        </div>
        <div class="field">
          <div>
            <input
              v-model="route.date"
              type="date"
              placeholder="Fecha"
              ref="date"
              style="width: 100%; margin: 5% 0% 5% 0%"
              class="form-control"
              required
            />
          </div>
        </div>
        <button
          class="btn btn-outline-dark btn-block button"
          @click="calculateButtonPressed"
          style="margin: 10% 0% -2% 0%"
        >
          Postular ruta
        </button>
        <button
          class="btn btn-outline-dark btn-block button"
          @click="saveRoute"
          style="margin: 10% 0% -2% 0%"
          data-toggle="modal"
        >
          Guardar ruta
        </button>
        
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
import { EventBus } from "@/EventBus.js";
import DirectionsMapViewVue from './DirectionsMapView.vue';

export default {
  data() {
    return {
      route: {
        origin: {
          address: "",
          lat: 0,
          lng: 0,
        },
        destination: {
          address: "",
          lat: 0,
          lng: 0,
        },
        time: "",
        date: Date,
        distance: {},
        duration: {},
        userid: "",
      },
      error: "",
    };
  },

  mounted() {
    for (let ref in this.$refs) {
      const autocomplete = new google.maps.places.Autocomplete(
        this.$refs[ref],
        {
          bounds: new google.maps.LatLngBounds(
            new google.maps.LatLng(45.4215296, -75.6971931)
          ),
          componentRestrictions: { country: "co" },
          //types: ["address"],
        }
      );
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        this.route[ref].address = `${place.name}, ${place.vicinity}`;
        this.route[ref].lat = place.geometry.location.lat();
        this.route[ref].lng = place.geometry.location.lng();
      });
    }
  },
  methods: {
    calculateButtonPressed() {
      const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${this.route.origin.lat},${this.route.origin.lng}&destinations=${this.route.destination.lat},${this.route.destination.lng}&key=AIzaSyAxm0QLs59dJ34JezS4XmSs75bHKrFUBz0`;
      axios
        .get(URL)
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
              this.route.userid = "fsduenasc@unal.edu.co";       
            }
          }
        })
        .catch((error) => {
          console.log(error.message);
          this.error = error.message;
        });
      EventBus.$emit("passengerRoutes-data", [this.route]);
    },
    saveRoute() {
      const db = firebase.firestore();
      db.collection("passengerRoutes").doc().set(this.route);
      this.$bvToast.toast("¡Ruta Almacenada Correctamente!", {
            title: "Ruta Almacenada",
            autoHideDelay: 2000,
            appendToast: true,
            variant: "success",
            solid: true,
          });

    },
    
    
  },
};
</script>

<style scoped>
.origin-destination-form {
  position: relative;
  z-index: 1;
  max-width: 610px;
  margin: 10px;
}
</style>
