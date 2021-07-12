<template>
      <div class="ali-pay">
            <div class="form" v-html=""></div>
      </div>
</template>

<script>
export default {
      name: 'alipay',
      data() {
            return {
                  orderId: this.$route.query.orderId,
                  content: ''
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
                  })
            }
      }
}
</script>

<style>
</style>