<template>
      <div class="index">
            <div class="container">
                  <div class="swiper-box">
                        <swiper :option="SwiperOption">
                              <swiper-slide>
                                    <a href=""><img src="" alt="" srcset=""></a>
                              </swiper-slide>
                        </swiper>
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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
      name: 'index',
      components:{
            Swiper,
            SwiperSlide,
            ServiceBar
      }
}
</script>

<style>
</style>