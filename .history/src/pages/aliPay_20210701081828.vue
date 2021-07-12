<template>
      <div class="ali-pay">
            <loading v-if="loading"></loading>
            <div class="form" v-html="content"></div>
      </div>
</template>

<script>
import loading from '../components/Loading.vue'
export default {
      name: 'alipay',
      components: {
            loading
      },
      data() {
            return {
                  orderId: this.$route.query.orderId,
                  content: '',
                  loading: true
            }
      },
      mounted() {

      },
      methods: {
            paySubmit() {
                  this.axios.post('/pay', {
                        orderId: this.orderId,
                        orderName: '小米商城',
                        amount: 0.01,
                        payment: 1
                  }).then((res) => {
                        this.content = res.content;
                        setTimeout(())
                  })
            }
      }
}
</script>

<style>
</style>