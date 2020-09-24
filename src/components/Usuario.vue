<template>
  <div id="user">
      <h1>Landing page WHEELS US</h1>
      <h2>Coming soon!</h2>
      <p>Hola mundo</p>
      <p>{{nombre}}</p>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-primary">Primary</button>
  </div>
</template>

<script>
export default {
    name: "Usuario",
    props:{
        nombre: String
    },
    data(){
        return{
        telefono:0
    }}

}
</script>

<style>

</style>