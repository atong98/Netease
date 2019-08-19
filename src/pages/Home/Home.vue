<template>
  <div class="home">
      <!-- 头部 -->
    <div class="home_header">
      <div class="header">
        <a class="logo">
          <img src="http:////yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
        </a>
        <div class="search">
          <i class="iconfont icon-sousuo"></i> 
          <span class="placeholder">搜索商品</span>
        </div>
        <button class="login">登录</button>
      </div>
      <!-- 头部导航 -->
      <div class="headernav">
        <div class="headernav_left">
          <ul class="nav_items">
            <li class="nav_item">
              <span>推荐</span>
            </li>
            <li class="nav_item">
              <span>居家生活</span>
            </li>
            <li class="nav_item">
              <span>服饰鞋包</span>
            </li>
            <li class="nav_item">
              <span>美食酒水</span>
            </li>
            <li class="nav_item">
              <span>个护清洁</span>
            </li>
            <li class="nav_item">
              <span>母婴亲子</span>
            </li>
            <li class="nav_item">
              <span>运动旅行</span>
            </li>
            <li class="nav_item">
              <span>数码家电</span>
            </li>
            <li class="nav_item">
              <span>全球特色</span>
            </li>
          </ul>
        </div>
        <div class="headernav_right">
          <i class="iconfont icon-jiantou-copy-copy"></i>
        </div>
      </div> 
    </div>
    <!-- 轮播图 -->
    <div class="swiper-container">
     <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/b69d768f3cef93c13360a99c094cb5d0.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/4a954f769cfa0f0521f94951256bce27.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/e5c1181a28981ca0b6087d2fb3e7d9d8.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 标识 -->
    <div class="wangContainer">
      <ul class="wang">
        <li class="wang_item">
          <i class="iconfont icon-right-1"></i>
          <span>网易自营品牌</span>
        </li>
        <li class="wang_item">
          <i class="iconfont icon-right-1"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="wang_item">
          <i class="iconfont icon-right-1"></i>
          <span>48小时快速退款</span>
        </li>
      </ul>
    </div>
    <!-- 分类 -->
    <div class="categoryContainer">
      <div class="category">
        <ul class="category_all">
          <li class="category_item">
            <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
            <span>新品首发</span>
          </li>
          <li class="category_item">
            <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
            <span>新品首发</span>
          </li>
          <li class="category_item">
            <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
            <span>新品首发</span>
          </li>
          <li class="category_item">
            <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
            <span>新品首发</span>
          </li>
          <li class="category_item">
            <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
            <span>新品首发</span>
          </li>
          <li class="category_item">
            <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
            <span>新品首发</span>
          </li>
          <li class="category_item">
            <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
            <span>新品首发</span>
          </li>
          <li class="category_item">
            <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
            <span>新品首发</span>
          </li>
          <li class="category_item">
            <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
            <span>新品首发</span>
          </li>
          <li class="category_item">
            <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
            <span>新品首发</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 图片 -->
    <div class="photo">
      <img src="https://yanxuan.nosdn.127.net/f4e55920102eef630232f0f34b75cf2e.gif" alt="">
    </div>
    <!-- 便宜区 -->
    <div class="cheapContainer">
      <ul class="cheap">
        <li class="cheap_item">
          <div class="cheap_middle">
            <div class="cheap_item_top">
              <p class="cheap_item_top_one">9.9超值专区首发</p>
              <p class="cheap_item_top_two">180款爆品新定价</p>
            </div>
            <div class="cheap_item_bottom">
              <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
          </div>
        </li>
        <li class="cheap_item">
          <div class="cheap_middle">
            <div class="cheap_item_top">
              <p class="cheap_item_top_one">9.9超值专区首发</p>
              <p class="cheap_item_top_two">180款爆品新定价</p>
            </div>
            <div class="cheap_item_bottom">
              <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
          </div>
        </li>
        <li class="cheap_item">
          <div class="cheap_middle">
            <div class="cheap_item_top">
              <p class="cheap_item_top_one">9.9超值专区首发</p>
              <p class="cheap_item_top_two">180款爆品新定价</p>
            </div>
            <div class="cheap_item_bottom">
              <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
          </div>
        </li>
        <li class="cheap_item">
          <div class="cheap_middle">
            <div class="cheap_item_top">
              <p class="cheap_item_top_one">9.9超值专区首发</p>
              <p class="cheap_item_top_two">180款爆品新定价</p>
            </div>
            <div class="cheap_item_bottom">
              <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="block"></div>
    <!-- 第二个轮播图 -->
    <div class="prevate_swiperContainer">
      <div class="prevate">
        <span>私人订制</span>
      </div>
      <div class="prevate_swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <li class="swiper-slide_item">
                <img src="https://yanxuan-item.nosdn.127.net/227848eddc10ee787cbccb6f315fb963.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span>网易严选 ￥300</span>
              </li>
              <li class="swiper-slide_item">
                <img src="https://yanxuan-item.nosdn.127.net/227848eddc10ee787cbccb6f315fb963.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span>网易严选 ￥300</span>
              </li>
              <li class="swiper-slide_item">
                <img src="https://yanxuan-item.nosdn.127.net/227848eddc10ee787cbccb6f315fb963.png?imageView&quality=65&thumbnail=330x330" alt="">
                <span>网易严选 ￥300</span>
              </li>
            </div>
              <div class="swiper-slide">
                <li class="swiper-slide_item">
                  <img src="https://yanxuan-item.nosdn.127.net/894b48e0a0dc9ed949da5a995e4114ad.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span>网易严选 ￥300</span>
                </li>
                <li class="swiper-slide_item">
                  <img src="https://yanxuan-item.nosdn.127.net/227848eddc10ee787cbccb6f315fb963.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span>网易严选 ￥300</span>
                </li>
                <li class="swiper-slide_item">
                  <img src="https://yanxuan-item.nosdn.127.net/227848eddc10ee787cbccb6f315fb963.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span>网易严选 ￥300</span>
                </li>
              </div>
              <div class="swiper-slide">
                <li class="swiper-slide_item">
                  <img src="https://yanxuan-item.nosdn.127.net/227848eddc10ee787cbccb6f315fb963.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span>网易严选 ￥300</span>
                </li>
                <li class="swiper-slide_item">
                  <img src="https://yanxuan-item.nosdn.127.net/227848eddc10ee787cbccb6f315fb963.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span>网易严选 ￥300</span>
                </li>
                <li class="swiper-slide_item">
                  <img src="https://yanxuan-item.nosdn.127.net/227848eddc10ee787cbccb6f315fb963.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span>网易严选 ￥300</span>
                </li>
              </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      // this.$nextTick(
        new BScroll('.headernav_left',{
          scrollX:true,
          scrollY:false
        })
      // )
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
    
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })   
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../public/css/mixins.styl'
  .home
    width 100%
    padding-top rem(147.98)
    padding-bottom rem(98)
    /* 头部 */
    .home_header
      position fixed
      left 0
      top 0
      width 100%
      height rem(147.98)
      background #fff
      z-index 999
      .header
        position relative
        width rem(750)
        height rem(87.97)
        box-sizing border-box
        padding rem(16) rem(30)
        align-items center
        display inline-block
        .logo
          position absolute
          top rem(25)
          width rem(138)
          height rem(39.98)
          margin-right rem(20)
          display inline-block
          img 
            display block
            width 100%
            height 100%
        .search
          position relative
          top rem(-10)
          left rem(150)
          width rem(442.06)
          height rem(56)
          display inline-block
          line-height rem(41.9996)
          background #eee
          border-radius rem(10)
          .iconfont
            position absolute 
            background-size 100%
            width rem(27.98)
            height  rem(27.98)
            top rem(8)
            left  rem(50)
            font-size rem(38)
          .placeholder
            position absolute
            width rem(317.31)
            height rem(41)
            color #666
            font-size rem(28)
            top rem(7)
            left rem(120)
        .login
          position absolute
          top rem(30)
          right rem(30)
          width rem(74)
          height rem(39.98)
          line-height rem(39.98)
          text-align center
          color #b4282d
          border rem(1) solid #b4282d
          font-size rem(24)
          margin-left rem(15.98)   
          background #fff 
          border-radius rem(10)
      /* 头部导航 */
      .headernav
        position relative
        // background red
        width 100%
        height rem(60)
        .headernav_left
          width 100%
          height 100%
          z-index 99
          .nav_items
            height rem(60)
            display flex
            flex-wrap nowrap
            justify-content left 
            align-items center
            flex-shrink 0
            white-space nowrap
            float left
            padding-right rem(150)
            .nav_item 
              font-size rem(28)
              padding rem(0) rem(28)
              text-align center
              line-height rem(60)
              span 
                color #333
                display inline-block
                height rem(55)
              &:first-child
                border-bottom rem(1) solid red
        .headernav_right
          position absolute
          right rem(0)
          bottom rem(0)
          width 20%
          height rem(60)
          // background green
          background #fff
          .iconfont
            position absolute
            right rem(55)
            font-size rem(30)
            margin-top rem(15)
            display inline-block
    /* 轮播图 */
    .swiper-container
      width 100%
      height rem(370) 
      .swiper-wrapper
        .swiper-slide
          img 
            width 100%
            height rem(370)
    /* 标识 */
    .wangContainer
      width 100%
      height rem(72)
      text-align center
      .wang
        width 100%
        height rem(72)
        box-sizing border-box
        padding 0 rem(30)
        .wang_item
          font-size rem(24)
          float left
          padding-left rem(8)
          height rem(36)
          margin-top rem(25)
          margin-right rem(30)
          i 
            font-size rem(24)
            color red
          span 
            margin-left rem(8)
    /* 分类 */
    .categoryContainer
      width 100%
      .category
        // height 100%
        // box-sizing border-box
        // padding-bottom rem(32)
        .category_all
          // width 20%
          // height 100%
          display flex
          flex-wrap wrap
          // flex-direction column
          // float left
          // display inline-block
          .category_item
            // display inline-block
            // width rem(110)
            // height rem(156)
            // text-align center
            width 20%
            display flex
            flex-direction column
            justify-content space-around
            align-items center
            img 
              width rem(110)
              height rem(110)
            span
              // display inline-block
              // width rem(110)
              // height rem(36)
              font-size rem(24)
              margin rem(10) rem(20)
    /* 图片 */
    .photo
      width 100%
      height rem(126.66)
      margin-top rem(25)
      img 
        width 100%
        height 100%
    /* 便宜区 */
    .cheapContainer
      width 100%
      box-sizing border-box
      padding rem(10) rem(30) rem(30) rem(26)
      .cheap
        display flex
        flex-wrap wrap
        .cheap_item
          width 50%
          display flex
          flex-direction column
          justify-content space-around
          align-items center
          .cheap_middle
            background #eee
            padding rem(20) rem(0) rem(0) rem(30)
            margin rem(10) rem(0) rem(0) rem(10)
            .cheap_item_top
              .cheap_item_top_one
                font-size rem(32)
              .cheap_item_top_two
                font-size rem(24)
    .block
      width 100%
      height rem(20)
      background #ededed
    /* 第二个轮播图 */
    .prevate_swiperContainer
      .prevate
        height rem(99.98)
        padding 0 rem(30)
        span
          font-size rem(32)
      .prevate_swiper
        .swiper-container
          width 100%
          height rem(369.98)
          .swiper-wrapper
            .swiper-slide
              display flex
              .swiper-slide_item
                margin-left rem(20)
                display flex
                flex-direction column
                align-items center
                height rem(300)
              img 
                width rem(216)
                height rem(216)
                background #ededed
              span
                font-size rem(24)
                padding-top rem(10)
</style>
