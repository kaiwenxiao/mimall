<template>
  <div>
        <order-header title="订单列表">
              <template v-slot:tip>
                    <span></span>
              </template>
        </order-header>
  </div>
</template>

<script>
import OrderHeader from ../components/OrderHeader''
export default {
      name:'order-list',
      components:{
            OrderHeader
      }
}
</script>

<style>

</style>