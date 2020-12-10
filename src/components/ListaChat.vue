<template>
  <div>
    <div>
      <a class="btn-primary boton-abrir" role="button" @click="toogleList">
        Abrir chat
      </a>
    </div>

    <div class="list-group list-contacts" v-bind:style="collapselist">
      <h3 id="title-contacts">Contactos</h3>
      <button
        type="button"
        v-for="(contact, index) in contacts"
        :key="index"
        class="list-group-item list-group-item-action"
        @click="toogleChat(contact.email, contact.name)"
      >
        {{ contact.name }}
      </button>
    </div>

    <Chat
      :collapse1="collapse1"
      :conversation="conversation4"
      :userMail="user.userMail"
      :userName="userName"
      :idDoc="idDoc"
    ></Chat>
  </div>
</template>
<script>
import Chat from "../components/Chat";
import UserSC from "../serviceClients/UserServiceClient";
import firebase from "firebase";

export default {
  name: "ChatList",
  props: {},
  data() {
    return {
      user: {
        userName: "",
        userDoc: "",
        userPhone: "",
        universityId: "",
        userMail: "",
        userAddress: "",
        password: "",
        registryDatetime: "",
        picture: "",
        vehicleModel: [],
        Rh: "",
      },
      contacts: [],

      conversation4: [],

      collapse1: { display: "none" },
      collapselist: { display: "none" },
      userName: "",
      idDoc: "",
      viejo: "viejo",
      driverMail: "",
      driver: false,
    };
  },
  created() {
    this.getUserDB();
  },

  mounted() {},
  updated() {},
  components: {
    Chat,
  },
  methods: {
    getUserDB() {
      UserSC.getUser((data) => {
        this.user = data;
        this.isDriver();
      });
    },
    createChats(contacts) {
      const db = firebase.firestore();
      var i;

      for (i = 0; i < contacts.length; i++) {
        let pas;
        pas = this.user.userMail + contacts[i].email;

        db.collection("Chat").doc(pas).set({
          mensajes: [],
        });
      }
    },
    toogleChat(contact, name) {
      const db = firebase.firestore();

      if (this.collapse1.display == "block") {
        this.collapse1.display = "none";
      } else if (this.collapse1.display == "none") {
        this.collapse1.display = "block";
      }
      this.userName = name;
      var pas;
      if (this.driver) {
        pas = this.user.userMail + contact;
      } else {
        pas = contact + this.user.userMail;
      }

      this.idDoc = pas;

      var self = this;

      db.collection("Chat")
        .doc(pas)
        .onSnapshot(function (doc) {
          self.conversation4 = doc.data().mensajes;
        });
    },
    toogleList() {
      if (this.collapselist.display == "block") {
        this.collapselist.display = "none";
      } else if (this.collapse1.display == "none") {
        this.collapselist.display = "block";
      }
    },
    isDriver() {
      const db = firebase.firestore();
      var self = this;

      db.collection("driverRoute")
        .where("routeActive", "==", true)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots

            self.driverMail = doc.data().dataDriver.driverMail;

            if (doc.data().dataDriver.driverMail == self.user.userMail) {
              self.driver = true;
              for (let i = 65; i < 69; i++) {
                let passenger = doc.data().passengers[String.fromCharCode(i)];
                if (passenger.name !== "") {
                  self.contacts.push({
                    name: passenger.name,
                    email: passenger.email,
                  });
                }
                self.createChats(self.contacts);
              }
            } else {
              for (let i = 65; i < 69; i++) {
                let passenger = doc.data().passengers[String.fromCharCode(i)];
                if (passenger.email == self.user.userMail) {
                  self.contacts.push({
                    name: doc.data().dataDriver.driverName,
                    email: doc.data().dataDriver.driverMail,
                  });
                }
                self.createChats(self.contacts);
              }
            }
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
    },
  },
};
</script>

<style>
#title-contacts {
  background-color: #1455d9;
  color: white;
  margin: 0;
}
.list-contacts {
  width: 200px;
  position: fixed;
  margin-top: 42px;
  right: 5px;
}
.boton-abrir {
  background-color: #1455d9 !important;
  color: white !important;
  margin-top: 5px;
  right: 5px !important;
  position: fixed;
  padding: 5px;
}
</style>