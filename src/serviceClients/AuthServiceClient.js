const axios = require("axios");
const route = "http://localhost:8080/api/user/";

function registerUser(user, callback) {
  axios
    .post(route, user)
    .then((response) => {
      callback(response.status);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function loginUser(user, callback) {
  var credentials = { userMail: user.userMail, password: user.password };
  axios
    .post(route, credentials)
    .then((response) => {
      callback(response.status);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function setUserLogged() {}

function getUserLogged() {}

export default {
  registerUser,
  loginUser,
  setUserLogged,
  getUserLogged
};
