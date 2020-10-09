<template>
  <Header></Header>
  <div>
    <div class="container">
      <div class="row justify-content-between">
        <div class="col2 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-4">
          <div class="createservice card">
            <div class="card-body">
              <form>
                <div class="form-group text-left">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Lugar de Salida"
                    style="border: 0; background: #f1f1f1"
                  />
                </div>
                <div class="form-group text-left">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Lugar de Llegada"
                    style="border: 0; background: #f1f1f1"
                  />
                </div>
                <div class="form-group text-left">
                  <input
                    class="form-control"
                    type="time"
                    placeholder="Hora de Salida"
                    style="border: 0; background: #f1f1f1"
                  />
                </div>
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      style="border: 0; background: #f1f1f1"
                      placeholder="Valor"
                    />
                  </div>
                  <div class="col">
                    <select
                      id="inputState"
                      class="form-control"
                      style="border: 0; background: #f1f1f1"
                    >
                      <option selected>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                      <option>0</option>
                    </select>
                  </div>
                </div>
                <button @click="goTo" class="btn btn-primary">
                  <img
                    class="logo"
                    src="~@/assets/passenger-ride-icon.png"
                    width="30"
                  />Crear Servicio
                </button>
                <div style="margin: 2% 0 0 0">
                  <button @click="goTo" class="btn btn-primary">
                    <img class="logo" src="~@/assets/google.png" width="30" />
                    Escoger Pasajeros
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col1 col-12 col-sm-12 col-md-6 col-lg-5 col-xl-4 mt-4">
          <div class="text"></div>
        </div>
      </div>
    </div>
  </div>
  
  <GoogleMaps/>

  <footerwith-background></footerwith-background>
</template>

<script>
import Header from "../components/Header";
import FooterwithBackground from "../components/FooterwithBackground.vue";
import GoogleMaps from "../components/GoogleMaps.vue";

export default {
  name: "CreateService",
  components: {
    Header,
    FooterwithBackground,
    GoogleMaps
  },
};
</script>

<style scoped>
.createservice {
  color: black;
  background-color: white;
  opacity: 90%;
  border-radius: 2%;
  margin: 25% 0 30% 0;
}
</style>