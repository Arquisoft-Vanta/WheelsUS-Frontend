const axios = require("axios");
const route = "http://localhost:8080/api/favorite-direction";
const path = "http://localhost:8080";

function addDirection(direction, callback) {
    console.log(localStorage.getItem("token"));
    axios.post(route + "/new-direction",
        direction, {
        params: {
            access_token: localStorage.getItem("token")
        }
    }).then(response => {
        callback(response.status);
    })
        .catch(function (error) {
            console.log(error);
        });
}

export default {
    addDirection
}