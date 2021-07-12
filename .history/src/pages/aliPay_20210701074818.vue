<template>
      <div class="ali-pay">
             <div class="form" v-html=""></div>
      </div>
</template>

<script>
export default {
      name:'alipay',
      data(){
            return {
                  orderId: this.$route.query.orderNo,
                  content:''
            }
      },
      mounted(){

      },
      methods:{
            
      }
}
</script>

<style>
</style>