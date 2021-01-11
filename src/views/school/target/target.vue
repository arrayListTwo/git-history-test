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

</style>
