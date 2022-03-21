import Vue from 'vue'
import App from './App.vue'
import router from './router'

// vant
import Vant from 'vant';
import 'vant/lib/index.css';

// ele
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
