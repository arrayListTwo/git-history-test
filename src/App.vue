<template>
  <div id="app">
    <div class="bg-top"></div>
    <div class="header-wrapper">
      <span class="header">山东省高等院校专业状态监测数据库</span>
    </div>
    <div class="main">
      <el-scrollbar
        style="height:100%"
        :wrap-class="wrapClass"
        :view-style="viewStyle"
        :native="native"
        :tag="tag"
        :noresize="noresize">
        <router-view />
      </el-scrollbar>
    </div>
    <div class="footer">
      <span>山东省教育厅</span>
      <span>山东省高等教育研究院</span>
    </div>
  </div>
</template>

<script>

  import { schools } from './api/school'

  export default {
    name: 'app',
    data(){
      return {
        //滚动区域层class
        wrapClass:{
          wrapClass:true
        },
        viewStyle:{
          boxSizing:'border-box',
          height: '100%',
          padding: '20px 50px'
        },
        // native属性：如果为true就不显示el的bar，也就是el模拟出来的滚动条，如果为false就显示模拟的滚动条
        native:false,
        // tag 渲染出来的标签
        tag:'section',
        // noresize 是否刷新滚动条大小
        noresize:true
      }
    }
  }
</script>

<style lang="stylus">
  *
    padding 0
    margin 0
    box-sizing border-box
  html, body
    height 100%
    width 100%
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    height 100%
    width 100%
    overflow hidden
    background url("common/img/bg-earth.jpg") no-repeat center center
    .bg-top
      position fixed
      top 0
      left 0
      right 0
      bottom 0
      background-color rgba(188, 204, 232, 0.5)
    .header-wrapper
      text-align center
      padding-top 20px
      .header
        display inline-block
        padding 10px
        background-color #005aab
        color #fff
        font-weight bold
        font-size 22px
        letter-spacing 0.2em

    .main
      margin-bottom 40px
      height calc(100% - 120px)
      .wrapClass
        overflow-x hidden
    .footer
      position fixed
      bottom 20px
      left 0
      right 0
      padding 10px 0 0
      color #315490
      text-align center
      font-weight 600
      span
        margin-right 30px
</style>
