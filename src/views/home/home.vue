<template>
  <div class="home">
    <div class="main">
      <div class="center">
        <div class="school" @click="toSchool">
          <svg-icon iconClass="school" class="icon" />
          <p class="dec">这里可以添加一段对高校查询的描述,
            这里可以添加一段对高校查询的描述,
            这里可以添加一段对高校查询的描述
          </p>
          <span class="btn">高校查询</span>
        </div>
        <div class="rank">
          <svg-icon iconClass="rank" class="icon" />
          <p class="dec">这里可以添加一段对专业查询的描述,
            这里可以添加一段对专业查询的描述,
            这里可以添加一段对专业查询的描述
          </p>
          <span class="btn">专业查询</span>
        </div>
      </div>
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
    width 100%
    background url("../../common/img/bg-home.jpg") no-repeat
    .main
      margin-top -100px
      min-height 100vh
      display flex
      .center
        display flex
        align-items center
        justify-content center
        .school, .rank
          width 35%
          height 50%
          background-color #fff
          opacity 0.8
          display flex
          align-items center
          justify-content center
          flex-direction column
          padding 20px 40px
          border-radius 40px
          cursor pointer
          &:hover
            opacity 1
            .icon
              transform scale(1.5)
          .icon
            font-size 80px
            margin-bottom 40px
            transition all .3s
          .dec
            color #666666
            text-indent 2em
            line-height 2em
          .btn
            display inline-block
            padding 10px 50px
            background-color #008EB3
            color #fff
            border-radius 20px
            margin-top 40px
            transition all .3s
            &:hover
              transform scale(1.3)
        .school
          margin-right 10%
</style>
