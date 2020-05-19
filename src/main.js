import Vue from "vue";
import App from "./App.vue";
import router from '@/router.js'
import store from '@/store/index'
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css';
import VueDisqus from 'vue-disqus'


Vue.config.productionTip = false;

Vue.use(VueNoty);
Vue.use(VueDisqus);


new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount("#app");
