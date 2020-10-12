<template>
  <div>
    <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map" :prueba="prueba" />
    </template>
    <input
      id="placeofdeparture"
      class="form-control"
      type="text"
      placeholder="Lugar de Salida"
      style="border: 0; background: #f1f1f1"
    />
  </div>
</template>
<script>
import GoogleMapsApiLoader from "google-maps-api-loader";

export default {
  props: {
    mapConfig: Object,
    apiKey: String,
  },
  data() {
    return {
      google: null,
      map: null,
    };
  },
  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey,
    });
    this.google = googleMapApi;
    this.initializeMap();
    this.wow();
  },

  methods: {
    initializeMap() {
      //var position1 = { lat: 74.0817500, lng: 4.6097100 };
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
    },
    wow() {
       new this.google.maps.places.Autocomplete((document.getElementById("placeofdeparture")), {
        types: ['geocode'],
    })
    },
  },
};
</script>
<style scoped>
.google-map {
  width: 100%;
  min-height: 100%;
}
</style>
