<template>
  <section class="route-list-view">
    <div class="route-list-view-header">
      <select @change="sortRoute($event)">
        <option selected disabled>Sort</option>
        <optgroup label="Distance">
          <option value="distance-asc">short</option>
          <option value="distance-desc">long</option>
        </optgroup>
        <optgroup label="Duration">
          <option value="duration-asc">fast</option>
          <option value="duration-desc">slow</option>
        </optgroup>
      </select>
      <button
        class="ui button show-all"
        @click="showAllRoutesPassengerButtonPressed"
      >
        show all
      </button>
    </div>
    <div class="accordion" id="accordionExample">
      <div class="card" v-for="route in routes" :key="route.id">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              :data-target="`#${route.id}`"
              aria-expanded="true"
              :aria-controls="route.id"
            >
              {{ route.userid }}
            </button>
          </h2>
        </div>
        <div
          :id="route.id"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <div>
              <i class="marker alternate icon"></i>
              {{ route.origin.address }}
            </div>
            <div>
              <i class="flag checkered icon"></i>
              {{ route.destination.address }}
            </div>
            <div class="ui label small">{{ route.distance.text }}</div>
            <div class="ui label small">{{ route.duration.text }}</div>
            <button @click="routePassengerItemPressed(route)">Ver Ruta</button>
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
  components:{
  },
  data() {
    return {
      routes: [],
    };
  },
  created() {
    const db = firebase.firestore();
    db.collection("routesPassenger").onSnapshot((snap) => {
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
      db.collection("routesPassenger")
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
      EventBus.$emit("routesPassenger-data", this.routes);
    },
    routePassengerItemPressed(route) {
      EventBus.$emit("routesPassenger-data", [route]);
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