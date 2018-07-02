import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

//http
import http from './utils/http'
Vue.prototype.$http = http;

//全局组件
import ComModal from '@/components/ComModal'
import ComToast from '@/components/ComToast'
import ComRefresh from '@/components/ComRefresh'
Vue.use(ComModal);
Vue.use(ComToast);
Vue.use(ComRefresh);
//全局组件：end

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
