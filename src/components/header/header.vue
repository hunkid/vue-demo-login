<template>
  <header>
    <div class="f-l">
      <slot name="left"></slot>
    </div>
    {{title}}
    <div class="f-r">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'header',
    computed: mapState({
      usrAccount: state => state.usr.usrAccount
    }),
    props: {
      title: {
        required: true,
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
header {
  text-align: center;
  background-color: #f5f5f5;
  font-size: 14px;
  height: 25px;
  line-height: 25px;
  .f-r {
    float:right;
    display: block;
    
  }
  .f-l {
    left: 0;
    display: block;
    position: absolute;
  }
}
</style>

