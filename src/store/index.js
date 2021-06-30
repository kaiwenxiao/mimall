import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex);

const state = {
      // 登录用户名
      username: '',
      // 购物车商品数量
      cartCount: 0
}
export default new Vuex.Store({
      // 同样是因为对象key value对应所以可以简写，本来是state:引入插件的自定义名
      state,
      mutations,
      actions
});