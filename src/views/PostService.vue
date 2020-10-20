<template>
  <div>
    <Header></Header>
    
    <div>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col2 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-4">
            <div class="createservice card">
              <div class="card-body">
                <OriginDestination />
                
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
import OriginDestination from "../components/OriginDestinationForm";
import { EventBus } from "@/EventBus.js";
import DirectionsMapView from "../components/DirectionsMapView.vue";
import Header from "../components/Header.vue";
import FooterwithBackground from "../components/FooterwithBackground.vue";
import axios from "axios";
import firebase from "firebase";

export default {
  name: "PostService",
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
        distance: Number,
        duration: Number,
        userid: "",
        },

      error: "",
    };
  },
  components: {
    OriginDestination,
    DirectionsMapView,
    Header,
    FooterwithBackground,
  },
  methods: {
    
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
    createRoute(ori, dest) {
      const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=${ori.lat},${ori.lng}&destination=${dest.lat},${dest.lng}&key=AIzaSyA30Ngl0Ju8w5VkuHoTbqMFo3kCyPw3f8s`;
      const URL2 = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${ori.lat},${ori.lng}&destinations=${dest.lat},${dest.lng}&key=AIzaSyA30Ngl0Ju8w5VkuHoTbqMFo3kCyPw3f8s`;
      const URL3 = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${ori.lat},${ori.lng}%7C${ori2.lat},${ori2.lng}%7C${ori3.lat},${ori3.lng}&destinations=${dest.lat},${dest.lng}&key=AIzaSyA30Ngl0Ju8w5VkuHoTbqMFo3kCyPw3f8s`;
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
  mounted() {
    /*EventBus.$on("choosePassengerRoutes-data", (routes) => {
      console.log(routes);
      let sumatoryDistance = 0;
      let sumatoryTime = 0;
      let letterchar = 65;
      routes.forEach(({ origin, destination, distance, duration, userid }) => {
        (this.route.originPassengers[String.fromCharCode(letterchar)] = origin),
          (this.route.destinationPassengers[
            String.fromCharCode(letterchar)
          ] = destination),
          (sumatoryDistance = sumatoryDistance + distance.value),
          (sumatoryTime = sumatoryTime + duration.value);
        letterchar = letterchar + 1;
      });
      (this.route.distance = sumatoryDistance / 1000),
        (this.route.duration = sumatoryTime / 60);
      console.log(this.route);
    });*/
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
};
</script>

<style scoped>
.createservice {
  color: black;
  background-color: white;
  opacity: 90%;
  border-radius: 2%;
  margin: 10% 0 20% 0;
}
.mapg {
  opacity: 100%;
  border-radius: 2%;
  margin: 5% 0 0% 0;
}
</style>