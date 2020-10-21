<template>
  <section class="map" ref="map"></section>
</template>
<script>
import { EventBus } from "@/EventBus";
export default {
  data() {
    return {
      map: null,
      waypoints: [],
    };
  },
  mounted() {
    const directionsService = new google.maps.DirectionsService();
    EventBus.$on("passengerRoutes-data", (routes) => {
      this.map = new google.maps.Map(this.$refs["map"], {
        center: new google.maps.LatLng(4.636973, -74.079335),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });
      routes.forEach(({ origin, destination, distance, duration }) => {
        directionsService.route(
          {
            origin: { lat: origin.lat, lng: origin.lng },
            destination: { lat: destination.lat, lng: destination.lng },
            travelMode: "DRIVING",
          },
          (response, status) => {
            if (status === "OK") {
              new google.maps.DirectionsRenderer({
                suppressMarkers: true,
                directions: response,
                map: this.map,
                polylineOptions: {
                  strokeColor: "#06416d",
                  strokeWeight: 2,
                },
              });

              this.createInfoWindowWith("Partida", origin.address,origin.lat,origin.lng);
              this.createInfoWindowWith("Destino", destination.address,destination.lat,destination.lng);
              const overviewPath = response.routes[0].overview_path;
              const middleIndex = parseInt(overviewPath.length / 2);
              const middleLoc = overviewPath[middleIndex];

              const distanceDurationLabel = new google.maps.InfoWindow({
                content: `<div style="background-color:#06416d;padding:5px; color:white;">${distance.text} - ${duration.text}</div>`,
                position: new google.maps.LatLng(
                  middleLoc.lat(),
                  middleLoc.lng()
                ),
              });
              distanceDurationLabel.open(this.map, null);

              this.createPolylineWith([
                { lat: origin.lat, lng: origin.lng },
                { lat: overviewPath[0].lat(), lng: overviewPath[0].lng() },
              ]);
              this.createPolylineWith([
                { lat: destination.lat, lng: destination.lng },
                {
                  lat: overviewPath[overviewPath.length - 1].lat(),
                  lng: overviewPath[overviewPath.length - 1].lng(),
                },
              ]);
              new google.maps.Marker({
                position: { lat: origin.lat, lng: origin.lng },
                map: this.map,
                icon: {
                  path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                  strokeColor: "#06416d",
                  scale: 3,
                },
              });
              new google.maps.Marker({
                position: { lat: destination.lat, lng: destination.lng },
                map: this.map,
                icon: {
                  path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                  strokeColor: "#06416d",
                  scale: 3,
                },
              });
            }
          }
        );
      });
    });

    EventBus.$on("possibleRoute-data", (routes) => {
      this.waypoints = [];
      this.map = new google.maps.Map(this.$refs["map"], {
        center: new google.maps.LatLng(4.636973, -74.079335),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });

      routes[2].forEach(({ address, lat, lng }) => {
        let waypoint = { location: { lat: lat, lng: lng }, stopover: false };
        this.waypoints.push(waypoint);
        this.createInfoWindowWith("Parada", address, lat, lng);
      });
      console.log(this.waypoints);

      directionsService.route(
        {
          origin: { lat: routes[0].lat, lng: routes[0].lng },
          waypoints: this.waypoints,
          destination: { lat: routes[1].lat, lng: routes[1].lng },
          travelMode: "DRIVING",
        },
        (response, status) => {
          if (status === "OK") {
            new google.maps.DirectionsRenderer({
              suppressMarkers: true,
              directions: response,
              map: this.map,
              polylineOptions: {
                strokeColor: "#06416d",
                strokeWeight: 2,
              },
            });

            this.createInfoWindowWith(
              "Partida",
              routes[0].address,
              routes[0].lat,
              routes[0].lng
            );
            this.createInfoWindowWith(
              "Destino",
              routes[1].address,
              routes[1].lat,
              routes[1].lng
            );
          }
        }
      );
    });
  },
  methods: {
    createInfoWindowWith(message, address, lat, lng) {
      const infoWindow = new google.maps.InfoWindow({
        content: `<div style="background-color:#06416d;padding:5px; color:white">${message} : ${address}</div>`,
        position: { lat: lat, lng: lng },
      });

      infoWindow.open(this.map, null);
    },
    createPolylineWith(path) {
      new google.maps.Polyline({
        path: path,
        strokeColor: "#06416d",
        strokeOpacity: 1,
        strokeWeight: 2,
        map: this.map,
      });
    },
  },
};
</script>  
<style>
.map {
  width: 100%;
  height: 450px !important;
  margin: 5% 0 15% 0;
}

.gm-style-iw button {
  display: none !important;
}

.gm-style .gm-style-iw-c {
  padding: 0px !important;
}

.gm-style-iw-d {
  overflow: hidden !important;
}
</style>
