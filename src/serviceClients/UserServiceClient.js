const axios = require("axios");
const route = "http://localhost:8080/api/user/";
function getUsers(callback) {
  axios
    .get(route)
    .then(response => {
      callback(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function getUser(id, callback) {
  axios
    .get(`${route}${id}`)
    .then(response => {
      console.log(response.data);
      callback(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function createUser(user, callback) {
  axios
    .post(route, user)
    .then(response => {
      callback(response.status);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function updateUser(user, callback) {
  axios
    .put(route+"0", user)
    .then(response => {
      callback(response.status);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function deleteUser(id, callback) {
  axios
    .delete(`${route}${id}`)
    .then(response => {
      callback(response.status);
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
