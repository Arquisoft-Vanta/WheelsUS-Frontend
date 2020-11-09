<template>
  <div>
    <FooterwithBackground></FooterwithBackground>
    <div>
      <div class="container">
        <div class="row align-items-start h-100">
          <div
            class="col-12 pl-md-5 pr-md-5 pl-lg-0 pr-lg-0 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-5 mb-5"
          >
            <div class="datosusuario card pt-3">
              <img
                src="../assets/person.png"
                class="img-thumbnail align-self-center h-25"
                alt=" Imagen de perfil"
              />
              <div class="card-body">
                <h5 class="card-title pt-3">Usuario</h5>
                <a
                  class="btn btn-outline-dark btn-block"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Añadir dirección
                </a>
                <a
                  class="btn btn-outline-dark btn-block"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Ver direcciones
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-12 pl-md-5 pr-md-5 col-sm-12 col-md-12 col-lg-9 col-xl-9 mt-lg-5 mt-0 mb-5"
          >
            <div class="datosvehiculo card card-body mb-5">
              <form>
                <h4 class="mb-3">Tu información</h4>

                <div class="form-row">
                  <div class="col-md-8 mb-4">
                    <label for="validationDefault01">Nombre</label>
                    <input
                      v-model="user.userName"
                      type="text"
                      class="form-control form-control-sm text-center"
                      id="validationDefault01"
                      placeholder="Nombres completos"
                      readonly
                    />
                  </div>
                  <div class="col-md-4 mb-2">
                    <label for="validationDefault02">Documento</label>
                    <input
                      v-model="user.userDoc"
                      type="text"
                      class="form-control form-control-sm text-center"
                      id="validationDefault02"
                      placeholder="Apellidos completos"
                      readonly
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-3 mb-3">
                    <label for="validationDefault07">Rh</label>
                    <input
                      v-model="user.Rh"
                      type="text"
                      class="form-control form-control-sm text-center"
                      id="validationDefault03"
                      placeholder="N° de documento"
                      readonly
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="validationDefault04">Dirección</label>
                    <input
                      v-model="user.userAddress"
                      type="text"
                      class="form-control form-control-sm text-center"
                      id="validationDefault04"
                      placeholder="Dirección"
                      readonly
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="validationDefault05">Teléfono</label>
                    <input
                      v-model="user.userPhone"
                      type="text"
                      class="form-control form-control-sm text-center"
                      id="validationDefault05"
                      placeholder="N° de teléfono"
                      readonly
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6 mb-3">
                    <label for="validationDefault06">Correo</label>
                    <input
                      v-model="user.userMail"
                      type="text"
                      class="form-control form-control-sm text-center"
                      id="validationDefault06"
                      placeholder="Correo electronico"
                      readonly
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="validationDefault04">Universidad</label>
                    <select
                      class="form-control form-control-sm"
                      id="inlineFormCustomSelect"
                      disabled
                      v-model="user.universityId"
                    >
                      <option selected></option>
                      <option value="1">
                        Universidad Nacional de Colombia
                      </option>
                    </select>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-12 mt-3 mb-3">
                    <a
                      v-on:click="getUserDB"
                      type="button"
                      class="btn btn-outline-dark btn-block"
                    >
                      {{ textoBotonEditar }}
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Añadir Dirección
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
                <div class="row justify-content-md-center">
                  <div class="col col-md-auto">
                    <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1"
                          >¿Cómo quieres llamar a tu dirección favorita?</label
                        >
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Ejemplo: Mi universidad"
                          v-model="newFavoritePoint.name"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1"
                          >Dirección según google</label
                        >
                        <input
                          class="form-control newFavoritePoint"
                          type="text"
                          placeholder="Ejemplo: Cra 45 #26-85"
                          ref="newFavoritePoint"
                          id="pac-input "
                        />
                      </div>
                    </form>
                    <DirectionsMapView class="map" />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  v-on:click="saveDirection"
                >
                  Guardar Dirección
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Header></Header>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";
import DirectionsMapView from "../components/DirectionsMapView.vue";
import Header from "../components/Header";
import FooterwithBackground from "../components/FooterwithBackground.vue";
import Foto from "@/assets/Enfermeria22.png";
import UserSC from "../serviceClients/UserServiceClient";

export default {
  name: "Perfil",
  components: {
    Header,
    FooterwithBackground,
    DirectionsMapView,
  },
  data() {
    return {
      Foto: Foto,
      user: {
        userName: "Sebastian Moreno",
        userDoc: "1013681625",
        userPhone: "3134340058",
        universityId: 1,
        userMail: "sebastian@gmail.com",
        userAddress: "Calle siempre viva 123",
        password: "pas123456",
        registryDatetime: "2020-10-04@11:59:59",
        picture: "imagen.jpg",
        vehicleModel: [],
        Rh: "O+",
      },
      newFavoritePoint: {
        address: "",
        lat: 0,
        lng: 0,
        name: "",
      },
      textoBotonEditar: "Editar",

      //Estado del botón que permite editar y guardar los cambios realizados a la información de un usuario
      estadoInput: true,
    };
  },
  props: {},
  mounted() {
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
        this[ref].address = `${place.name}, ${place.vicinity}`;
        this[ref].lat = place.geometry.location.lat();
        this[ref].lng = place.geometry.location.lng();
        console.log(this.newFavoritePoint);
        EventBus.$emit("generateMarker", this.newFavoritePoint);
      });
    }
  },
  methods: {
    editInputData() {
      this.estadoInput = document.getElementById(
        "validationDefault01"
      ).readOnly;

      this.estadoInput = !this.estadoInput;

      document.getElementById(
        "validationDefault01"
      ).readOnly = this.estadoInput;
      document.getElementById(
        "validationDefault02"
      ).readOnly = this.estadoInput;
      document.getElementById(
        "validationDefault03"
      ).readOnly = this.estadoInput;
      document.getElementById(
        "validationDefault04"
      ).readOnly = this.estadoInput;
      document.getElementById(
        "validationDefault05"
      ).readOnly = this.estadoInput;
      document.getElementById(
        "validationDefault06"
      ).readOnly = this.estadoInput;
      document.getElementById(
        "validationDefault07"
      ).disabled = this.estadoInput;

      this.estadoInput
        ? (this.textoBotonEditar = "Editar")
        : (this.textoBotonEditar = "Guardar");
    },
    createUserDB() {
      UserSC.createUser(this.user, (response) => {
        console.log("Usuario creado " + response.status);
      });
    },
    getUserDB() {
      UserSC.getUser((data) => {
        console.log(data);
      });
    },
    updateUser() {},
    saveDirection() {
      console.log(this.newFavoritePoint);
    },
  },
};
</script>

<style scoped>
.datosvehiculo {
  margin: 4% 0 0 0;
  opacity: 90%;
}

.form-control {
  background: #f1f1f1;
  border: 0;
}
.datosusuario {
  opacity: 95%;
}

.container {
  height: 85vh;
}
.map {
  margin: 0 0 -4% 0;
  height: 250px !important;
}
</style>
