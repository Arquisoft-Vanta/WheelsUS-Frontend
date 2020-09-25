<template>
  <FooterwithBackground></FooterwithBackground>
  <div class="fixed-top">
    <div>
      <nav id="Nav-Login" class="navbar navbar-expand-sm">
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
              <a class="nav-link text-white" href="#"
                >Acerca de <span class="sr-only"></span
              ></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Registrarme</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-between">
      <div class="col1 col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 mt-5">
        <div class="text">
          <div class="text-center text-md-left">
            <h1>WHEELS US</h1>

            <h2>
              Te permitirá conocer miembros de la comunidad universitaria para
              viajar juntos a tu lugar de destino.
            </h2>
          </div>
        </div>
      </div>
      <div class="col2 col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 mt-5">
        <div class="card">
          <div class="card-body">
            <img src="~@/assets/logo.png" />
            <form>
              <div class="form-group text-left">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" class="form-text text-muted text-left"
                  >We'll never share your email with anyone else.</small
                >
              </div>
              <div class="form-group text-left">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterwithBackground from "./FooterwithBackground.vue";
export default {
  name: "Login",
  components: {
    FooterwithBackground,
  },
};
</script>

<style >
.nav-link {
  font-size: 100%;
}
.card-body {
  color: black;
  position: relative;
  top: 15%;
}
.card {
  color: black;
  background-color: white;
  opacity: 80%;
  border-radius: 10%;
  margin: 0 0 35% 0;

}
h1 {
  color: black;
}
h2 {
  color: black;
}
.text {
    margin: 15% 0 0 5%;}
.btn-primary {
  background-color: #06416d;
}
.col1 {
  height: 120%;
  top: 20%;
}
.col2{
}
</style>