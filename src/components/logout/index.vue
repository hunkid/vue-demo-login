<template>
<div>
  <vheader title="退出">
  </vheader>
  <div class="confirm-wrapper">
    <span>您确认要退出吗？</span>
    <div class="btn-wrapper">
      <a href="javascript:" class="btn" @click="logout">确认</a>
      <a href="javascript:" class="btn" @click="back">取消</a>
    </div>
  </div>
</div>
</template>

<script>
import vheader from '../header/header'
import {mapActions} from 'vuex'
import {USR_SIGNOUT} from '@/store/usr'
export default {
  components: {
    vheader
  },
  methods: {
    ...mapActions([USR_SIGNOUT]),
    logout () {
      this.USR_SIGNOUT()
      this.$router.push('/')
    },
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
  .confirm-wrapper {
    width: 500px;
    box-sizing: border-box;
    padding: 10px;
    margin: 20px auto;
    border: 1px solid #ccc;
    background-color: #eee;
    border-radius: 10px;
    box-shadow: 0 0 2px #cfcfcf;
    text-align: center;
    .btn-wrapper {
      margin-top: 10px;
      .btn {
        text-decoration: none;
        display: inline-block;
        width: 60px;
        margin: 0 auto;
        text-align: center;
        border: 1px solid #52caf3;
        background-color: #52caf3;
        border-radius: 5px;
        color: #fff;
        &:hover {
          background-color: darken(#52caf3, 10%)
        }
      }
    }
    
  }
</style>

