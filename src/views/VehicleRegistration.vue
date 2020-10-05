<template>
  <Header></Header>
  <div>
    <div class="modal" id="myModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ modalaviso }}</h5>
            <button
              id="w-change-close"
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-footer">
            <button
              id="w-change-close1"
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 mt-5">
          <div class="datosvehiculo card">
            <div class="card-body">
              <form class="needs-validation" novalidate>
                <div class="form-row">
                  <div class="col-md-3 mb-3">
                    <p for="validationDefaultplaca" class="text-left">Matricula</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefaultplaca"
                      :value="vehicle.vehicleLicenseplate"
                      disabled
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefaultmarca">Marca</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefaultmarca"
                      :value="vehicle.vehicleBrand"
                      disabled
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault01">No de pasajeros</p>
                    <select class="custom-select" required>
                      <option :value="vehicle.vehicleCapacity">{{ vehicle.vehicleCapacity }}</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefaultservicio">Tipo de Servicio</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefaultservicio"
                      :value="vehicle.vehicleServiceType"
                      disabled
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-3 mb-3">
                    <p for="validationDefaultlinea">Linea</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefaultlinea"
                      :value="vehicle.vehicleYear"
                      disabled
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefaultcarroceria">Tipo de Carroceria</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefaultcarroceria"
                      :value="vehicle.vehicleBody"
                      disabled
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefaultfecha">Fecha Vencimiento SOAT</p>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      id="validationDefaultfecha"
                      disabled
                      :value="vehicle.vehicleSoatExpiration"
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefaultclasevehiculo" class="text-left">
                      Tipo de Vehículo
                    </p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefaultclasevehiculo"
                      :value="vehicle.vehicleType"
                      disabled
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-3 mb-3">
                    <p for="validationDefaultmodelo">Modelo</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefaultmodelo"
                      :value="vehicle.vehicleModel"
                      disabled
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefaultcilindraje">Cilindraje</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefaultcilindraje"
                      :value="vehicle.vehicleEngine"
                      disabled
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefaultcolor">Color</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefaultcolor"
                      :value="vehicle.vehicleColor"
                      disabled
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefaultcombustible">
                      Tipo de combustible
                    </p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefaultcombustible"
                      :value="vehicle.vehicleGasType"
                      disabled
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-12 mb-3">
                    <textarea
                      v-model="DatosRunt"
                      class="form-control"
                      id="validationTextarea"
                      placeholder="Por favor, copie la información proporcionada por el RUNT"
                      required
                    ></textarea>
                  </div>
                  <div class="col-12 mb-3">
                    <p for="validationDefault01"></p>
                    <a
                      href="https://www.runt.com.co/consultaCiudadana/#/consultaVehiculo"
                      target="_blank"
                      type="button"
                      class="btn btn-outline-light text-center"
                      style="
                        margin: 0 0 2% 0;
                        border-color: #06416d;
                        color: #06416d;
                      "
                    >
                      Ingresar a RUNT
                    </a>
                  </div>

                  <div class="col-12 mb-3" style="margin: -2% 0 0 0">
                    <a
                      @click="datosRUNT"
                      target="_blank"
                      type="button"
                      class="btn btn-outline-light text-center"
                      style="
                        margin: 0 0 -3% 0;
                        border-color: #06416d;
                        color: #06416d;
                      "
                    >
                      Validar información de RUNT
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col1 col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mt-5">
          <img
            :src="Foto"
            alt="Foto del vehículo"
            class="img-thumbnail"
            style="margin: 0 0 3% 0; width: 220px; height: 150px"
          />
          <div class="card" style="margin: 0 0 20% 0">
            <div class="container">
              <div>
                <form>
                  <div class="form-group">
                    <label
                      for="exampleFormControlFile1"
                      style="
                        margin: 3% 0 3% 0;
                        border-color: #06416d;
                        color: #06416d;
                      "
                      >Foto del vehículo</label
                    >
                    <input
                      type="file"
                      class="form-control-file"
                      id="exampleFormControlFile1"
                    />
                  </div>
                </form>
              </div>
              <div>
                <a
                  @click="habilitarCampos"
                  type="button"
                  class="btn btn-outline-light"
                  style="
                    margin: -2% 0 2% 0;
                    border-color: #06416d;
                    color: #06416d;
                  "
                >
                  Editar Datos Vehículo
                </a>
              </div>
              <div>
                <a
                  @click="overlay"
                  type="button"
                  class="btn btn-outline-light"
                  style="
                    margin: 0 0 2% 0;
                    border-color: #06416d;
                    color: #06416d;
                  "
                >
                  Eliminar Vehículo
                </a>
              </div>

              <a
                @click="guardarVehiculo"
                type="button"
                class="btn btn-outline-light"
                style="margin: 0 0 2% 0; border-color: #06416d; color: #06416d"
                id="w-change-location"
                data-toggle="modal"
                data-target="#locModal"
              >
                Guardar vehículo
              </a>
              <div>
                <button
                  type="button"
                  class="btn btn-light"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-display="static"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style="margin: 0 0 3% 0"
                >
                  <img
                    class="person"
                    src="~@/assets/help.png"
                    width="40"
                    height="40"
                  />
                </button>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="false"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          ¿Cómo Ingresar la Información del vehículo?
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
                        <h5 class="text-left">
                          Para ingresar los datos del vehículo se tienen dos
                          opciones:
                        </h5>
                        <p class="textoayuda">
                          1. En dado caso que no se conozcan todos los datos del
                          vehículo, se debe ingresar a través del botón
                          "Ingresar a RUNT". Luego, el usuario debe ingresar la
                          placa del vehículo y la cédula del propietario del
                          mismo, como se muestra en la imagen.
                        </p>
                        <p class="textoayuda">
                          Una vez en la página del RUNT se debe presionar sobre
                          las pestañas "Datos Técnicos del Vehículo" y "Poliza
                          SOAT", posteriormente presionar las teclas "Ctrl + A"
                          esto permitirá seleccionar toda la información de la
                          pantalla y finalmente copiar dicho contenido. Después,
                          se pega esta información en el área de texto y se
                          presiona la opción "Validar información de RUNT".
                          Finalmente se selecciona una foto y se presiona el
                          botón "Guardar Vehículo".
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterwithBackground></FooterwithBackground>
</template>

