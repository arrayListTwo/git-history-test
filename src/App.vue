<template>
  <div id="app">
    <div class="header-wrapper">
      <span class="header">山东省高等院校专业状态监测数据库</span>
    </div>
<!--      <el-scrollbar-->
<!--        style="height:100%"-->
<!--        :wrap-class="wrapClass"-->
<!--        :view-style="viewStyle"-->
<!--        :native="native"-->
<!--        :tag="tag"-->
<!--        :noresize="noresize">-->
<!--        <router-view />-->
<!--      </el-scrollbar>-->
    <div class="main-wrapper">
      <router-view />
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
  a
    text-decoration none
    &:link, &:visited, &:hover, &:active, &:focus
      text-decoration none
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
      .wrapClass
        overflow-x hidden
    .header-wrapper
      text-align center
      padding 20px
      display flex
      align-items center
      justify-content center
      background-color #008EB3
      .header
        display inline-block
        color #fff
        font-weight bold
        font-size 26px
        letter-spacing 0.2em
    .main-wrapper
      min-height 100vh
    .footer
      padding 10px 0 0
      text-align center
      font-weight 600
      height 200px
      background-color #333333
      display flex
      align-items center
      justify-content center
      color #ff
      span
        margin-right 30px
</style>
