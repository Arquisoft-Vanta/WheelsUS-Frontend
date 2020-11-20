const axios = require("axios");
const environment = require("./../environment.js");
const route = environment.serverUrl + "/api/favorite-direction";

function addDirection(direction, callback) {
  console.log(localStorage.getItem("token"));
  axios
    .post(route + "/new-direction", direction, {
      params: {
        access_token: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      callback(response.status);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function getDirectionsByUser(callback) {
  console.log(localStorage.getItem("token"));
  axios
    .get(route + "/show-directions", {
      params: {
        access_token: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      if (response.status !== 200) {
        alert("Error obteniendo sus roles.");
      } else {
        callback(response.data);
      }
    })
    .catch((error) => {
      alert("Error en la petición");
      console.log(error);
    });
}

export default {
  addDirection,
  getDirectionsByUser,
};
