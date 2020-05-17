import Vue from "vue";
import App from "./App.vue";
import router from '@/router.js'
import store from '@/store/index'
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css';

Vue.config.productionTip = false;

Vue.use(VueNoty);


new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount("#app");
