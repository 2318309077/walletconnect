import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import VuePrism from "vue-prism";
import VueClipboard from "vue-clipboard2";

import "prismjs/themes/prism-tomorrow.css";

import "buefy/dist/buefy.css";
import "./assets/main.scss";

Vue.use(Buefy);
Vue.use(VuePrism);
Vue.use(VueClipboard);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
