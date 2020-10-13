<template>
  <div>
    <body></body>
    <div class="fixed-bottom">
      <div>
        <nav id="FooterApp" class="navbar navbar-expand-sm">
          <a id="MensajeBottom" class="derechos text-white" href="#">
            Todos los derechos reservados 2020
          </a>
          <ul class="navbar-nav mr-auto"></ul>
          <a href="#"
            ><img
              src="~@/assets/twitter.png"
              width="30"
              height="30"
              alt=""
              loading="lazy"
          /></a>
          <a href="#"
            ><img
              src="~@/assets/facebook.png"
              width="60"
              height="30"
              alt=""
              loading="lazy"
          /></a>
          <a href="#"
            ><img
              src="~@/assets/instagram.png"
              width="30"
              height="30"
              alt=""
              loading="lazy"
          /></a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#FooterApp {
  background-color: #06416d;
}
body {
  background-image: url("~@/assets/Enfermeria2.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.derechos {
  font-size: 70%;
}
.btn-primary {
  background-color: #06416d;
}
.btn-primary:hover {
  background-color: #043a63;
}
.btn-primary:focus {
  background-color: white!important;
  color: #043a63!important;
}
.btn-primary:active {
  background-color: white!important;
  color: #043a63!important;

}
</style>