import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
// import Login from './pages/login'
import Index from './pages/index'
// import Product from './pages/product'
// import Detail from './pages/detail'
import Cart from './pages/cart'
// import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
// import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/aliPay'
// import { resolve } from 'core-js/fn/promise'

Vue.use(Router)

export default new Router({
      routes: [
            {
                  // --使用子路由一定会加载父路由
                  // 根路由下的子路由对应的组件会自动映射到根路由下的router-view，例如输入localhost:8080/product/123
                  path: '/',
                  name: 'home',
                  // 根路径重定向到/index路径
                  redirect: '/index',
                  component: Home,
                  children: [
                        {
                              path: '/index',
                              name: 'index',
                              component: Index,
                        },
                        {
                              path: 'product/:id',
                              name: 'product',
                              component: resolve=>require(['./pages/index.vue'],resolve)
                        },
                        {
                              path: 'detail/:id',
                              name: 'detail',
                              component: resolve=>require(['./pages/detail.vue'],resolve)
                        }
                  ],
            },
            {
                  path: '/login',
                  name: 'login',
                  component: ()=>import('./pages/login.vue')
            },
            {
                  path: '/cart',
                  name: 'cart',
                  component: Cart
            },
            // 这里不像根路径的路由，例如localhost:8080/order并不会用在根路径（home组件）下；
            // 但是例如localhost:8080/order/list还是会用在order路由下的router-view元素--使用子路由一定会加载父路由
            //（浏览器的url输入/list相当于在order.vue中使用router-link to="component"的作用）
            {
                  path: '/order',
                  name: 'order',
                  component:  ()=>import('./pages/order.vue'),
                  children: [{
                        path: 'confirm',
                        name: 'order-confirm',
                        component: OrderConfirm
                  },
                  {
                        path: 'list',
                        name: 'order-list',
                        component: ()=>import('./pages/orderList.vue'),
                  },
                  {
                        path: 'pay',
                        name: 'order-pay',
                        component: OrderPay
                  },
                  {
                        path: 'alipay',
                        name: 'ali-pay',
                        component: AliPay
                  }
                  ]
            }
      ]
})