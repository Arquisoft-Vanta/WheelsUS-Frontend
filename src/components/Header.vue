<template>
  <div class="fixed-top">
    <nav id="Banner" class="navbar navbar-expand-lg">
      <div class="col-auto">
        <a id="Titulo" class="navbar-brand text-white" href="#">
          <img
            src="~@/assets/carrito.png"
            width="40"
            height="40"
            alt=""
            loading="lazy"
          />
          Wheels US
        </a>
      </div>
      <button
        class="navbar-toggler navbar-light bg-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-grow-1" id="navbarNav">
        <ul class="navbar-nav ml-auto flex-nowrap">
          <li class="nav-item">
            <a href="#" @click="goToHome" class="nav-link menu-item nav-active text-white"
              >Inicio</a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link menu-item text-white"
              >Buscar Servicio</a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link menu-item text-white"
              >Crear Servicio</a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link menu-item text-white"
              >Hola {{ nombre }}
            </a>
          </li>
        </ul>
        <div class="btn-group dropleft my-2 my-lg-0">
          <button
            type="button"
            class="btn btn-light"
            data-toggle="dropdown"
            data-display="static"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              class="person"
              src="~@/assets/person.png"
              width="30"
              height="30"
            />
          </button>
          <div class="dropdown-menu dropdown-menu-lg-left">
            <button class="header-button dropdown-item" @click="goToProfile" type="button">
              Mi perfil
            </button>
            <button class="header-button dropdown-item" @click="goToVehicleRegistration" type="button">
              Registrar vehiculo
            </button>
            <div class="header-button dropdown-divider"></div>
            <button class="dropdown-item" @click="goToLogin" type="button">Cerrar Sesión</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    nombre: String,
  },
  data(){

  },
    methods: {
    goToHome() {
      this.$router.push("home");
    },goToVehicleRegistration() {
      this.$router.push("vehicle-registration");
    },goToLogin() {
      this.$router.push("/");
    },goToProfile() {
      this.$router.push("profile");
    },
  },
};
</script>

<style>
#Banner {
  background-color: #06416d;
  margin-bottom: 0%;
}
.header-button:focus {
  background-color: white!important;
  color: #043a63!important;
}
.header-button:active {
  background-color: white!important;
  color: #043a63!important;
}
</style>