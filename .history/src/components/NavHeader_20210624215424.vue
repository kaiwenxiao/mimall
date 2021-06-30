<template>
      <div class="header">
            <div class="nav-topbar">
                  <div class="container">
                        <div class="topbar-menu">
                              <a href="javascript:;">小米商城</a>
                              <a href="javascript:;">MUI</a>
                              <a href="javascript:;">云服务</a>
                              <a href="javascript:;">协议规则</a>
                        </div>
                        <div class="topbar-user">
                              <a href="javascript:;" v-if="username">{{username}}</a>
                              <a href="javascript:;" v-if="!username" @click="login">登录 </a>
                              <a href="javascript:;" v-if="!username" @click="login">登录 </a>
                              <a href="javascript:;" v-if="username" @click="login">我的订单</a>
                              <a href="javascript:;" class="my-cart" @click="goToCart"><span
                                          class="icon-cart"></span>购物车({{cartCount}})</a>
                        </div>
                  </div>
            </div>
            <div class="nav-header">
                  <div class="container">
                        <div class="header-logo">
                              <a href="/#/index"></a>
                        </div>
                        <div class="header-menu">
                              <div class="item-menu">
                                    <span>小米手机</span>
                                    <div class="children">
                                          <ul>
                                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                                      <!-- item.id 对应门户_产品接口.md 文件中的id，mainImage同理 -->
                                                      <a :href="'/#/product'+item.id" target="_blank">
                                                            <div class="pro-img">
                                                                  <img v-lazy="item.mainImage" :alt="item.subtitle">
                                                            </div>
                                                            <div class="pro-name">{{item.name}}</div>
                                                            <div class="pro-price">{{item.price | currency}}</div>
                                                      </a>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                              <div class="item-menu">
                                    <span>RedMi红米</span>
                                    <div class="children"></div>
                              </div>
                              <div class="item-menu">
                                    <span>电视</span>
                                    <div class="children">
                                          <ul>
                                                <li class="product">
                                                      <a href="" target="_blank">
                                                            <div class="pro-img">
                                                                  <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="">
                                                            </div>
                                                            <div class="pro-name">小米壁画电视 65英寸</div>
                                                            <div class="pro-price">6999元</div>
                                                      </a>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                        <div class="header-search">
                              <input type="text" name="keyword">
                              <a href="javascript:;"></a>
                        </div>
                  </div>
            </div>
      </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
      name: 'nav-header',
      data() {
            return {
                  // 读取Vuex中的值mutations触发的方法修改到username
                  phoneList: []
            }
      },
      computed: {
            // username(){
            //       return this.$store.state.username;
            // },
            // cartCount(){
            //       return this.$store.state.cartCount;
            // }
            ...mapState(['username', 'cartCount'])
      },
      // 过滤器
      filters: {
            currency(val) {
                  if (!val) return '0.00';
                  return '￥' + val.toFixed(2) + '元';
            }
      },
      mounted() {
            this.getProductList();
      },
      methods: {
            getProductList() {
                  this.axios.get('/products', {
                        params: {
                              categoryId: '100012',
                              pageSize: 6
                        }
                  }).then((res) => {
                        // 根据main.js的axios拦截器，这里的res对应“门户_产品接口.md”文件中返回success结果的“data”，不包含“status”
                        if (res.list.length >= 6) {
                              // 前端的方式去获取后台返回的前六条数据
                              this.phoneList = res.list.slice(0, 6);
                        }
                  });
            },
            goToCart() {
                  this.$router.push('/cart');
            },
            login() {
                  this.$router.push('/login');
            }
      },
}
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";

.header {
      .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #b0b0b0;

            .container {
                  @include flex();

                  a {
                        display: inline-block;
                        color: #b0b0b0;
                        margin-right: 17px;

                        &:hover {
                              color: #ffffff;
                        }
                  }

                  .my-cart {
                        width: 110px;
                        text-align: center;
                        background-color: #ff6600;
                        color: #ffffff;
                        margin-right: 0px;

                        .icon-cart {
                              @include bgImg(
                                    16px,
                                    12px,
                                    "/imgs/icon-cart-checked.png"
                              );
                              margin-right: 4px;
                        }
                  }
            }
      }

      .nav-header {
            .container {
                  height: 112px;
                  @include flex();
                  position: relative;

                  .header-menu {
                        display: inline-block;
                        padding-left: 209px;
                        width: 643px;

                        .item-menu {
                              display: inline-block;
                              line-height: 112px;
                              margin-right: 15px;
                              color: #333333;
                              font-size: 16px;
                              font-weight: bold; //加粗字体

                              span {
                                    cursor: pointer; //鼠标放上去就会出现一个小手
                              }

                              &:hover {
                                    color: $colorA;

                                    .children {
                                          height: 220px;
                                          opacity: 1;
                                    }
                              }

                              .children {
                                    position: absolute;
                                    top: 112px;
                                    left: 0px;
                                    width: 1226px;
                                    border-top: 1px solid #e5e5e5;
                                    box-shadow: 0px 7px 6px 0px
                                          rgba(0, 0, 0, 0.11);
                                    z-index: 10;
                                    height: 0;
                                    opacity: 0; //透明度为0
                                    overflow: hidden; //内容会被修剪，并且其余内容是不可见的。
                                    transition: all 0.5s;
                                    background-color: #ffffff;

                                    .product {
                                          float: left;
                                          height: 220px;
                                          width: 16.6%;
                                          font-size: 12px;
                                          line-height: 12px;
                                          text-align: center;
                                          position: relative;

                                          a {
                                                display: inline-block;
                                          }

                                          img {
                                                width: auto;
                                                height: 111px;
                                                margin-top: 26px;
                                          }

                                          .product-img {
                                                height: 137px;
                                          }

                                          .product-name {
                                                font-weight: bold; //字体加粗
                                                margin-top: 19px;
                                                margin-bottom: 8px;
                                                color: $colorB;
                                          }

                                          .product-price {
                                                color: $colorA;
                                          }

                                          &:before {
                                                content: " ";
                                                position: absolute;
                                                top: 28px;
                                                right: 0px;
                                                border-right: 1px solid $colorF;
                                                height: 100px;
                                                width: 1px;
                                          }

                                          &:last-child::before {
                                                display: none; //最后一个before元素不显示
                                          }
                                    }
                              }
                        }
                  }

                  .header-search {
                        width: 319px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        height: 50px;
                        border: 1px solid #e0e0e0;

                        input {
                              box-sizing: border-box; //设置内边距包括在总宽度
                              width: 264px;
                              height: 50px;
                              border: none;
                              border-right: 1px solid #e0e0e0;
                              padding-left: 14px;
                        }

                        a {
                              @include bgImg(
                                    18px,
                                    18px,
                                    "/imgs/icon-search.png"
                              );
                              margin-left: 17px;
                        }
                  }
            }
      }
}
</style>