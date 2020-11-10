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
                  data-target="#exampleModal2"
                  @click="showDirections"
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
                      placeholder="Documento"
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
                      <option value="1" selected>
                        Universidad Nacional de Colombia
                      </option>
                    </select>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-6 mt-3 mb-3">
                    <a
                      v-on:click="editInputData"
                      type="button"
                      class="btn btn-outline-dark btn-block"
                    >
                      Editar
                    </a>
                  </div>
                  <div class="col-6 mt-3 mb-3">
                    <a type="button" class="btn btn-outline-primary btn-block">
                      Guardar
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
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
                          v-model="nameFavd"
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
                  @click="saveDirection"
                >
                  Guardar Dirección
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Mis Direcciones
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
                <div class="accordion" id="accordionExample">
                  <div
                    class="card"
                    v-for="route in listRoutes"
                    :key="route.idFavoriteDirection"
                  >
                    <div class="card-header" id="headingOne">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link btn-block text-left"
                          type="button"
                          data-toggle="collapse"
                          :data-target="`#data${route.idFavoriteDirection}`"
                          aria-expanded="true"
                          :aria-controls="`data${route.idFavoriteDirection}`"
                          style="color: #06416d"
                        >
                          Nombre: {{ route.nameFd }}
                        </button>
                      </h2>
                    </div>
                    <div
                      :id="`data${route.idFavoriteDirection}`"
                      class="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div>{{ route.favAddress }}</div>
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
                              @click="cancelPassengerItemPressed(route)"
                              style="margin: 5% 0 5% 0"
                            >
                              Eliminar Dirección
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <DirectionsMapView class="map" />
                </div>
              </div>
              <div class="modal-footer"></div>
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
import FavoriteServiceClient from "../serviceClients/FavoriteServiceCliente";
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
        userName: "",
        userDoc: "",
        userPhone: "",
        universityId: '',
        userMail: "",
        userAddress: "",
        password: "",
        registryDatetime: "",
        picture: "",
        vehicleModel: [],
        Rh: "",
      },
      newFavoritePoint: {
        favAddress: "",
        favLatitude: "",
        favLongitude: "",
        datetimeCreationFav: "",
        nameFd: "",
      },
      nameFavd: "",
      textoBotonEditar: "Editar",
      listRoutes: [],

      //Estado del botón que permite editar y guardar los cambios realizados a la información de un usuario
      estadoInput: false,
    };
  },
  props: {},
  mounted() {
    this.getUserDB();
    this.showDirections();
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
        this[ref].nameFd = this.nameFavd;
        this[ref].favAddress = `${place.name}, ${place.vicinity}`;
        this[ref].favLatitude = "" + place.geometry.location.lat();
        this[ref].favLongitude = "" + place.geometry.location.lng();
        this[ref].datetimeCreationFav = "2020-05-07@10:20:15";
        EventBus.$emit("generateMarker", this.newFavoritePoint);
      });
    }
  },
  methods: {
    getFormattedDate() {
      var date = new Date();
      var str =
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.toLocaleDateString("es-CO", { day: "2-digit" }) +
        "@" +
        ("0" + date.getHours()).slice(-2) +
        ":" +
        ("0" + date.getMinutes()).slice(-2) +
        ":" +
        ("0" + date.getSeconds()).slice(-2);
      return str;
    },
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
        this.user = data;
      });
    },
    updateUser() {
      UserSC.updateUser(this.user, () => {});
    },
    saveDirection() {
      this.newFavoritePoint.datetimeCreationFav = this.getFormattedDate();
      FavoriteServiceClient.addDirection(this.newFavoritePoint, (response) => {
        if (response === 201) {
          console.log("OK");
           this.$bvToast.toast("¡Dirección Favorita Almacenada Correctamente!", {
            title: "Dirección Almacenada",
            autoHideDelay: 2000,
            appendToast: true,
            variant: "success",
            solid: true,
          });
        } else {
          this.$bvToast.toast("Por favor verifique los datos.", {
          title: "Datos invalidos",
          autoHideDelay: 3000,
          appendToast: true,
          variant: "danger",
          solid: true,
        });
        }
      });
    },
    showDirections() {
      FavoriteServiceClient.getDirectionsByUser((response) => {
        this.listRoutes = response;
      });
    },
    showPoint(route) {
      EventBus.$emit("generateMarker", route);
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
