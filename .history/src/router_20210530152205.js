import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import orderConfirm from './pages/orderConfirm'
import orderList from './pages/orderList'
import orderPay from './pages/orderPay'

Vue.use(Router);

export default new Router({
      routes: [
            {
                  path: '/',
                  name: 'home',
                  component: Home,
                  
                  childern: [
                        {
                              path: 'index',
                              name: 'index',
                              component: Index,
                        }, {
                              path: '/product/:id',
                              name: 'product',
                              component: Product,
                        }, {
                              path: '/detail/:id',
                              name: 'detail',
                              component: Detail,
                        }
                  ],
                  redirect:'index',
            },
            {
                  path: '/cart',
                  name: 'cart',
                  component: Cart,
            },
            {
                  path: '/order',
                  name: 'order',
                  component: Order,
                  children: [
                        {
                              path: '/confirm',
                              name: 'order-confirm',
                              component: orderConfirm,
                        },
                        {
                              path: '/list',
                              name: 'order-list',
                              component: orderList,
                        },
                        {
                              path: '/pay',
                              name: 'order-pay',
                              component: orderPay,
                        }
                  ]
            }
      ]
})