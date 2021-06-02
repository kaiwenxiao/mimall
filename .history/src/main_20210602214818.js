import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import env from './env'

const mock = true;
if(mock){
      // require是执行加载，import是预编译加载--[项目中的路径]
      require('./mock/api');
}
// 对接口请求做基础设置(根据前端的跨域方式做调整)--[路由的路径]
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 对接口返回的值做拦截
axios.interceptors.response.use(function (response) {
      // axios对接口返回数据做的封装 -- response.data
      let res = response.data;
      // 前端与后端商量接口返回json的status=0代表有错误; 10代表未登录
      if (res.status == 0) {
            // res.data才是真正接口返回的值
            return res.data;
      } else if (res.status == 10) {
            // vue实例下才能用this.$router.push()
            window.location.href = '/#/login';
      } else {
            alert(res.msg);
      }
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
      router,
      render: h => h(App),
}).$mount('#app')
