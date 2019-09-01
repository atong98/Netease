<template>
  <div class="headerContainer">
      <div class="header"> 
        <a class="header_left">
          <i class="iconfont icon-home" @click="$router.push('/home')"></i>
        </a>
        <a class="header_middle">
          <img src="http:////yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="" @click="$router.push('/home')">
        </a>
        <div class="header_right">
          <a class="header_right_left">
            <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
          </a>
          <a class="header_right_right">
            <i class="iconfont icon-unie62d" @click="$router.push('/shopping')"></i>
          </a>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../public/css/mixins.styl'
  /* 头部 */
    .headerContainer
      width 100%
      // height rem(43.98)
      // background red
      .header
        padding 0 rem(8) 0 rem(12)
        display flex
        align-items center
        justify-content space-between
        background #fafafa
        border-bottom rem(4) solid #eee
        .header_left
          .iconfont
            font-size rem(60)
        .header_middle
          margin-left rem(45)
        .header_right
          display flex
          align-items center
          justify-content space-around
          .header_right_left
            .iconfont
              font-size rem(50)
          .header_right_right
            .iconfont
              font-size rem(50)
              margin-right: 15px
 
</style>
