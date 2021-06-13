<template>
      <div class="index">
            <div class="container">
                  <div class="swiper-box">

                  </div>
                  <div class="ads-box"></div>
                  <div class="banner"></div>
                  <div class="product-box"></div>
            </div>
            <service-bar></service-bar>
      </div>
</template>

<script>

import ServiceBar from '../components/ServiceBar.vue';
export default {
      name: 'index',
      components:{
            ServiceBar
      }
}
</script>

<style>
</style>