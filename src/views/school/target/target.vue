<template>
  <div class="target">
    <div class="header">定位与发展目标</div>
    <div class="main">{{schoolInfo.target || '---没有数据---'}}</div>
  </div>
</template>

<script type="text/ecmascript-6">

  import { mapGetters } from 'vuex'

  export default {
    name: 'target',
    computed: {
      ...mapGetters(['schoolInfo'])
    }
  }
</script>

<style lang="stylus" scoped>
.target
  width 100%
  .header
    background-color #349DBC
    color #fff
    padding 10px
    font-weight bold
    border-radius 20px
    text-align center
    margin-bottom 20px
  .main
    line-height 2.5em
    text-indent 2em
</style>
