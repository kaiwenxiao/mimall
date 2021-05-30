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
                  // 根路由下的子路由对应的组件会自动映射到根路由下的router-view，例如输入localhost:8080/product/123，会yong'dao
                  path: '/',
                  name: 'home',
                  // 根路径重定向到/index路径，
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