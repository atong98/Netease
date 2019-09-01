<template>
  <div class="personal">
    <!-- 头部 -->
    <Header/>
    <!-- 下半部分 -->
    <div class="bottomContainer">
      <div class="bottom_top">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="bottom_middle">
        <div class="middle_top" @click="$router.push('/login/1')">
          <i class="iconfont icon-shouji"></i>
          <span>手机号快捷登录</span>
        </div>
        <div class="middle_bottom" @click="$router.push('/login/2')">
          <i class="iconfont icon-xin"></i>
          <span>邮箱帐号登录</span>
        </div>
      </div>
      <div class="bottom">
        <ul class="bottom_item">
          <li></li>
        </ul>
      </div>
    </div>
    <!-- 登录方式 -->
    <div class="loginContainer">
      <ul class="login">
        <li class="login_item">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </li>
        <li class="login_item">
          <i class="iconfont icon-web-icon-"></i>
          <span>QQ</span>
        </li>
        <li class="login_item">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </li>
      </ul>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
  import Header from '../../components/Header/Header'
  export default {
    components:{
      Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../public/css/mixins.styl'
  .personal
    width 100%
    
    /* 下半部分 */
    .bottomContainer
      width 100%
      height 100%
      // background pink
      .bottom_top
        width 100%
        text-align center
        padding rem(180) 0 rem(240) 0
        img 
          width rem(260)
          height rem(90)
      .bottom_middle
        height rem(220)
        padding 0 rem(40)
        .middle_top
          height rem(94)
          background #dd1a21
          margin-bottom rem(32)
          border-radius rem(6)
          text-align center
          .iconfont
            font-size rem(40)
            margin-right rem(32)
          span 
            font-size rem(28)
            color white
        .middle_bottom
          height rem(94)
          border rem(1) solid #dd1a21
          margin-bottom rem(32)
          border-radius rem(6)
          text-align center
          .iconfont
            font-size rem(42)
            margin-right rem(32)
          span
            font-size rem(28)
            color #dd1a21
    /* 登录方式 */
    .loginContainer
      width 100%
      position absolute
      bottom 90px
      .login
        padding-left rem(125)
        display flex
        align-items center
        .login_item
          padding 0 rem(40)
          border-right rem(2) solid #979797
          &:nth-child(3)
            border-right 0
          .iconfont
            font-size rem(40)
            color #7f7f7f
          span 
            font-size rem(30)
            color #7f7f7f
        

</style>
