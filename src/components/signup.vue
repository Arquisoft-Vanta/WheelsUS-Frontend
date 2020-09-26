<template>
   <form>   
        <div id="signup">
            <h1>Crea tu cuenta para empezar a viajar</h1>
            <div class="form-group">
              <label for="name"></label>
              <input v-model="name" type="text" placeholder="Nombre completo" name="name" required>
            </div>
            <div class="form-group">  
              <label for="phone"></label>
              <input v-model="phone" type="tel" placeholder="Telefono" name="phone" pattern="[0-9]{10}" required>
            </div>
            <div class="form-group">  
              <label for="email"></label>
              <input v-model="email" type="text" placeholder="Correo electronico @unal.edu.co" name="email" required>
            </div>
            <div class="form-group">  
              <label for="psw"></label>
              <input v-model="psw" type="password" placeholder="Contraseña" name="psw" required>
            </div>
            <div class="form-group">  
              <label for="psw-repeat"></label>
              <input v-model="pswrepeat" type="password" placeholder="Confirmar contraseña" name="psw-repeat" required>
            </div>
            
              <p>Al crear una cuenta estas de acuerdo con nuestros <a href="#" style="color:dodgerblue">Terminos y Condiciones</a>.</p>

            <div class="col-auto">
              <button type="button" class="cancelbtn">Cancelar</button>
              <button type="submit" class="signupbtn">Registrarse</button>
            </div>
        </div>
   </form>    
</template>

<script>
export default {
    name: 'Signup',
    props:{

    }
}
</script>

<style>
* {box-sizing: border-box}

/* Full-width input fields */
input[type=text], input[type=password], input[type=number]:focus{
  position: center;
  width: 30%;
  padding: 15px;
  margin: 5px 0 22px 0;
  margin-top: 15px;
  margin-bottom: 15px;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focusm, input[type=number]:focus{
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #042f66;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: #C0C0C0;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #C0C0C0;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: center;
  width: 10%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
    width: 50%;
  }
}
</style>