<template>
  <div class="school-default" v-if="schoolInfo">
    <div class="header">
      <div>
        <span>校训</span>
        <span>---没有数据---</span>
      </div>
      <div class="main">
        <div class="item">
          <div class="title">办学类型</div>
          <div class="content">{{schoolInfo.school_type}}</div>
        </div>
        <div class="item">
          <div class="title">学校性质</div>
          <div class="content">{{schoolInfo.school_nature}}</div>
        </div>
        <div class="item">
          <div class="title">主管部门</div>
          <div class="content">{{schoolInfo.charge_dept}}</div>
        </div>
        <div class="item">
          <div class="title">开办本科教育年份</div>
          <div class="content">{{schoolInfo.undergraduate_year}}</div>
        </div>
        <div class="item">
          <div class="title">学校网址</div>
          <a :href="schoolInfo.website" target="_blank">{{schoolInfo.website}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import { mapGetters } from 'vuex'

  export default {
    name: 'school-default',
    computed: {
      ...mapGetters(['schoolInfo'])
    }
  }
</script>

<style lang="stylus" scoped>
.school-default
  .title
    width 100%
    background-color #0099FF
    color #fff
    font-weight bold
    padding 10px
    letter-spacing 0.2em
</style>
