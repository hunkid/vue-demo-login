<template>
  <div>
    <vheader :title="name">
      <router-link to="/" slot="left" class="bl-ft" v-if="usrAccount">返回</router-link>
      <router-link to="/logout" slot="right" class="bl-ft" v-if="usrAccount">请退出</router-link>
    </vheader>
    <div>
      <h1>Welcome ! {{name}}</h1>
    </div>
  </div>
  
</template>

<script>
  import {mapState} from 'vuex'
  import vheader from '../header/header'
  export default {
    name: 'usrinfo',
    data () {
      return {
        name: this.$route.params.usrname
      }
    },
    components: {
      vheader
    },
    computed: mapState({
      usrAccount: state => state.usr.usrAccount
    })
  }
</script>

<style lang="scss" scoped>
h1 {
  width: 500px;
  margin: 20px auto;
  background-color: #eee;
}
</style>
