<template>
      <div>
            <order-header></order-header>
            <router-view></router-view>
            <service-bar></service-bar>
            <nav-footer></nav-footer>
      </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import ServiceBar from '../components/ServiceBar'
import NavFooter from '../components/NavFooter'

export default {
      name: 'order',
      components: {
            OrderHeader,
            ServiceBar,
            NavFooter
      },
      mounted() {
            let path = this.$route.path;
            if(path == '/order/confirm'){
                  
            }
      }
}
</script>

<style>
</style>