<template>
<Banner></Banner>
  <div>
    <div class="container">
      <div class="row">
        <div class="col1 col-12 col-sm-12 col-md-2 col-lg-2 col-xl-3 mt-5">
          <div class="text">
            <div class="text-center text-md-left"></div>
          </div>
        </div>
        <div class="col col-12 col-sm-12 col-md-10 col-lg-9 col-xl-9 mt-5">
          <div class="datosvehiculo card">
            <div class="card-body">
              <form>
                <div class="form-row">
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault01" class="text-left">Placa</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault01"
                      required
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault02">Marca</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault02"
                      required
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault01">No de pasajeros</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault01"
                      required
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault02">Estado</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault02"
                      required
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault02">Linea</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault02"
                      required
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault01">Tipo de Carroceria</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault01"
                      required
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault02">Fecha Vencimiento SOAT</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault02"
                      required
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault02">Fecha Vencimiento SOAT</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault02"
                      required
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault02">Modelo</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault02"
                      required
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault01">Cilindraje</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault01"
                      required
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault02">Fecha Vcto. Tecnomecánica</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault02"
                      required
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault02">Fecha Vcto. Tecnomecánica</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault02"
                      required
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault01" class="text-left">
                      Clase Vehículo
                    </p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault01"
                      required
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault02">Tipo de Combustible</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault02"
                      required
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault01">No de pasajeros</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault01"
                      required
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <p for="validationDefault02">Estado</p>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="validationDefault02"
                      required
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-12 mb-3">
                    <textarea
                      class="form-control is-invalid"
                      id="validationTextarea"
                      placeholder="Por favor, copie la información proporcionada por el RUNT"
                      required
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterwithBackground></FooterwithBackground>
</template>

<script>
import FooterwithBackground from "./FooterwithBackground.vue";
import Banner from "./Banner.vue";
import Foto from "@/assets/Enfermeria22.png";
export default {
  name: "RegistrarVehiculo",
  components: {
    FooterwithBackground,
    Banner,
  },
  data: function () {
    return {
      Foto: Foto,
    };
  },
};
</script>

<style scoped>
.datosvehiculo {
  opacity: 90%;
  margin: 0 0 15% 0;
}
p {
  font-size: 90%;
  margin: 0 0 0 0;
  text-align: left;
}
</style>