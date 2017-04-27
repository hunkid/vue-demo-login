<template>
  <div>
    <vheader title="首页">
      <router-link to="/login" slot="right" class="bl-ft" v-if="!usrAccount">登录</router-link>
      <router-link :to="usrInfoLink" slot="left" class="bl-ft" v-if="usrAccount">{{usrAccount}}</router-link>
      <router-link to="/logout" slot="right" class="bl-ft" v-if="usrAccount">退出</router-link>
    </vheader>
    <div class="main">
      <div v-if="!usrAccount">
        <h1>您尚未登录</h1>
      </div>
      <div v-else>
        <h3>相见争如不见</h3>
        <h3>有情何似无情</h3>
      </div>
    </div>
  </div>
</template>

<script>
import vheader from '../header/header'
export default {
  name: 'root',
  data () {
    return {
      usrInfoLink: '/usr/' + this.$store.state.usr.usrAccount
    }
  },
  components: {
    vheader: vheader
  },
  computed: {
    usrAccount () {
      return this.$store.state.usr.usrAccount ? this.$store.state.usr.usrAccount : ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    width: 160px;
    margin: 20px auto;
  }
</style>
