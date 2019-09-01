<template>
  <div class="classify">
    <!-- 头部 -->
    <div class="headerContainer" @click="$router.push('/search')">
      <div class="header">
        <div class="header_middle"> 
          <i class="iconfont icon-sousuo"></i>
          <span class="placeholder">搜索商品</span>
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <div class="listContainer">
      <!-- 列表左侧 -->
      <div class="listContainer_left" ref="listContainer_left">
        <div class="list_left">
          <ul class="list_left_item">
            <li class="list_left_items" v-for="(classify_item, index) in classify" :key="index">
              <span>{{classify_item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 列表右侧 -->
      <div class="listContainer_rightContainer" ref="right">
        <div class="listContainer_right">
          <div class="listContainer_right_top">
            <img src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196" alt="">
          </div>
          <div class="listContainer_right_bottom">
            <ul class="listContainer_right_item">
              <li class="listContainer_right_items" v-for="(categoryright_item, index) in categoryright" :key="index">
                <img :src='categoryright_item.bannerUrl' alt="">
                <div class="span">{{categoryright_item.name}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$nextTick(()=>{
        new BScroll(this.$refs.listContainer_left,{
            scrollY:true
        })
        new BScroll(this.$refs.right,{
            scrollY:true
        })

      })

      this.$store.dispatch('getCategoryList')

      this.$store.dispatch('getCategoryListRight')
    },
    computed:{
      ...mapState({
        classify:state=>state.classify.classify
      }),

      ...mapState({
        categoryright:state=>state.classify.categoryright
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../public/css/mixins.styl'
  .classify
    width 100%
    /* 头部 */
    .headerContainer
      position fixed
      z-index 99
      height rem(87.98)
      border-bottom rem(1) solid #ededed
      background white
      .header
        height 100%
        padding 0 rem(30)
        display: flex;
        align-items: center;
        justify-content: center;
        .header_middle
          width rem(690)
          height rem(56)
          display flex
          align-items center
          justify-content center
          background #ededed
          .iconfont
            font-size rem(40)
            margin-right rem(10)
            display block
            color #666
          .placeholder
            font-size rem(27.99)
            color #666
    /* 列表 */
    .listContainer
      width 100%
      height 100%
      padding-top rem(89)
      /* 列表左侧 */
      .listContainer_left
        float left
        width rem(162)
        // background green
        height rem(1000)
        .list_left
          min-height rem(1001)
          .list_left_item
            padding rem(40) 0
            .list_left_items
              display flex
              align-items center
              justify-content center
              height rem(50)
              margin-top rem(40)
              &:nth-child(1)
                margin-top 0
                border-left rem(5) solid #ab2b2b
              span 
                font-size rem(28)
      /* 列表右侧 */
      .listContainer_rightContainer
        padding rem(30) rem(30) rem(30) rem(21)
        margin-left rem(162)
        height rem(1000px)
        // background blue
        .listContainer_right
          min-height rem(1001px)
          .listContainer_right_top
            img 
              width 100%
          .listContainer_right_bottom
            .listContainer_right_item
              display flex
              flex-wrap wrap
              .listContainer_right_items
                display flex
                flex-direction column
                align-items center
                justify-content space-around
                width rem(144)
                height rem(216)
                margin-right rem(34)
                img
                  width rem(144)
                  height rem(144)
                .span 
                  font-size rem(24)
                  height rem(72)
                  text-align center
                
</style>
