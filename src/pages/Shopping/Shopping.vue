<template>
  <div class="shopping">
    <!-- 头部 -->
    <div class="shopping_headerContainer">
      <div class="shopping_left"> 
        <span>购物车</span>
        <div class="shopping_right">
          <span>领劵</span>
        </div>
      </div>
    </div>
    <!-- 退货退款 -->
    <div class="shopContainer">
      <ul class="shops">
        <li class="shop_item">
          <i class="iconfont icon-right-1"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="shop_item">
          <i class="iconfont icon-right-1"></i>
          <span>48小时快速退款</span>
        </li>
        <li class="shop_item">
          <i class="iconfont icon-right-1"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <!-- 购物车 -->
    <div class="cartContainer">
      <div class="cart">
        <div class="cartContainer_top">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
        </div>
        <div class="cartContainer_middle">
          <a>去添加点什么吧</a>
        </div>
        <div class="cartContainer_bottom" @click="$router.push('/personal')">
          <span>登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../public/css/mixins.styl'
  .shopping
    width 100%
    /* 头部 */
    .shopping_headerContainer
      width 100%
      height rem(87.98)
      // background pink
      .shopping_left
        // position relative
        width 100%
        height 100%
        box-sizing border-box
        padding 0 rem(30)
        display flex
        justify-content space-between
        align-items center
        span
          font-size rem(36)
        .shopping_right
          height rem(87.98)
          line-height rem(87.98)
          display flex
          justify-content center
          align-items center
          span
            font-size rem(30)
            color #b4282d
    /* 退货退款 */
    .shopContainer
      width 100%
      height rem(69.98)
      background #eee
      .shops
        height rem(69.98)
        padding 0 rem(30)
        display flex
        align-items center
        justify-content space-between
        .shop_item
          display flex
          align-items center
          .iconfont
            font-size rem(10)
            margin-right rem(6)
          span
            font-size rem(24)
    /* 购物车 */
    .cartContainer
      width 100%
      height 100%
      background #f4f4f4
      .cart
        display flex
        flex-direction column
        align-items center
        justify-content space-around
        .cartContainer_top
          margin-top rem(310)
          img 
            width rem(248)
            height rem(248)
        .cartContainer_middle
          a 
            font-size rem(28)
            margin-bottom rem(50)
        .cartContainer_bottom
          width rem(480)
          height rem(92)
          background #b4282d
          display flex
          align-items center
          justify-content space-around
          margin-bottom rem(290)
          margin-top rem(55)
          span 
            font-size rem(30)
            color white
 
// </style>
