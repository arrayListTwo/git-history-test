<template>
  <div class="shengYu">
    <div class="no-data">暂无数据</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'shengYu'
  }
</script>

<style lang="stylus" scoped>
  .shengYu
    width 100%
    height 100%
    display flex
    align-items center
    .no-data
      display flex
      align-items center
      justify-content center
      width 100%
      height 100%
      text-align center
      padding 20px
      background-color #ccc
      color #828282
      font-weight 600
</style>
