<template>
  <div class="school-default" v-if="schoolInfo">
    <div class="header">
      <div style="display: none">
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
          <div class="content">{{schoolInfo.undergraduate_year}}年</div>
        </div>
        <div class="item">
          <div class="title">学校网址</div>
          <a class="content" :href="schoolInfo.website" target="_blank">{{schoolInfo.website}}</a>
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
    background-color #349DBC
    color #fff
    font-weight bold
    padding 10px
    letter-spacing 0.2em
    border-radius 20px
    padding-left 20px
    text-align center
  .content
    display block
    padding 20px
</style>
