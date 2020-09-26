<template>
  <div class="fixed-top">
    <div>
      <nav id="Banner" class="navbar">
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

        <div>
          <div class="btn-group dropleft">
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
              <a id="nombre-usuario" class="dropdown-item text-black">
                Hola{{ nombre }}
              </a>
              <div class="dropdown-divider"></div>
              <div class="dropdown-divider"></div>

              <button class="dropdown-item" type="button">Mi perfil</button>
              <button class="dropdown-item" type="button">
                Editar mi perfil
              </button>
              <div class="dropdown-divider"></div>

              <button class="dropdown-item" type="button">Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "Banner",
  props: {
    nombre: String,
  },
};
</script>

<style>
#Banner {
  background-color: #06416d;
}
</style>