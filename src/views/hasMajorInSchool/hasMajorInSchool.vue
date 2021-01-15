<template>
  <div class="hasMajorInSchool">
      <div class="nav">
        <div class="gao">
          <svg-icon iconClass="school" class="icon" />
          <span class="btn" @click="toSchool">高校查询</span>
        </div>
        <div class="rank">
          <svg-icon iconClass="rank" class="icon" />
          <span class="btn">专业查询</span>
        </div>
      </div>
      <el-divider />
      <div class="main">
        <div class="menu">
          <el-select v-model="schoolCode" @change="onChange">
            <el-option v-for="item in schools" :key="item.school_code"
                       :label="item.school_name" :value="item.school_code"/>
          </el-select>
          <el-menu @select="handleSelect" default-active="base">
            <el-menu-item index="rank">同专业排名</el-menu-item>
            <el-menu-item index="target">人才培养目标</el-menu-item>
            <el-menu-item index="teSe">培养特色</el-menu-item>
            <el-menu-item index="xiaoYou">典型校友</el-menu-item>
            <el-menu-item index="shengYu">社会声誉</el-menu-item>
          </el-menu>
        </div>
        <div class="info">
          <rank-s v-if="rank" />
          <target-s v-if="target" />
          <te-se-s v-if="teSe" />
          <xiao-you-s v-if="xiaoYou" />
          <sheng-yu-s v-if="shengYu" />
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import RankS from './rank/rank'
  import TargetS from './target/target'
  import TeSeS from './teSe/teSe'
  import XiaoYouS from './xiaoYou/xiaoYou'
  import ShengYuS from './shengYu/shengYu'
  import { hasMajorInSchool } from '../../api/school'

  export default {
    name: 'hasMajorInSchool',
    components: {
      RankS, TargetS, TeSeS, XiaoYouS, ShengYuS
    },
    data(){
      return {
        mCode: '',
        schoolCode: '',
        schools: [],
        rank: false,
        target: false,
        teSe: false,
        xiaoYou: false,
        shengYu: false
      }
    },
    async created () {
      this.mCode = this.$route.query.mCode
      this.schoolCode = this.$route.query.schoolCode
      this.schools = await hasMajorInSchool(this.mCode)
      this.rank = true
    },
    methods: {
      toSchool(){
        this.$router.push('/school')
      },
      onChange(code){
        console.log(code)
      },
      handleSelect (index) {
        switch (index) {
          case 'rank':
            this.rank = true
            this.target = false
            this.teSe = false
            this.xiaoYou = false
            this.shengYu = false
            break
          case 'target':
            this.rank = false
            this.target = true
            this.teSe = false
            this.xiaoYou = false
            this.shengYu = false
            break
          case 'teSe':
            this.rank = false
            this.target = false
            this.teSe = true
            this.xiaoYou = false
            this.shengYu = false
            break
          case 'xiaoYou':
            this.rank = false
            this.target = false
            this.teSe = false
            this.xiaoYou = true
            this.shengYu = false
            break
          case 'shengYu':
            this.rank = false
            this.target = false
            this.teSe = false
            this.xiaoYou = false
            this.shengYu = true
            break
        }
      },
    }
  }
</script>

<style lang="stylus" scoped>
  .hasMajorInSchool
      display flex
      flex-direction column
      margin 50px 50px 0 50px
      min-height 100vh
      .nav
        display flex
        justify-content center
        align-items center
        .gao, .rank
          font-size 20px
          background-color #349DBC
          padding 10px 50px
          border-radius 20px
          cursor pointer
          .icon
            transition all .3s
          &:hover
            .icon
              transform scale(1.5)
          .btn
            color #fff
            margin-left 15px
        .gao
          margin-right 50px
      .main
        display flex
        justify-content space-between
        width 100%
        .menu
          width 300px
          display flex
          flex-direction column
          margin-right 100px
          background-color #FF9900
          >>> .el-input__inner
            background-color #349DBC
            color #fff
          >>> .el-menu
            background-color #FF9900
            border-color #FF9900
          >>> .el-input__suffix
            color #fff

          >>> .el-button
            margin 0

        .info
          flex 1
</style>
