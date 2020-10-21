<template>
<div>
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
          <li class="nav-item active">
            <router-link to="about-us" class="nav-link text-white" href="#"
                  >Acerca de nosotros<span class="sr-only"></span
                ></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link text-white"
              >Ingresar</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <div
        class="col align-self-center col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 mt-5"
      >
        <div class="signup card">
          <div class="form-col align-items-center">
            <div class="card-body">
              <div class="col-auto">
                <img
                  class="logo"
                  alt="logo"
                  src="~@/assets/logo.png"
                  style="margin: 0 0 5% 0"
                />
                <div class="form-group">
                  <label for="name"></label>
                  <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    placeholder="Nombre completo"
                    name="name"
                    id="inputName"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="phone"></label>
                  <input
                    v-model="phone"
                    type="tel"
                    class="form-control"
                    placeholder="Telefono"
                    name="phone"
                    pattern="[0-9]{10}"
                    id="inputPhone"
                    required
                  />
                </div>
                <div class="col-auto">
                  <div class="form-row">
                    <div class="col">
                      <input
                        v-model="user"
                        style="width: 100%; margin: 0 -7% 5% -4%"
                        type="text"
                        class="form-control"
                        placeholder="Usuario"
                        name="user"
                        id="inputUser"
                        required
                      />
                    </div>
                    <div class="col">
                      <label for="staticEmail" style="margin: 5% 0 0 0">
                        @unal.edu.co
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col">
                    <label for="psw"></label>
                    <input
                      style="width: 93%; margin: 0 -12% 5% -4%;"
                      v-model="psw"
                      type="password"
                      class="form-control"
                      placeholder="Contraseña"
                      name="psw"
                      id="inputPsw"
                      required
                    />
                  </div>
                  <div class="col">
                    <label for="pswRepeat"></label>
                    <input
                      style="width: 93%; margin: 0 -4% 5% -12%"
                      v-model="pswrepeat"
                      type="password"
                      class="form-control"
                      placeholder="Confirmar"
                      name="pswRepeat"
                      id="inputpswRepeat"
                      required
                    />
                  </div>
                </div>
                <p>
                  Al crear una cuenta estas de acuerdo con nuestros
                  <a href="#" style="color: #06416d">Terminos y Condiciones</a>.
                </p>
                <div class="col-auto" position="center">
                  <a
                    href="#"
                    type="button"
                    class="btn btn-light"
                    name="cancelBtn"
                    id="cancelBtn"
                    style="margin: -1% 2% 0 2%"
                  >
                    Cancelar
                  </a>
                  <button
                    class="btn btn-primary"
                    id="submitBtn"
                    style="margin: -1% 2% 0 2%"
                    @click="goTo"
                  >
                    Registrarse
                  </button>
                </div>
                <div style="margin: 2% 5% 5% 5%" position="center">
                  <button @click="goTo" class="btn btn-primary">
                    <img class="logo" src="~@/assets/google.png" width="30" />
                    Regístrate con Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterwithBackground></FooterwithBackground>
  </div>
</template>

<script>
import FooterwithBackground from "../components/FooterwithBackground.vue";
export default {
  name: "Signup",
  components: {
    FooterwithBackground,
  },
  data() {
    return {
      phone: null,
    };
  },
  methods: {
    goTo() {
      this.$router.push("home");
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

h2 {
  margin: 5% 0% 3%;
  color: black;
}

.signup {
  opacity: 90%;
  position: center;
  margin: -7% 0 5% 0;
  border-radius: 2%;
}
/*
input[type=text]{
  position: center;
  width: 90%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  background-color: #ddd;
  outline: gray;
}

Full-width input fields */
/*input[type="password"],*/
#inputName,
input[type="tel"],
input[type="number"]:focus {
  position: center;
  width: 90%;
  padding: 2%;
  margin: 0 0 -5% 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

#inputUser {
  position: left;
  width: 100%;
  padding: 7%;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
input[type="password"] {
  position: left;
  padding: 7%;
  margin: 0 0 0 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
/*
#staticEmail:focus{
  position: center;
  width: 10%;
  padding: 10px;
  margin: 0 0 25px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

/*
input[type=text], input[type=password], input[type=tel], input[type=number]:focus{
  background-color: #ddd;
  outline: gray;
}*/

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
/*.button {
  background-color: #042f66;
  color: white;
  padding: 14px 20px 10px 10px;
  margin: 8px 8px 8px 8px;
  border: #C0C0C0;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.button:hover {
  opacity:40;
}

/* Extra styles for the cancel button 
.cancel {
  padding: 14px 20px;
  background-color: #C0C0C0;
}*/

/* Float cancel and signup buttons and add an equal width 
.cancelBtn, .submitBtn {
  float: center;
  width: 25%;
}*/

/*.cancelBtn{
  margin-right: 5px;
}

/* Add padding to container elements 
.container {
  padding: 16px;
}*/

/* Clear floats 
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}*/

.rowBtn {
  position: center;
  margin: 0% 0% 0% 35%;
  background-color: #06416d;
}

/* Change styles for cancel button and signup button on extra small screens 
@media screen and (max-width: 500px) {
  .cancel, .submit {
    width: 50%;
  }
}*/
</style>