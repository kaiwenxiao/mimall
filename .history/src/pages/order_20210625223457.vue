<template>
      <div>
            <order-header :title="title"></order-header>
            <template v-slot:
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
      data() {
            return {
                  title: '',
                  tip: ''
            } 
      },
      components: {
            OrderHeader,
            ServiceBar,
            NavFooter
      },
      mounted() {
            let path = this.$route.path;
            if (path == '/order/confirm') {

            }
      }
}
</script>

<style>
</style>