<template>
      <nav id="Banner" class="navbar navbar-expand-sm fixed-top" >
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
          </ul>
        </div>
      </nav>

  
  <p>{{phone}}</p>

  <form>   
    <div class="signup card">
      <div class="form-col align-items-center"> 
        <div class="card-body">   
          <div class="col-auto">  
            <h2>Crea tu cuenta</h2>          
          <div class="form-group">
            <label for="name"></label>
            <input v-model="name" type="text" class="form-control" placeholder="Nombre completo" name="name" id="inputName" required>
          </div>
          <div class="form-group">  
            <label for="phone"></label>
            <input v-model="phone" type="tel" class="form-control" placeholder="Telefono" name="phone" pattern="[0-9]{10}" id="inputPhone" required>
          </div>
          <div class="col-auto">
          <div class="form-row">
            <div class="col">
              <input v-model="user" type="text" class="form-control" placeholder="usuario" name="user" id="inputUser" required>
            </div>
            <div class="col">
              <label for="staticEmail"> @unal.edu.co </label>
            </div>
          </div>
          </div>
          <!--<div class="row">
            <label for="email"></label>
            <div class="col">
            <input v-model="user" type="text" class="form-control" placeholder="usuario" name="user" id="inputUser" style="height:80%" required>
            </div>
            <div class="col">
            <label for="staticEmail" class="col">@unal.edu.co</label>                       
            </div>
          </div>-->
          <div class="form-group">  
            <label for="psw"></label>
            <input v-model="psw" type="password" class="form-control" placeholder="Contraseña" name="psw" id="inputPsw" required>
          </div>
          <div class="form-group">  
            <label for="pswRepeat"></label>
            <input v-model="pswrepeat" type="password" class="form-control" placeholder="Confirmar contraseña" name="pswRepeat" id="inputpswRepeat" required>
          </div>                
          <p>Al crear una cuenta estas de acuerdo con nuestros <a href="#" style="color:dodgerblue">Terminos y Condiciones</a>.</p>
          <div class="col-auto" position="center">          
            <a href="#" type="button" class="btn btn-light" name="cancelBtn" id="cancelBtn" style="margin: 2% 2% 2% 2%"> Cancelar </a>
            <button type="submit" class="btn btn-primary" name="submitBtn" id="submitBtn" style="margin: 2% 2% 2% 2%"> Registrarse </button>        
          </div>
          <div style="margin: 1% 5% 5% 5%" position="center">
            <a type="button" class="btn btn-secondary" href="#"><img class="logo" src="~@/assets/google.png" width="30"/> Registrate con Google </a>
          </div>
        </div>
      </div>
    </div>
   </div>
  </form>    
  <FooterwithBackground></FooterwithBackground> 
</template>

<script>
import FooterwithBackground from "./FooterwithBackground.vue";
export default {
  name: 'Signup',
  components: {
    FooterwithBackground,
  },
  data(){
    return{
      phone: 0
    }
  }

};
</script>

<style>
*{box-sizing: border-box}
h2{
  margin: 5% 0% 3%;
  color: black;
}

.signup{
  opacity: 80%;
  position: center;
  width: 30%;
  margin: 7% 0% 0% 35%;
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
input[type=password], #inputName, input[type=tel], input[type=number]:focus{
  position: center;
  width: 90%;
  padding: 15px;
  margin: 5px 0 15px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}


#inputUser{
  position: left;
  width: 100%;
  padding: 10px;
  margin: 0 10px 25px 0;
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

.rowBtn{
  position: center;
  margin: 0% 0% 0% 35%
}

#Banner{
  background-color: #06416d;
  margin-bottom: 50%;
}
/* Change styles for cancel button and signup button on extra small screens 
@media screen and (max-width: 500px) {
  .cancel, .submit {
    width: 50%;
  }
}*/
</style>