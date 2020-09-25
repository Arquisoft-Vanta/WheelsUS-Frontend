<template>
  <body>
  </body>
  <div class="fixed-bottom">
    <div>
      <nav id="Nav-Login" class="navbar navbar-expand-sm">
        <a id="MensajeBottom" class="text-white" href="#">
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
</template>

<script>
export default {};
</script>

<style>
#Nav-Login {
  background-color: #06416d;
}
body {
  background-image: url("~@/assets/Enfermeria2.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
a{
  font-size: 70%;
}
</style>