<template>
      <div id="app">
            <router-view></router-view>
      </div>
</template>

<script>
export default {
      name: 'App',
      components: {

      },
      data() {
            return {
                  error: ''
            }
      },
      mounted() {
            if (this.$cookie.get('userId'))
                  this.getUser();
            this.getCartCount();
      }
},
methods: {
      getUser() {
            this.axios.get('/user').then((res = {}) => {
                  // to-do 保存到vuex里面
                  this.$store.dispatch('saveUserName', res.username);
            }).catch((res) => {
                  this.error = res;
            });
      },
      getCartCount() {
            // to-do 保存到vuex里面
            this.axios.get('/carts/products/sum').then((res = 0) => {
                  this.$store.dispatch('saveCartCount', res);
            }).catch((res) => {
                  this.res = res;
            });
      }
}
}
</script>

<style lang="scss">
@import "/assets/scss/reset.scss";
@import "/assets/scss/config.scss";
@import "/assets/scss/button.scss";
</style>
