import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 对接口返回的值做拦截
axios.interceptors.response.use(function(response){
      // axios对接口返回数据做的封装 -- response.data
      let res = response.data;
      // 前端与后端商量
      if (res.staus == 0){
            // res.data才是真正接口返回的值
            return res.data;
      }
})

Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
      router,
      render: h => h(App),
}).$mount('#app')
