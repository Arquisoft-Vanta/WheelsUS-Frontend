<template>
  <Header></Header>
  <div id="aboutus">
    <div class="container">
      <div class="row">
        <div class="col-12 justify-content-center">
          <div class="informacion card">
            <div class="card-body">
              <h5 class="card-title">Acerca de nosotros</h5>
              <p class="card-text pt-4 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterwithBackground></FooterwithBackground>
</template>

<script>
import Header from "../components/Header";
import FooterwithBackground from "../components/FooterwithBackground.vue";

export default {
  name: "Usuario",
  components: {
    Header,
    FooterwithBackground,
  },
  data() {
    return {
      informacion: "Información",
    };
  },
};
</script>

<style>
.informacion {
  opacity: 95%;
}

#aboutus {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
}
</style>
