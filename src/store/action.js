/**
 * 商城Vuex-actions
 */
export default {
      // 提交username到mutaions中
      saveUserName(context, username) {
            // 第一个参数为mutation名
            context.commit('saveUserName', username);
      },
      saveCartCount(context, count ) {
            context.commit('saveCartCount', count);
      }
}