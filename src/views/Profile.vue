<template>
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
              <button type="button" class="btn btn-outline-primary">
                Añadir dirección
              </button>
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
                    id="validationDefault07"
                    placeholder="N° de documento"
                    readonly
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationDefault08">Dirección</label>
                  <input
                    v-model="user.userAddress"
                    type="text"
                    class="form-control form-control-sm text-center"
                    id="validationDefault08"
                    placeholder="Dirección"
                    readonly
                  />
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationDefault10">Teléfono</label>
                  <input
                    v-model="user.userPhone"
                    type="text"
                    class="form-control form-control-sm text-center"
                    id="validationDefault10"
                    placeholder="N° de teléfono"
                    readonly
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationDefault05">Correo</label>
                  <input
                    v-model="user.userMail"
                    type="text"
                    class="form-control form-control-sm text-center"
                    id="validationDefault05"
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
                    <option value="1">Universidad Nacional de Colombia</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="col-12 mt-3 mb-3">
                  <button
                    type="button"
                    @click="createUserDB"
                    class="btn btn-outline-primary"
                  >
                    Editar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Header></Header>
</template>

<script>
import Header from "../components/Header";
import FooterwithBackground from "../components/FooterwithBackground.vue";
import Foto from "@/assets/Enfermeria22.png";
import UserSC from "../serviceClients/UserServiceClient";

export default {
  name: "Perfil",
  components: {
    Header,
    FooterwithBackground,
  },
  data() {
    return {
      Foto: Foto,
      user: {
        userName: "Gonzalo Diaz",
        userDoc: "1013681625",
        userPhone: "3134340058",
        universityId: 1,
        userMail: "egonzalodm@gmail.com",
        userAddress: "Calle siempre viva 123",
        password: "contraseña",
        registryDatetime: "2020-10-04@11:59:59",
        picture: "imagen.jpg",
        Rh: "O+",
      },
    };
  },
  props: {},
  methods: {
    createUserDB() {
      UserSC.createUser(this.user, (response) => {
        console.log("Usuario creado " + response.status);
      });
    },
    getUserDB(){
      UserSC.getUser()
    }, 
  updateUser(){},
  
  },
};
</script>

<style scoped>
.datosvehiculo {
  opacity: 95%;
}

.datosusuario {
  opacity: 95%;
}

.container {
  height: 85vh;
}
</style>