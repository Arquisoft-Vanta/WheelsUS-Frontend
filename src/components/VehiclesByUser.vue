<template>
  <div
    class="modal fade"
    id="modalVehicles"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalVehicles"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Mis Vehículos</h5>
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
          <div class="accordion" id="accordionExample">
            <div
              class="card"
              v-for="vehicle in listVehicles"
              :key="vehicle.idVehicle"
            >
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    :data-target="`#data${vehicle.idVehicle}`"
                    aria-expanded="true"
                    :aria-controls="`data${vehicle.idVehicle}`"
                    style="color: #06416d"
                  >
                    Nombre: {{ vehicle.vehicleLicenseplate }}
                  </button>
                </h2>
              </div>
              <div
                :id="`data${vehicle.idVehicle}`"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <div>{{ vehicle.vehicleLicenseplate }}</div>
                  <div class="row">
                    <div class="col">
                      <button
                        type="button"
                        class="btn btn-outline-dark btn-block button"
                        style="margin: 5% 0 5% 0"
                        @click="showPoint(route)"
                      >
                        Ver Dirección
                      </button>
                    </div>
                    <div class="col">
                      <button
                        type="button"
                        class="btn btn-outline-dark btn-block button"
                        @click="sendPoint(route)"
                        style="margin: 5% 0 5% 0"
                      >
                        {{ button }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import VehicleServiceClient from "../serviceClients/VehicleServiceClient";

export default {
  name: "VehiclesByUser",
  components: {
  },
  props: ['state'],
  data() {
    return {
      listVehicles: [],
      button: "",
    };
  },
  mounted() {
    this.nameButton();
    this.showVehicles();
  },
  methods: {
    showVehicles() {
      VehicleServiceClient.getVehicles((response) => {
        this.listVehicles = response;
        console.log(this.listVehicles);
      });
    },
    nameButton() {
      if (this.state == "Watch Direction") {
        this.button = "Eliminar Dirección";
      } else if (this.state == "Choose Direction") {
        this.button = "Escoger Dirección";
      }
    },
  },
};
</script>

<style>
</style>