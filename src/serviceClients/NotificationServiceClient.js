const axios = require("axios");
const environment = require("./../environment.js");
const route = environment.serverUrl + "/api/notification";

function getNotification(callback) {
  axios
    .get(route, {
      params: {
        access_token: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      callback(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}


function createNotification(user, callback) {
  axios
    .post(route, user)
    .then((response) => {
      callback(response.status);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function updateNotification(user, callback) {
  axios
    .put(route + "/profile", user, {
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

function deleteNotification(id, callback) {
  axios
    .delete(`${route}${id}`)
    .then((response) => {
      callback(response.status);
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default {
  getNotification,
  createNotification,
  updateNotification,
  deleteNotification,
};
