<template>
      <div>
            <order-header></order-header>
            <router-view></router-view>
            <nav-footer></nav-footer>
      </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import ServiceBar from 
import NavFooter from '../components/NavFooter'

export default {
      name: 'order',
      components:{
            OrderHeader,
            NavFooter
      }
}
</script>

<style>
</style>