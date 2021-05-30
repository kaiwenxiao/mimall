import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'

Vue.use(Router)

export default new Router({
      routes: [
            {
                  path: '/',
                  name: 'home',
                  // 根路径重定向到/index路径，将对应的index组件映射到根路径下组件的router-view元素中（这么做是为了复用）
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
                        component: Product
                  },
                  {
                        path: 'detail/:id',
                        name: 'detail',
                        component: Detail
                  }
                  ],
            },
            {
                  path: '/cart',
                  name: 'cart',
                  component: Cart
            },
            {
                  path: '/order',
                  name: 'order',
                  component: Order,
                  children: [{
                        path: 'confirm',
                        name: 'order-confirm',
                        component: OrderConfirm
                  },
                  {
                        path: 'list',
                        name: 'order-list',
                        component: OrderList
                  },
                  {
                        path: 'pay',
                        name: 'order-pay',
                        component: OrderPay
                  }
                  ]
            }
      ]
})