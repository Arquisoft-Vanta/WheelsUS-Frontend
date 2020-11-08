<template>
  <div class="comentarios">
    <div class="burbuja entrada" v-if="type==2">
      <p>{{message}}</p>
    </div>
    <div class="burbuja salida" v-if="type==1">
      <p>{{message}}</p>
    </div>
    <div>
        
    </div>
  </div>
  
</template>

<script>
export default {
  name: "Burbuja",
  props: {
    type:Number,
    message:String
  },
  data() {
    return {};
  },
  methods: {
    
  },
};
</script>

<style >
body {
  background-color: #f0f0f0;
}

.comentarios {
  width: 80%;
}

.comentarios .burbuja {
  width: 100%;
  margin-bottom: 10px;
}

.comentarios .burbuja p {
  margin: 0 0 0px 0;
}

.entrada {
  position: relative;
  background-color: #fff;
  border-color: darkgray;
  border: 2px solid gray ;
  padding: 10px 10px 10px 20px;
  color: #222;
  border-radius: 3px;
  margin-left: 10px;
  

}

.entrada:after {
  content: "";
  display: block;
  position: absolute;

  top: 15px;
  margin-left: -35px;

  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
    
  border-right: 15px solid gray;
}
.salida {
  position: relative;
  background-color: #1455d9;
  padding: 10px;
  color: white;
  border-radius: 3px;
  margin-left: 70px;
}

.salida::after {
  content: "";
  display: block;
  position: absolute;

  top: 15px;
  right: -3.8%;
  margin-left: -35px;

  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;

  border-left: 15px solid #1455d9;
}
</style>

