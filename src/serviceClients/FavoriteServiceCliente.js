const axios = require("axios");
const route = "http://localhost:8080/api/favorite-direction";

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

function getDirectionsByUser(callback) {
    axios.get(route + "/show-directions",
        {
            params: {
                access_token: localStorage.getItem("token")
            }
        }).then((response) => {
            if (response.status !== 200) {
                alert("Error obteniendo sus direcciones.");
            } else {
                callback(response.data);
            }
        })
        .catch((error) => {
            alert("Se ha vencido el tiempo de logueo");
            console.log(error);
        });
}

export default {
    addDirection,
    getDirectionsByUser
}