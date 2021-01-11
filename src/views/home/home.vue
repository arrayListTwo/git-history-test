<template>
  <div class="home">
    <div class="center">
      <el-button @click="toSchool" type="primary">高校查询</el-button>
      <el-button type="primary">专业查询</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    toSchool(){
      this.$router.push('/school')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    height 100%
    width 100%
    .center
      text-align center
      position absolute
      top 50%
      left 50%
      transform translate3d(-50%, -50%, 0)
</style>
