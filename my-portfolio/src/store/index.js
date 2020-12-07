import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bigHello: [
      { letter: "H", style: "--i:1;" },
      { letter: "e", style: "--i:2;" },
      { letter: "l", style: "--i:3;" },
      { letter: "l", style: "--i:4;" },
      { letter: "o", style: "--i:5;" }
    ],
    hamburgerIsClicked: false,
    textMe:
      "Ive been working as a frontend developer for 2 years and use Vue.js as prefered framework. I live in Malmö with my boyfriend Linus and son Hannes."
  },
  mutations: {
    hamburgerMenuIsClicked(state) {
      state.hamburgerIsClicked = !state.hamburgerIsClicked;
    }
  },
  actions: {},
  modules: {}
});
