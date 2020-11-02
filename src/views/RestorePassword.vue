<template>
  <div>
    <Header></Header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3">
          <div class="panel card text-center">
            <div class=" card-body">
              <h4 class="card-title pt-5">Restaura tu contraseña</h4>
              <p class="pt-3">Ingresa tu email</p>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Usuario institucional"
                  aria-label="Usuario institucional"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2"
                    >@unal.edu.co</span
                  >
                </div>
              </div>
              <button type="button" class="btn btn-outline-dark btn-block mt-4">
                Enviar
              </button>
              <button type="button" class="btn btn-outline-danger btn-block">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterwithBackground></FooterwithBackground>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import FooterwithBackground from "../components/FooterwithBackground.vue";

export default {
  name: "Usuario",
  components: {
    Header,
    FooterwithBackground,
  },
  data() {
    return {
      informacion: "Información",
    };
  },
};
</script>

<style>
.panel {
  margin-top: 5%;
  opacity: 95%;
  height: 60vh;
}
@media (max-width: 366px) {
  .panel {
    height: 65vh;
  }
}
</style>
