<template>
  <section class="map" ref="map"></section>
</template>
<script>
import { EventBus } from "@/EventBus";
export default {
  data() {
    return {
      map: null,
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
            origin: origin.address,
            destination: destination.address,
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

              this.createInfoWindowWith("Partida", origin);
              this.createInfoWindowWith("Destino", destination);
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
    /*EventBus.$on("routes-data", (routes) => {
      this.map = new google.maps.Map(this.$refs["map"], {
        center: new google.maps.LatLng(45.4215296, -75.6971931),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });
      routes.forEach(
        ({
          origin,
          origin2,
          origin3,
          destination,
          distance,
          duration,
          color,
        }) => {
          directionsService.route(
            {
              origin: origin.address,
              waypoints: [
                {
                  location: origin2.address,
                  stopover: false,
                },
                {
                  location: origin3.address,
                  stopover: false,
                },
              ],
              destination: destination.address,
              travelMode: "DRIVING",
            },
            (response, status) => {
              if (status === "OK") {
                const directionsRenderer = new google.maps.DirectionsRenderer({
                  suppressMarkers: true,
                  directions: response,
                  map: this.map,
                  polylineOptions: {
                    strokeColor: color,
                    strokeWeight: 2,
                  },
                });

                this.createInfoWindowWith(origin, "marker alternate", color);
                this.createInfoWindowWith(origin2, "marker alternate", color);
                this.createInfoWindowWith(origin3, "marker alternate", color);
                this.createInfoWindowWith(destination, "flag checkered", color);

                const overviewPath = response.routes[0].overview_path;
                console.log(overviewPath);
                const middleIndex = parseInt(overviewPath.length / 2);
                const middleLoc = overviewPath[middleIndex];

                const distanceDurationLabel = new google.maps.InfoWindow({
                  content: `<div style="background-color:${color};padding:5px;"><i class="icon car"></i> ${distance.text} - ${duration.text}</div>`,
                  position: new google.maps.LatLng(
                    middleLoc.lat(),
                    middleLoc.lng()
                  ),
                });
                distanceDurationLabel.open(this.map, null);

                this.createPolylineWith(
                  [
                    { lat: origin.lat, lng: origin.lng },
                    { lat: overviewPath[0].lat(), lng: overviewPath[0].lng() },
                  ],
                  color
                );
                this.createPolylineWith(
                  [
                    { lat: destination.lat, lng: destination.lng },
                    {
                      lat: overviewPath[overviewPath.length - 1].lat(),
                      lng: overviewPath[overviewPath.length - 1].lng(),
                    },
                  ],
                  color
                );
              }
            }
          );
        }
      );
    });*/
  },
  methods: {
    createInfoWindowWith(message, location) {
      const infoWindow = new google.maps.InfoWindow({
        content: `<div style="background-color:#06416d;padding:5px; color:white">${message} : ${location.address}</div>`,
        position: { lat: location.lat, lng: location.lng },
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
