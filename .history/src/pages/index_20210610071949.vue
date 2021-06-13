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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
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
                        //环绕
                        loop: true,
                        //自动切换
                        autoplay: true,
                        //方块旋转
                        effect: "cube",
                        cubeEffect: {
                              slideShadows: true,
                              shadow: true,
                              shadowOffset: 100,
                              shadowScale: 0.6
                        },
                        //分页器
                        pagination: {
                              el: ".swiper-pagination",
                              clickable: true //点击原点可切换
                        },
                        //箭头实现切换效果
                        navigation: {
                              nextEl: ".swiper-button-next",
                              prevEl: ".swiper-button-prev"
                        }
                  },
                  swiperList: [
                        {
                              id: "42",
                              image: "/imgs/slider/slide-1.jpg"
                        },
                        {
                              id: "45",
                              image: "/imgs/slider/slide-2.jpg"
                        },
                        {
                              id: "46",
                              image: "/imgs/slider/slide-3.jpg"
                        },
                        {
                              id: "",
                              image: "/imgs/slider/slide-4.jpg"
                        },
                        {
                              id: "",
                              image: "/imgs/slider/slide-5.jpg"
                        }
                  ],
                  menuList: [
                        [
                              {
                                    id: 30,
                                    image: "/imgs/item-box-1.png",
                                    name: "小米CC9"
                              },
                              {
                                    id: 31,
                                    image: "/imgs/item-box-2.png",
                                    name: "小米8青春版"
                              },
                              {
                                    id: 32,
                                    image: "/imgs/item-box-3.jpg",
                                    name: "Redmi K20 Pro"
                              },
                              {
                                    id: 33,
                                    image: "/imgs/item-box-4.jpg",
                                    name: "移动4G专区"
                              }
                        ],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                  ],
                  adsList: [
                        {
                              id: "33",
                              image: "/imgs/ads/ads-1.png"
                        },
                        {
                              id: "48",
                              image: "/imgs/ads/ads-2.jpg"
                        },
                        {
                              id: "45",
                              image: "/imgs/ads/ads-3.png"
                        },
                        {
                              id: "47",
                              image: "/imgs/ads/ads-4.jpg"
                        }
                  ],
                  banner: {
                        id: "30",
                        image: "/imgs/banner-1.png"
                  },
                  phoneList: [],
                  showModal: false
            };
      }
}
</script>

<style>
</style>