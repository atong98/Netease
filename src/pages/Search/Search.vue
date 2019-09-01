<template>
  <div class="searchbox">
    <div class="searchcontent">
      <header class="title">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" :placeholder="placeholder.keyword" v-model="keywords">
        <span class="close" @click="$router.back()">取消</span>
      </header>
      <div class="hot_item" v-show="!keywords">
        <p class="hot" >热门搜索</p>
        <!-- <nav class="hotlist" v-if="!searchwords">
          <a :class="{active:item.highlight}" v-for="(item,index) in keywordPrefixGuide" :key="index" :href="item.schemeUrl">{{item.keyword}}</a>
        </nav> -->
        <ul class="hotlistguide">
          <li class="hotlistguideitem" v-for="(hotword_item, index) in hotword" :key="index">
            {{hotword_item.keyword}}
          </li>
        </ul>
      </div>
      <div class="list" v-show="keywords">
        <ul class="list_item">
          <li class="list_items" v-for="(search_item, index) in search" :key="index">{{search_item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        keywords:''
      }
    },

    mounted(){
      this.$store.dispatch('getKeyword')
      this.$store.dispatch('getHotKeyword')
    },
    
    computed: {
      ...mapState({
        search:state=>state.search.search
      }),
      ...mapState({
        placeholder:state=>state.search.placeholder
      }),
      ...mapState({
        hotword:state=>state.search.hotword
      })
    },

    watch:{
      keywords(){
        this.$store.dispatch('getKeywordSearch',this.keywords)
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../public/css/mixins.styl'
  .searchbox 
    width 100% 
    height 100% 
    background-color #eee
    .searchcontent
      position fixed
      top 0
      background #fff
      width 100% 
      box-sizing border-box
      padding 0 rem(30)
      .title 
        position relative
        // bottom-border-1px(#333)
        display flex
        align-items center
        padding-top rem(15)
        input 
          outline none
          font-size rem(30)
          margin-right rem(20)
          border-radius rem(8)
          width rem(600)
          height rem(60)
          background-color #eee
          padding-left rem(70)
        .close
          font-size rem(30)
          width rem(75)
        .icon-sousuo
          position absolute
          top rem(30)
          left rem(15)
          font-size rem(30)
      .hot_item
        .hot 
          font-size rem(30)
          color #999
          margin rem(30) 0
          // .hotlist
          //   font-size rem(26)
          //   padding-bottom rem(30)
          //   a 
          //     padding rem(8) rem(15)
          //     border rem(2) solid #333
          //     border-radius rem(5)
          //     display inline-block
          //     margin rem(15) rem(18)
          //     &.active 
          //       border rem(2) solid $red
          //       color $red
        .hotlistguide
          width 100% 
          .hotlistguideitem
            height rem(47)
            font-size rem(24)
            display: inline-block;
            border: 1px solid #333;
            line-height: 47px;
            text-align: center;
            margin: 0 32px 32px 0;
            padding: 0 15px;
      .list
        .list_item
          .list_items
            font-size rem(27)
            height rem(104)
            line-height rem(104)
            border-bottom rem(2) solid #eee
</style>