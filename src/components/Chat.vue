<template>
  <div id="home">
    <Header></Header>

    <div class="columna">
      <p></p>
      <div v-bind:style="collapse1" id="collapseChat">
        <div class="chatbody">
          <div class="chatnombre card">{{ userName }}
            <button class="btn btn-close" @click="toogleChat()" > X</button>  
          </div>
          <div class="card card-body messages-body">
            <!-- <Burbuja
              v-for="(message, index) in conversation"
              :key="index"
              :type="message.sender"
              :message="message.msg"
            ></Burbuja>-->

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
              <button class="button" type="button" id="button-addon2" @click="sendMsg" > 
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterwithBackground></FooterwithBackground>
  </div>
</template>

<script>
import Burbuja from "../components/Burbujas.vue";



export default {
  name: "Chat",
  props: { collapse1: Object ,conversation:Array, userName:String},
  components: { Burbuja },
  data() {
    return {
      
      textMsg:"",
    };
  },
  methods: {
    toogleChat() {
      if (this.collapse1.display == "block") {
        this.collapse1.display = "none";
      } else if (this.collapse1.display == "none") {
        this.collapse1.display = "block";
      }
    },
    sendMsg(){
     
      this.conversation.push({sender:1,msg:this.textMsg});
      this.textMsg="";  
      

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
.btn-close{
  position: fixed;
  float: right;
  color: white;
  size: 2px;
  right: 95px;
  top: 120px;
  border: none;
}
</style>

