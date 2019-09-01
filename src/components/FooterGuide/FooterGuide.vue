<template>
  <footer class="footer_guide">
    <div class="guide_item" :class="{on:$route.path==='/home'}" @click="goTo('/home')">
      <span class="icon_item">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" :class="{on:$route.path==='/classify'}" @click="goTo('/classify')">
      <span class="icon_item">
        <i class="iconfont icon-icon"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="guide_item" :class="{on:$route.path==='/goods'}" @click="goTo('/goods')">
      <span class="icon_item">
        <i class="iconfont icon-wupin"></i>
      </span>
      <span>识物</span>
    </div>
    <div class="guide_item" :class="{on:$route.path==='/shopping'}" @click="goTo('/shopping')">
      <span class="icon_item">
        <i class="iconfont icon-unie62d"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guide_item" :class="{on:$route.path==='/personal'}" @click="goTo('/personal')">
      <span class="icon_item">
        <i class="iconfont icon-webicon08"></i>
      </span>
      <span>个人</span>
    </div>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import '../../../public/css/mixins.styl'
  .footer_guide
    position fixed
    display flex
    font-size rem(24)
    height rem(98)
    position fixed
    left 0
    right 0
    bottom 0
    width rem(750)
    background-color  #fff
    justify-content space-around
    border-top rem(1) solid #eee
    box-sizing border-box
    .guide_item
      height rem(48)
      font-size rem(24)
      line-height rem(36)
      display flex
      flex-direction column
      text-align center
      align-items center
      color #999
      &.on
        color #B4282D
      span 
        font-size rem(24)
        line-height rem(24)
        margin-top rem(6.99)
        text-align center
        .iconfont
          box-sizing border-box
          display inline-block
          line-height rem(36)
          text-align center
          font-size rem(40)
          margin-top rem(5)
</style>
