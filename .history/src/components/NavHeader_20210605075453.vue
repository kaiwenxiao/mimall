<template>
      <div>nav-header</div>
</template>

<script>
export default {
      name: 'nav-header'
}
</script>

<style lang="scss">
.header {
      .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #b0b0b0;

            .container {
                  width: 1226px;
                  margin-right: auto;
                  margin-left: auto;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  a {
                        color: #b0b0b0;
                        margin-right: 17px;
                  }
                  .my-cart {
                        width: 110px;
                        background-color: #ff6600;
                        text-align: center;
                        color: #ffffff;
                        .icon-cart {
                              display: inline-block;
                              width: 16px;
                              height: 12px;
                              margin-right: 4px;
                              background: url("/imgs/icon-cart-checked.png")
                                    no-repeat center;
                              background-size: contain;
                        }
                  }
            }
      }
}
</style>