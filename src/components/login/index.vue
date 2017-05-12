<template>
  <div>
    <vheader :title="title">
      <router-link to="/" slot="left" class="bl-ft">返回</router-link>
    </vheader>
    <ul class="login">
      <li :class="{active: loginWay === 'login'}" @click="changeLoginWay('login')">登录</li>
      &nbsp;&nbsp;·&nbsp;&nbsp;
      <li :class="{active: loginWay !== 'login'}" @click="changeLoginWay('register')">注册</li>
    </ul>
    <div class="login-wrapper" v-if="loginWay === 'login'">
      <form action="todo">
        <input type="text" name="usrname" id="usrname" placeholder="请输入登录用户名" AUTOCOMPLETE="off" v-model="usr.usrAccount">
        <input type="password" name="usrpasswd" id="usrpasswd" placeholder="请输入登录密码" AUTOCOMPLETE="off" v-model="usr.usrPasswd" @keyup.enter="login">
        <a href="javascript:" @click.prevent="login" class="btn">登录</a>
      </form>
    </div>
    <div class="register-wrapper" v-else="loginWay === 'login'">
      <form action="todo">
        <input type="text" name="usrname" id="usrname" placeholder="请输入注册用户名" AUTOCOMPLETE="off" v-model="registerUsr.usrName">
        <input type="password" name="usrpasswd" id="usrpasswd" placeholder="请输入密码" AUTOCOMPLETE="off" @keyup.enter="login" v-model="registerUsr.psswd">
        <input type="password" name="cfmpasswd" id="cfmpasswd" placeholder="请确认密码" AUTOCOMPLETE="off" @keyup.enter="login" v-model="registerUsr.cfmpsswd">
        <a href="javascript:" @click.prevent="register" class="btn">注册</a>
      </form>
    </div>
  </div>
  
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { USR_SIGNIN } from '@/store/usr'
import vheader from '../header/header'
export default {
  name: 'login',
  data () {
    return {
      usr: {
        usrAccount: '',
        usrPasswd: ''
      },
      registerUsr: {
        usrName: '',
        psswd: '',
        cfmpsswd: ''
      }
    }
  },
  components: {
    vheader
  },
  created () {
    console.log(this.loginWay)
  },
  computed: {
    ...mapState({
      'loginWay': state => state.loginWay.loginWay
    }),
    title () {
      return this.$store.state.loginWay.loginWay === 'login' ? '登录' : '注册'
    }
  },
  methods: {
    ...mapActions([USR_SIGNIN]),
    ...mapActions(['changeLoginWay']),
    login () {
      this.$http.post('/loginServer', this.usr).then(res => {
        // 本该在这里做登录成功逻辑的，但是没做后端，故在catch中完成
        console.log('登录成功')
      }).catch(res => {
        if (this.usr.usrAccount && this.usr.usrPasswd) {
          this.USR_SIGNIN(this.usr)
          this.$router.push({ path: '/' })
        }
      })
    },
    register () {
      for (let i in this.registerUsr) {
        if (this.registerUsr[i] === '') {
          alert('请输入完整！')
          return
        }
      }
      if (this.registerUsr.psswd !== this.registerUsr.cfmpsswd) {
        alert('两次密码输入不一致，请重新输入！')
        return
      }
      this.$http.post('/user/register', this.registerUsr).then(res => {
        alert('注册成功')
        this.usr.usrAccount = this.registerUsr.usrName
        this.usr.password = this.registerUsr.psswd
        this.USR_SIGNIN(this.usr)
        this.$router.push({ path: '/' })
      }).catch(res => {
        alert('注册成功')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
a {
  color: #000;
  text-decoration: none;
}
.login {
  * {
    display: inline-block;
    color: gray;
  }
  width: 100px;
  margin: 0 auto;
  li {
    cursor: pointer;
  }
  .active {
    color: orangered;
  }
}
.login-wrapper,
.register-wrapper {
  width: 500px;
  box-sizing: border-box;
  padding: 10px;
  margin: 20px auto;
  border: 1px solid #ccc;
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0 0 2px #cfcfcf;
  input {
    display: block;
    width: 200px;
    height: 25px;
    line-height: 25px;
    margin: 10px auto;
    padding-left: 5px;
  }
  .btn {
    display: block;
    width: 60px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #52caf3;
    background-color: #52caf3;
    border-radius: 2px;
    color: #fff;
    &:hover {
      background-color: darken(#52caf3, 10%)
    }
  }
}
</style>
