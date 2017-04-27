<template>
  <div>
    <vheader title="登录">
      <router-link to="/" slot="left" class="bl-ft">返回</router-link>
    </vheader>
    <div class="login-wrapper">
      <form action="todo">
        <input type="text" name="usrname" id="usrname" placeholder="请输入用户名" AUTOCOMPLETE="off" v-model="usr.usrAccount">
        <input type="password" name="usrpasswd" id="usrpasswd" placeholder="请输入密码" AUTOCOMPLETE="off" v-model="usr.usrPasswd" @keyup.enter="login">
        <a href="javascript:" @click.prevent="login" class="btn">确定</a>
      </form>
    </div>
  </div>
  
</template>

<script>
import { mapActions } from 'vuex'
import { USR_SIGNIN } from '@/store/usr'
import vheader from '../header/header'
export default {
  name: 'login',
  data () {
    return {
      usr: {
        usrAccount: '',
        usrPasswd: ''
      }
    }
  },
  components: {
    vheader
  },
  methods: {
    ...mapActions([USR_SIGNIN]),
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
.login-wrapper {
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
