<template>
  <div class="container">
    <Header/>
    <!-- 手机号登录 -->
    <div v-if="$route.params.id==='1'" class="phoneLoginContainer">
      <div class="phoneLogin_top"> 
        <div class="photo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="phone_login">
          <div class="phone">
            <div class="input">
              <input v-model="phone" maxlength="11" type="text" placeholder="请输入手机号" name="phone" v-validate="'required|mobile'">
            </div>
            <span style="color:red;" v-show="errors.has('phone')">{{errors.first('phone')}}</span>
          </div>
          <div class="sms">
            <input type="text" maxlength="6" placeholder="请输入短信验证码" name="code" v-validate="{required:true,regex:/^1\d{5}$/}">
            <button class="node" :class="{right_phone_number:isRightPhone}" :disabled="!isRightPhone || computeTime>0" @click="sendCode">{{computeTime>0?`短信验证码已发送(${computeTime})`:'获取验证码'}}</button>
          </div>
          <span style="color:red;" v-show="errors.has('code')">{{errors.first('code')}}</span>
          <div class="questionContainer">
            <span class="question">遇到问题</span>
            <span class="nodeLogin">使用密码验证登录</span>
          </div>
          <div class="login" @click.prevent="login">
            <a>登录</a>
          </div>
          <div class="anthor" @click="$router.push('/personal')">
            <span>其他登录方式</span>
            <i class="iconfont icon-arrow-right-copy"></i>
          </div>
        </div>
      </div>
    </div>  
    <!-- 邮箱登录 -->
    <div v-if="$route.params.id==='2'" class="emailLoginContainer">
      <div class="emailLogin_top"> 
        <div class="photo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="email_login">
          <div class="email">
            <input type="text" placeholder="邮箱账号">
          </div>
          <div class="password">
            <input type="text" placeholder="密码">
          </div>
          <div class="account">
            <span class="number">注册账号</span>
            <span class="forget">忘记密码</span>
          </div>
          <div class="login">
            <a>登录</a>
          </div>
          <div class="anthor" @click="$router.push('/personal')">
            <span>其他登录方式</span>
            <i class="iconfont icon-arrow-right-copy"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../../components/Header/Header'
import { setInterval, clearInterval } from 'timers';
  export default {
    data(){
      return{
        phone:'',
        computeTime:0
      }
    },
    computed:{
      isRightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      sendCode(){
        this.computeTime = 30
        const intervalId = setInterval(() =>{
          this.computeTime--
          if(this.computeTime === 0){
            clearInterval(intervalId)
          }
        },1000)
      },
      // 登陆
      async login () {
        let names
        const {loginWay} = this
        if(loginWay) {
          names = ['phone', 'code']
        } 

        const success = await this.$validator.validateAll(names)
        if(success) {
          alert('表单验证通过, 发送登陆请求')
        }
      },


    },
    components:{
      Header
    },

    
  }

  //const success = await this.$validator.validateAll(names) // 对指定的所有表单项进行验证
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../public/css/mixins.styl'
  .container
    width 100%
    /* 手机号登录 */
    .phoneLoginContainer
      .phoneLogin_top
        .photo
          margin-top rem(56)
          text-align center
          img 
            width rem(192)
            height rem(64)
        .phone_login
          margin-top rem(56)
          padding 0 rem(40)
          .phone
            font-size rem(28)
            padding rem(28) 0
            .input 
              outline none 
              width rem(600)
              height rem(42)
              border-bottom rem(2) solid #f4f4f4
              input 
                outline none 
                width rem(600)
                height rem(42)
          span 
            font-size rem(28)
          .sms
            font-size rem(28)
            padding rem(60) 0 rem(28) 0
            display flex
            justify-content space-between
            border-bottom rem(2) solid #f4f4f4
            input 
              outline none 
              height rem(42)
            .node
              outline none 
              font-size rem(28)
              color #ccc
              background transparent
              &.right_phone_number
                color black
          .questionContainer
            display flex
            justify-content space-between
            padding rem(40) 0
            .question
              font-size rem(28)
              color #7d7d7d
            .nodeLogin
              font-size rem(28)
              color #333
          .login
            height rem(92)
            background  #dd1a21
            text-align center
            a
              color white
              font-size rem(28)
          .anthor
            margin-top rem(46)
            text-align center
            span 
              font-size rem(28)
            .iconfont
              font-size rem(28)
    /* 邮箱登录 */
    .emailLoginContainer
      .emailLogin_top
        .photo
          margin-top rem(56)
          text-align center
          img 
            width rem(192)
            height rem(64)
        .email_login
          margin-top rem(56)
          padding 0 rem(40)
          .email
            font-size rem(28)
            padding rem(28) 0
            border-bottom rem(2) solid #f4f4f4
          .password
            font-size rem(28)
            padding rem(60) 0 rem(28) 0
            display flex
            justify-content space-between
            border-bottom rem(2) solid #f4f4f4
          .account
            display flex
            justify-content space-between
            padding rem(40) 0
            .number
              font-size rem(28)
              color #7d7d7d
            .forget
              font-size rem(28)
              color #333
          .login
            height rem(92)
            background  #dd1a21
            text-align center
            a
              color white
              font-size rem(28)
          .anthor
            margin-top rem(46)
            text-align center
            span 
              font-size rem(28)
            .iconfont
              font-size rem(28)
</style>
