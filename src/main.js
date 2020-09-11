import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import {

  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vuetify from './plugins/vuetify';

library.add(
  faGithub,
  faHome,
  faInfoCircle
);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
