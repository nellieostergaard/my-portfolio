import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fullName: [
      { letter: "N", style: "--i:1;" },
      { letter: "e", style: "--i:2;" },
      { letter: "l", style: "--i:3;" },
      { letter: "l", style: "--i:4;" },
      { letter: "i", style: "--i:5;" },
      { letter: "e", style: "--i:6;" },
      { letter: "Ö", style: "--i:7;" },
      { letter: "s", style: "--i:8;" },
      { letter: "t", style: "--i:9;" },
      { letter: "e", style: "--i:10;" },
      { letter: "r", style: "--i:11;" },
      { letter: "g", style: "--i:12;" },
      { letter: "a", style: "--i:13;" },
      { letter: "a", style: "--i:14;" },
      { letter: "r", style: "--i:15;" },
      { letter: "d", style: "--i:16;" }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
