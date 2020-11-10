const axios = require("axios");
const route = "http://localhost:8080/api/user";
const path = "http://localhost:8080";

function registerUser(user, callback) {
  axios
    .post(route + "/signup", user)
    .then((response) => {
      console.log(route + "/signup");
      callback(response.status);
    })
    .catch(function(error) {
      console.log(error);
      callback(error.status);
    });
}

function loginUser(user, callback, showtoast) {
  axios
    .post(
      path + "/oauth/token",
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          username: user.userMail,
          password: user.password,
          grant_type: "password",
        },
        auth: {
          username: "wheels-us",
          password: "dragonfly-software",
        },
      }
    )
    .then((response) => {
      if (response.status !== 200) {
        showtoast("Error en la Autenticación");
        //alert("Error en la autenticación");
      } else {
        localStorage.setItem("token", response.data.access_token);
        callback();
      }
    })
    .catch((error) => {
      if (error.response.status === 400) {
        showtoast("Datos de Ingreso Invalidos");
        //alert("Datos invalidos");
      }
    });
}

function setUserLogged() {}

function getUserLogged() {}

export default {
  registerUser,
  loginUser,
  setUserLogged,
  getUserLogged,
};
