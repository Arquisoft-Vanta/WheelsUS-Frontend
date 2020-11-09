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
import OriginDestination from "../components/OriginDestinationForm";
import { EventBus } from "@/EventBus.js";
import DirectionsMapView from "../components/DirectionsMapView.vue";
import Header from "../components/Header.vue";
import FooterwithBackground from "../components/FooterwithBackground.vue";
import firebase from "firebase";

export default {
  name: "PostService",
  data() {
    return {};
  },
  components: {
    OriginDestination,
    DirectionsMapView,
    Header,
    FooterwithBackground,
  },
  methods: {},
  mounted() {
    EventBus.$emit("passengerRoutes-data", this.routes);
  },
};
</script>

<style scoped>
.createservice {
  color: black;
  background-color: white;
  opacity: 90%;
  border-radius: 2%;
  /* margin: 10% 0 20% 0; */
}
.mapg {
  opacity: 100%;
  border-radius: 2%;
  margin: 0% 0 6% 5%;
}
</style>
