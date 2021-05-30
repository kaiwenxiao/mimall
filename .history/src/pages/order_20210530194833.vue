<template>
      <div>
            <order-header></order-header>
            <router-view></router-view>
            <nav-footer></nav-footer>
      </div>
</template>

<script>
import OrderHeader from '../components/'
export default {
      name: 'order'
}
</script>

<style>
</style>