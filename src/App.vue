<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import vheader from './components/header/header'
// import {mapState} from 'vuex'
export default {
  name: 'app',
  components: {
    vheader
  },
  // computed: mapState({ usrAccount: state => state.usr.usrAccount })
  computed: {
    usrAccount () {
      return this.$store.state.usr.usrAccount ? this.$store.state.usr.usrAccount : ''
    }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  .bl-ft {
    color: #0271bc;
    text-decoration: none;
  }
}
</style>
