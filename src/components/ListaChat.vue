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
        @click="toogleChat(contact.name)"
      >
        {{ contact.name }}
      </button>
    </div>

    <Chat
      :collapse1="collapse1"
      :conversation="conversation4"
      :userMail="user.userMail"
      :userName="userName"
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
      contacts: [
        { name: "Gonzalo" },
        { name: "Oscar" },
        { name: "Reina" },
        { name: "Cesar" },
        { name: "Francisco" },
        { name: "Cristian" },
      ],
      conversation: [
        [
          { sender: 1, msg: "holaaaaaaa1" },
          { sender: 2, msg: "Mensae prueba 2" },
          { sender: 1, msg: "Mensae prueba 3" },
          { sender: 1, msg: "Mensae prueba 4" },
          {
            sender: 2,
            msg:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum turpis vitae posuere scelerisque. Nam porta tincidunt dolor quis sollicitudin. Aliquam consectetur sed sapien id bibendum. Aenean fringilla metus tincidunt ipsum tempor, vitae porta neque finibus. Donec ultricies turpis vel enim posuere, eget interdum nunc luctus. Nulla ipsum velit, vehicula eget magna pulvinar, porta vulputate nibh. Vivamus sed porta mi. Curabitur non orci consectetur, sodales nisl in, porttitor mi. Nullam iaculis condimentum enim id facilisis. ",
          },
        ],
      ],
      conversation3: [
        { sender: 1, msg: "holaaaaaaa1" },
        { sender: 2, msg: "Mensae chat 2 rueba 2" },
      ],
      conversation4: [],

      collapse1: { display: "none" },
      collapselist: { display: "none" },
      userName: "",
      nuevo: "nuevo",
      viejo: "viejo",
    };
  },
  mounted() {
    this.getUserDB();
  },
  components: {
    Chat,
  },
  methods: {
    toogleChat(contact) {
      const db = firebase.firestore();

      if (this.collapse1.display == "block") {
        this.collapse1.display = "none";
      } else if (this.collapse1.display == "none") {
        this.collapse1.display = "block";
      }
      this.userName = contact;
      var pas= this.user.userMail+contact;

      console.log(pas)
      db.collection("Chat").doc(pas).set({
        name: [{sender: "carlos", msg:"si sale nuevo"}]
        
      });

      

      var self = this;

      db.collection("Chat")
        .doc(this.nuevo)
        .onSnapshot(function (doc) {
          //console.log("Current data: ", doc.data().mensajes[1].sender);
          self.conversation4 = doc.data().mensajes;
          // console.log("Current data: ", self.conversation4);
        });
    },
    toogleList() {
      

      if (this.collapselist.display == "block") {
        this.collapselist.display = "none";
      } else if (this.collapse1.display == "none") {
        this.collapselist.display = "block";
      }
      
    },
    getUserDB() {
      UserSC.getUser((data) => {
        this.user = data;
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