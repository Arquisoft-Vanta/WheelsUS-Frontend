<template>
  <div id="home">
    <Header></Header>

    <div class="columna">
      <p></p>
      <div v-bind:style="collapse1" id="collapseChat">
        <div class="chatbody">
          <div class="chatnombre">
            {{ userName }}
            <button class="btn btn-close" @click="toogleChat()">X</button>
          </div>
          <div class="card card-body messages-body">
            <Burbuja
              v-for="(message, index) in conversation"

              :key="index"
              :type="message.sender"
              :message="message.msg"
            ></Burbuja>
          </div>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="message"
              placeholder="Escriba su mensaje"
              aria-label="Escriba su mensaje"
              aria-describedby="button-addon2"
              v-model="textMsg"
            />
            <div class="input-group-append">
              <button
                class="button"
                type="submit"
                id="button-addon2"
                accesskey="”intro″"
                @click="sendMsg"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Burbuja from "../components/Burbujas.vue";
import firebase from "firebase";

export default {
  name: "Chat",
  props: { collapse1: Object, conversation: Array,userMail: String, userName: String , idDoc: String},
  components: { Burbuja },
  data() {
    return {
      textMsg: "",
      nuevo:"nuevo",

     
    };
  },
  methods: {
    toogleChat() {
      if (this.collapse1.display == "block") {
        this.collapse1.display = "none";
      } else if (this.collapse1.display == "none") {
        this.collapse1.display = "block";
      }

      //const db = firebase.firestore();

      //var self = this;

      /*db.collection("Chat")
        .doc("LA")
        .onSnapshot(function (doc) {
          //console.log("Current data: ", doc.data().mensajes[1].sender);
          self.conversation = doc.data().mensajes;
          console.log("Current data: ", self.conversation);
        });*/

      // Atomically add a new region to the "regions" array field.
    },
    sendMsg() {
      const db = firebase.firestore();
      var washingtonRef = db.collection("Chat").doc(this.idDoc);
      console.log(this.userMail);

      if(this.textMsg){
       
        this.conversation.push({ sender: this.userMail, msg: this.textMsg });

        washingtonRef.update({
          mensajes: this.conversation,
        });
      

      //this.conversation.push({ sender: 1, msg: this.textMsg });

      this.textMsg = "";
         
      }

      
    },
  },
};

// Initialize Firebase
</script>

<style >
.columna {
  width: 33%;
  float: left;
}

@media (max-width: 500px) {
  .columna {
    width: auto;
    float: none;
  }
}
.chatnombre {
  background: #1455d9;
  color: white;
}
.button {
  background: #1455d9;
  color: white;
}
.messages-body {
  height: 400px;
  overflow: auto;
}
.collapse-chat {
  display: block;
}
.chatbody {
  width: 400px;
  position: fixed;
  bottom: 50px;
  right: 100px;
}
.btn-close {
  
  display: inline;
  color: white !important;
  
}
</style>

