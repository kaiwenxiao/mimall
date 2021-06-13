<template>
      <div class="index">
            <div class="container">
                  <div class="swiper-box">
                        <swiper :option="swiperOption">
                              <swiper-slide :v-for="(item, index) in slideList" :key="index">
                                    <a :href="'/#/product/'+item.id"><img src="item.img"></a>
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
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import 'swiper/css/swiper.css';

export default {
      name: 'index',
      components: {
            Swiper,
            SwiperSlide,
            ServiceBar
      },
      data() {
            return {
                  swiperOption: {

                  },
                  slideList: [
                        {
                              id: '42',
                              img: '/imgs/slide/slide-1.jpg'
                        },
                        {
                              id: '45',
                              img: '/imgs/slide/slide-2.jpg'
                        },
                        {
                              id: '46',
                              img: '/imgs/slide/slide-3.jpg'
                        },
                        {
                              id: '',
                              img: '/imgs/slide/slide-4.jpg'
                        },
                        {
                              id: '',
                              img: '/imgs/slide/slide-5.jpg'
                        }
                  ]
            }
      }
}
</script>

<style>
</style>