<script>
import FooterwithBackground from "../components/FooterwithBackground.vue";
import Header from "../components/Header.vue";

import Foto from "@/assets/car.jpg";

export default {
  name: "RegistrarVehiculo",
  components: {
    FooterwithBackground,
    Header,
  },
  data: function () {
    return {
      showModal: false,
      Foto: Foto,

      DatosRunt: "",
      modalaviso: "",

      Estado: "",

      vehicle: {
        idVehicle: 7,
        vehicleOwner: 1,
        vehicleLicenseplate: "ABC123",
        vehicleType: 2,
        vehicleModel: "Sedan",
        vehicleYear: 2010,
        vehicleColor: "Azul",
        vehicleRegistryDatetime: "2020-09-30@10:11:30",
        vehiclePicture: "imagen",
        vehicleCapacity: 3,
        vehicleBrand: "Renault",
        vehicleServiceType: "Particular",
        vehicleBody: "Camioneta",
        vehicleSoatExpiration: "2021-10-04",
        vehicleEngine: 1000,
        vehicleGasType: "Diesel",
        userModel: null,
      },
    };
  },
  methods: {
    datosRUNT() {
      var datos = this.DatosRunt.split(
        "\n"
      ); /*Separa la información por saltos de línea */
      for (var dato of datos) {
        /*Realiza un recorrido por todas las líneas buscando*/
        if (dato.includes("PLACA DEL VEHÍCULO")) {
          /*la información correspondiente para llenar los campos*/
          var lineaplaca = dato.split(":"); /*de texto.*/
          this.vehicle.vehicleLicenseplate = lineaplaca[1];
        } else if (dato.includes("MARCA:")) {
          var lineamarca = dato.split(":");
          this.vehicle.vehicleBrand = lineamarca[1].replace("LÍNEA", "");
          this.vehicle.vehicleYear = lineamarca[2];
        } else if (dato.includes("MODELO:")) {
          var lineamodelo = dato.split(":");
          this.vehicle.vehicleModel = lineamodelo[1].replace("COLOR", "");
          this.vehicle.vehicleColor = lineamodelo[2];
        } else if (dato.includes("ESTADO DEL VEHÍCULO")) {
          var lineaestado = dato.split(":");
          this.Estado = lineaestado[2];
        } else if (dato.includes("TIPO DE SERVICIO")) {
          var lineatipo = dato.split(":");
          this.vehicle.vehicleServiceType = lineatipo[1].replace("CLASE DE VEHÍCULO", "");
          this.vehicle.vehicleType = lineatipo[2];
        } else if (dato.includes("CILINDRAJE")) {
          var lineacilindraje = dato.split(":");
          this.vehicle.vehicleEngine = lineacilindraje[1].replace(
            "TIPO DE CARROCERÍA",
            ""
          );
          this.Carroceria = lineacilindraje[2];
        } else if (dato.includes("COMBUSTIBLE")) {
          var lineacombustible = dato.split(":");
          this.vehicle.vehicleGasType = lineacombustible[1].replace(
            "FECHA DE MATRICULA INICIAL(DD/MM/AAAA)",
            ""
          );
        } else if (dato.includes("PASAJEROS")) {
          var lineapasajeros = dato.split(":");
          this.vehicle.vehicleCapacity = lineapasajeros[2];
        } else if (dato.includes("VIGENTE")) {
          var lineasoat = dato.split("	");
          var formato = lineasoat[3].split("/");
          this.vehicle.vehicleSoatExpiration =
            formato[2] +
            "-" +
            formato[1] +
            "-" +
            formato[0].replace(
              " ",
              ""
            ); /**Esto permite ordenar la fecha en el formato que se requiere */
          var dateControl = document.querySelector(
            'input[type="date"]'
          ); /**Busca el primer input de tipo "date" */
          dateControl.value = this.vehicle.vehicleSoatExpiration; /**Posteriormente se guarda en el input date la fecha de vencimiento tomada por el RUNT */
          break;
        }
      }
    },
    guardarVehiculo() {
      var locModal = document.getElementById(
        "myModal"
      ); /**Se llaman elementos del modal para  */
      var btnclose = document.getElementById(
        "w-change-close"
      ); /**Posteriormente realizar su animación */
      var btnclose1 = document.getElementById(
        "w-change-close1"
      ); /**en el momento que el usuario desee  */
      var modalchange = false; /**guardar el vehículo. */
      var dateControl = document.querySelector('input[type="date"]');
      this.vehicle.vehicleSoatExpiration = dateControl.value;
      var DatosVehiculo = [
        this.vehicle.vehicleLicenseplate,
        this.vehicle.vehicleBrand,
        this.vehicle.vehicleYear,
        this.vehicle.vehicleModel,
        this.vehicle.vehicleColor,
        this.Estado,
        this.vehicle.vehicleServiceType,
        this.vehicle.vehicleType,
        this.vehicle.vehicleGasType,
        this.vehicle.vehicleCapacity,
        this.vehicle.vehicleSoatExpiration,
      ];
      for (var dato of DatosVehiculo) {
        /**Realiza un recorrido de todas las variables */
        console.log(dato); /**Y confirma si todos los datos contienen al  */
        if (dato == "") {
          /**menos un valor, en dado caso de que encuentre */
          modalchange = true; /**algun campo sin llenar rompe el ciclo */
          break;
        }
      }
      if (modalchange == true) {
        this.modalaviso =
          "Error. los campos están incompletos."; /**En dado caso de encontrar algun campo sin llenar */
        locModal.style.display =
          "block"; /**Cambia el mensaje de modal advirtiendo al usuario */
        locModal.style.paddingRight =
          "17px"; /**Que dispone de campos incompletos */
        locModal.className = "modal fade show";
        btnclose.addEventListener("click", () => {
          locModal.style.display = "none";
          locModal.className = "modal fade";
        });
        btnclose1.addEventListener("click", () => {
          locModal.style.display = "none";
          locModal.className = "modal fade";
        });
      } else {
        this.modalaviso =
          "Campos llenados correctamente."; /**En dado caso que todos los campos estén llenos */
        locModal.style.display =
          "block"; /**Avisa al usuario que el vehículo se da guardado */
        locModal.style.paddingRight = "17px"; /**Correctamente. */
        locModal.className = "modal fade show";
        btnclose.addEventListener("click", () => {
          locModal.style.display = "none";
          locModal.className = "modal fade";
        });
        btnclose1.addEventListener("click", () => {
          locModal.style.display = "none";
          locModal.className = "modal fade";
        });
      }
    },

    habilitarCampos() {
      document.getElementById(
        "validationDefaultfecha"
      ).disabled = false; /**Habiita el único campo a modificar que es la fecha*/
      /**de vencimiento del SOAT */
    },
  },
};
</script>

<style scoped>
.datosvehiculo {
  opacity: 90%;
  margin: 0 0 10% 0;
}
p {
  font-size: 90%;
  margin: 0 0 0 0;
  text-align: left;
}

.textoayuda {
  text-align: left;
  font-size: 95%;
}
.custom-select {
  height: 60%;
}
</style>