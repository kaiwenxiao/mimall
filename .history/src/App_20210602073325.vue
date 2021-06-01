<template>
      <div id="app">
            <router-view></router-view>
      </div>
</template>

<script>
// import axios from 'axios'
// import storage from './storage/index'
export default {
      name: 'App',
      components: {

      },
      data() {
            return {

            }
      },
      mounted() {
            // storage.setItem('a', 1);
            // storage.setItem('abc', { a: 1 }, 'user');
            // storage.clear('a');
            // storage.clear('a', 'user');

            // 本地加载静态文件
            // public文件夹为项目根目录(localhost:8080)用/就可以了，和路由需要区分开来吧
            // this.axios.get('/mock/user/login.json').then((res) => {
            //       this.res = res;
            // });
      }
}
</script>

<style>
#app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
}
</style>
