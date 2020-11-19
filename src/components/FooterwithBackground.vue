<template>
  <div>
    <body></body>
    <div class="fixed-bottom">
      <div>
        <div id="footer" class="container-fluid pt-3 pb-2">
          <div id="bottom-footer" class="row text-center">
            <div class="col-1"></div>
            <div class="col-5 col-lg">
              <p class="text-left">© 2020 - Todos los derechos reservados.</p>
            </div>
            <div class="col-2"></div>
            <div class="col-4 col-lg pb-2 pb-sm-0">
              <a href="#" class="text-right"
                ><img
                  src="~@/assets/twitter.svg"
                  width="30"
                  height="30"
                  alt=""
                  loading="lazy"
              /></a>
              <a href="#" class="text-right"
                ><img
                  src="~@/assets/facebook.svg"
                  width="60"
                  height="30"
                  alt=""
                  loading="lazy"
              /></a>
              <a href="#" class="text-right"
                ><img
                  src="~@/assets/instagram.svg"
                  width="30"
                  height="30"
                  alt=""
                  loading="lazy"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#FooterApp {
  background-color: #262626;
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
  border-color: #043a63;
}
.btn-primary:hover {
  background-color: #043a63;
  border-color: #043a63;
}
.btn-primary:focus {
  background-color: white !important;
  color: #043a63 !important;
  border-color: #043a63;
}
.btn-primary:active {
  background-color: white !important;
  color: #043a63 !important;
  border-color: #043a63;
}
.btn-primary:disabled {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
#footer {
  background-color: #262626;
}

#footer h5 {
  color: white;
}

#footer p {
  color: white;
  font-size: 13px;
}

#footer p a {
  text-decoration: none;
  color: white;
}
</style>
