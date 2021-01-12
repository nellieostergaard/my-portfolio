import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import VueDraggable from "vue-draggable";

Vue.config.productionTip = false;

require("./assets/sass/style.sass");
Vue.use(VueResource);
Vue.use(VueDraggable);

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
