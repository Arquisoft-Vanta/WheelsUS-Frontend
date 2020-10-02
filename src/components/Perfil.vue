<template>
  <FooterwithBackground></FooterwithBackground>

  <div>
    <div class="container h-100">
      <div class="row align-items-center">
        <div class="col-12 pl-md-5 pr-md-5 pl-lg-0 pr-lg-0 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-5 mb-5">
          <div class="datosusuario card pt-4 pb-3">
            <div class="card-body">
              <img src="" class="card-img-top" alt=" Imagen de perfil ">
              <h5 class="card-title pt-3">Usuario</h5>
              <button type="button" class="btn btn-outline-primary">Añadir dirección</button>        
            </div>
          </div>
        </div>
        <div class="col-12 pl-md-5 pr-md-5 col-sm-12 col-md-12 col-lg-9 col-xl-9 mt-lg-5 mt-0 mb-5">
          <div class="datosvehiculo card card-body mb-5">
            <form>
              <h4 class="mb-3">Tu información</h4>
              <div class="form-row ">
                <div class="col-md-6 mb-3">
                  <label for="validationDefault01">Nombres</label>
                  <input 
                    type="text"
                    class="form-control form-control-sm text-center"
                    id="validationDefault01"
                    placeholder="Nombres completos" readonly
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationDefault02">Apellidos</label>
                  <input
                    type="text"
                    class="form-control form-control-sm text-center"
                    id="validationDefault02"
                    placeholder="Apellidos completos" readonly
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-3 mb-3">
                  <label for="validationDefault07">Documento</label>
                  <input
                    type="text"
                    class="form-control form-control-sm text-center"
                    id="validationDefault07"
                    placeholder="N° de documento" readonly
                  />
                </div>
                <div class="col-md-5 mb-3">
                  <label for="validationDefault05">Correo</label>
                  <input
                    type="text"
                    class="form-control form-control-sm text-center"
                    id="validationDefault05"
                    placeholder="Correo electronico" readonly
                  />
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationDefault03 ">Fecha de nacimiento</label>
                  <input
                    type="text"
                    class="form-control form-control-sm text-center"
                    id="validationDefault03"
                    placeholder="Fecha de nacimiento" readonly
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationDefault04">Universidad</label>
                  <select class="form-control form-control-sm" id="inlineFormCustomSelect">
                    <option selected></option>
                    <option value="1">Universidad Nacional de Colombia</option>
                  </select>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationDefault08">Tipo de vinculación</label>
                  <input
                    type="text"
                    class="form-control form-control-sm text-center"
                    id="validationDefault08"
                    placeholder="Tipo de vinculación" readonly
                  />
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationDefault09">Pregrado</label>
                  <input
                    type="text"
                    class="form-control form-control-sm text-center"
                    id="validationDefault09"
                    placeholder="Pregrado" readonly
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-3 mb-3">
                  <label for="validationDefault10">Teléfono</label>
                  <input
                    type="text"
                    class="form-control form-control-sm text-center"
                    id="validationDefault10"
                    placeholder="N° de teléfono" readonly
                  />
                </div>
                <div class="col-md-5 mb-3">
                  <label for="validationDefault11">EPS</label>
                  <input
                    type="text"
                    class="form-control form-control-sm text-center"
                    id="validationDefault11"
                    placeholder="EPS" readonly
                  />
                </div>
                <div class="col-md-2">
                  <label for="validationDefault12">Sexo</label>
                  <select class="form-control form-control-sm" id="inlineFormCustomSelect">
                    <option selected></option>
                    <option value="1">Femenino</option>
                    <option value="2">Masculino</option>
                    <option value="3">Otro </option>
                  </select>
                </div>
                <div class="col-md-2 mb-3">
                  <label for="validationDefault06">R.H.</label>
                  <input
                    type="text"
                    class="form-control form-control-sm text-center"
                    id="validationDefault06"
                    placeholder="Tipo de sangre" readonly
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Banner></Banner>
</template>

<script>
import Banner from "./Banner.vue";
import FooterwithBackground from "./FooterwithBackground.vue";
import Foto from "@/assets/Enfermeria22.png";
export default {
  name: "Perfil",
  components: {
    Banner,
    FooterwithBackground,
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
  opacity: 95%;
}

.datosusuario{
  opacity: 95%;
}
</style>