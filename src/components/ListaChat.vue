<template>
  <div>
    <div>
      <a class="btn boton-abrir" role="button" @click="toogleList">
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

    <Chat :collapse1="collapse1" :conversation="conversation2" :userName="userName"></Chat>
  </div>
</template>
<script>
import Chat from "../components/Chat";

//import firebase from "firebase";




export default {
  name: "ChatList",
  props: {},
  data() {
    return {
      contacts: [
        { name: "Gonzalo" },
        { name: "Oscar" },
        { name: "Reina" },
        { name: "Cesar" },
        { name: "Francisco" },
        { name: "Cristian" },
      ],
      conversation:[[
        {sender: 1,msg:"holaaaaaaa1"
        },
        {sender: 2,msg:"Mensae prueba 2"
        },
        {sender: 1,msg:"Mensae prueba 3"
        },
        {sender: 1,msg:"Mensae prueba 4"
        },
        {sender: 2,msg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum turpis vitae posuere scelerisque. Nam porta tincidunt dolor quis sollicitudin. Aliquam consectetur sed sapien id bibendum. Aenean fringilla metus tincidunt ipsum tempor, vitae porta neque finibus. Donec ultricies turpis vel enim posuere, eget interdum nunc luctus. Nulla ipsum velit, vehicula eget magna pulvinar, porta vulputate nibh. Vivamus sed porta mi. Curabitur non orci consectetur, sodales nisl in, porttitor mi. Nullam iaculis condimentum enim id facilisis. "
        },
      ]],
      conversation2:[
        {sender: 1,msg:"holaaaaaaa1"
        },
        {sender: 2,msg:"Mensae chat 2 rueba 2"
        },
        {sender: 1,msg:"Mensae chat 2  3"
        },
        {sender: 1,msg:"Mensaje chat  prueba 4"
        },
        {sender: 2,msg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum turpis vitae posuere scelerisque. Nam porta tincidunt dolor quis sollicitudin. Aliquam consectetur sed sapien id bibendum. Aenean fringilla metus tincidunt ipsum tempor, vitae porta neque finibus. Donec ultricies turpis vel enim posuere, eget interdum nunc luctus. Nulla ipsum velit, vehicula eget magna pulvinar, porta vulputate nibh. Vivamus sed porta mi. Curabitur non orci consectetur, sodales nisl in, porttitor mi. Nullam iaculis condimentum enim id facilisis. "
        },
      ],
      
      collapse1: { display: "none",  },
      collapselist:{display:"none"},
      userName:"",
    };
  },
  components: {
    Chat,
  },
  methods: {
    toogleChat(contact) {
      if (this.collapse1.display == "block") {
        this.collapse1.display = "none";
      } else if (this.collapse1.display == "none") {
        this.collapse1.display = "block";
      }

     this.userName = contact;
     
    
    },
    toogleList() {
      if (this.collapselist.display == "block") {
        this.collapselist.display = "none";
      } else if (this.collapse1.display == "none") {
        this.collapselist.display = "block";
      }
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
  background-color: #1455d9;
  color: white !important;
  margin-top: 5px;
  right: 5px !important;
  position: fixed;
}
</style>