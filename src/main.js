import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VuePlaceAutocomplete from 'vue-place-autocomplete'



createApp(App).use(router, VueAxios, axios, VuePlaceAutocomplete).mount('#app')
