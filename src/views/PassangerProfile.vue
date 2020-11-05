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
                <a type="button" class="btn btn-outline-dark btn-block">
                  Añadir dirección
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-12 pl-md-5 pr-md-5 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-lg-5 mt-0 mb-5"
          >
            <div class="list-group">
              <h5>Tus viajes</h5>
              <a href="#" class="list-group-item list-group-item-action">
                Universidad Nacional - Facatativá
              </a>
            </div>
          </div>
          <div
            class="col-12 pl-md-0 pr-md-0 col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-lg-5 mt-0 mb-5 h-75 "
          >
            <div class="mapa card card-body h-50 mb-5">
              <h5>Mapa</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Header></Header>
  </div>
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
      textoBotonEditar: "Editar",

      //Estado del botón que permite editar y guardar los cambios realizados a la información de un usuario
      estadoInput: true,
    };
  },
  props: {},

  methods: {
    createUserDB() {
      UserSC.createUser(this.user, (response) => {
        console.log("Usuario creado " + response.status);
      });
    },
    getUserDB() {
      UserSC.getUser();
    },
    updateUser() {},
  },
};
</script>

<style scoped>
.mapa {
  opacity: 95%;
}
.datosusuario {
  opacity: 95%;
}

.container {
  height: 85vh;
}
</style>
