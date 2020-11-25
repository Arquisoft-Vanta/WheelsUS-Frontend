<template>
  <div>
    <div class="fixed-top">
      <div>
        <nav id="Banner" class="navbar navbar-expand-sm">
          <div class="col-auto">
            <a id="Titulo" class="navbar-brand text-white" href="">
              <img
                src="~@/assets/logo.png"
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
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>
            <ul class="navbar-nav mr-right">
              <li class="nav-item">
                <router-link to="about-us" class="nav-link text-white"
                  >Acerca de nosotros</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/signup" class="nav-link text-white"
                  >Registrarte</router-link
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="container-fluid text-dark mt-0 mb-5">
      <div class="row">
        <div
          class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 offset-md-3 offset-lg-1 pt-5 mt-0 mt-lg-5 pb-5 mb-0 mb-md-0"
        >
          <div class="text mt-0 mt-lg-5">
            <div class="text-center">
              <h1>WHEELS US</h1>
              <h5 class="d-none d-md-block text-muted">
                Viaja junto a miembros de la comunidad universitaria para juntos
                llegar a cualquier lugar.
                
              </h5>
              <h5 class="d-block d-md-none text-muted">
                Viaja en comunidad a cualquier lugar.
              </h5>
            </div>
          </div>
          <button type="button" class="btn btn-dark btn-block btn-lg mt-5">Registrate</button>
        </div>
        <div
          class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 offset-md-3 offset-lg-1 mt-0 mt-lg-5 mb-5 mb-xl-0"
        >
          <div class="login-card card">
            <div class="card-body text-dark border-light rounded shadow">
              <img class="logo mt-2 mb-5" src="~@/assets/logo.png" alt="logo" />
              <form @submit="login">
                <div class="form-group text-left">
                  <label for="exampleInputEmail1">Correo electrónico</label>
                  <input
                    
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    style="border: 0; background: #f1f1f1"
                    aria-describedby="emailHelp"
                    v-model="credentials.userMail"
                  />
                </div>
                <div class="form-group text-left">
                  <label for="exampleInputPassword1">Contraseña</label>
                  <input
                    type="password"
                    style="border: 0; background: #f1f1f1"
                    class="form-control"
                    id="exampleInputPassword1"
                    v-model="credentials.password"
                  />
                </div>
                <button type="submit" class="mt-5 mb-4 btn btn-dark btn-block">
                  Ingresar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterwithBackground></FooterwithBackground>
  </div>
</template>

<script>
import FooterwithBackground from "../components/FooterwithBackground";
import AuthServiceClient from "../serviceClients/AuthServiceClient";
import UserSC from "../serviceClients/UserServiceClient";

export default {
  name: "Login",
  components: {
    FooterwithBackground,
  },

  data() {
    return {
      credentials: {
        userMail: "",
        password: "",
      },
      logging: false,
    };
  },
  methods: {
    login(event) {
      AuthServiceClient.loginUser(
        this.credentials,
        () => {
          this.$router.push("home");
          UserSC.getUser((data) => {
            this.$store.commit("updateUser", data);
            console.log(data);
          });
        },
        (text) => {
          this.$bvToast.toast(text, {
            title: "Error de Autenticación",
            autoHideDelay: 2000,
            appendToast: true,
            variant: "danger",
            solid: true,
          });
        }
      );
      event.preventDefault();
    },
  },
};
</script>

<style>
#Banner {
  background-color: #1455d9;
}
</style>
