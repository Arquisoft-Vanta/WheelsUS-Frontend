import Vue from "vue";
import Vuex from "vuex";

import UserSC from "../serviceClients/UserServiceClient";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: false
  },
  mutations: {
    updateUser(state, newUser) {
      state.user = newUser;
    },
  },
  getters: {

  },
  actions: {},
  modules: {},
});
