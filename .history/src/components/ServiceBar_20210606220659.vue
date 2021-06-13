<template>
      <div class="service">
            <div class="container">
                  <ul>
                        <li><span class="icon-setting">预约维修服务</span></li>
                        <li> <span class="icon-7day">7天无理由退货</span></li>
                        <li> <span class="icon-15day">15天免费退换</span></li>
                        <li><span class="icon-post">满150包邮</span></li>
                  </ul>
            </div>
      </div>
</template>

<script>
export default {
      name: 'service-bar'
}
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";
.service {
      padding: 33px 0;
      color: #666666;
      font-size: 16px;
      text-align: center;

      li {
            display: inline-block;
            width: 24.9%;
      }
}
</style>