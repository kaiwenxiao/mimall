import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

axios.interceptors.response.use(function)

Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
      router,
      render: h => h(App),
}).$mount('#app')
