import Vue from "vue";
import App from "./App.vue";
import router from '@/router.js'
import store from '@/store/index'

// Third party components
import VueNoty from 'vuejs-noty'
import VueDisqus from 'vue-disqus'
import wysiwyg from 'vue-wysiwyg'

// Component Styling
import 'vuejs-noty/dist/vuejs-noty.css';
import 'vue-wysiwyg/dist/vueWysiwyg.css';


Vue.config.productionTip = false;

Vue.use(VueNoty);
Vue.use(VueDisqus);
Vue.use(wysiwyg, {});


new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount("#app");
