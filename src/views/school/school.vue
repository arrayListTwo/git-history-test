<template>
  <div class="school">
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
          <el-menu-item index="base">基本信息</el-menu-item>
          <el-menu-item index="info">学校简介</el-menu-item>
          <el-menu-item index="target">定位与发展目标</el-menu-item>
          <el-menu-item index="rank">专业排名</el-menu-item>
        </el-menu>
      </div>
      <div class="info">
        <base-s v-if="base" />
        <info-s v-if="info" />
        <target-s v-if="target" />
        <rank-s v-if="rank" />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import BaseS from './base/base'
  import InfoS from './info/info'
  import TargetS from './target/target'
  import RankS from './rank/rank'
  import { mapMutations } from 'vuex'
  import { schools, schoolInfo, schoolGuiding, schoolMajorScore } from '../../api/school'
  import { find } from 'lodash'

  export default {
    name: 'school',
    components: {
      BaseS, InfoS, TargetS, RankS
    },
    data () {
      return {
        schools: [],
        schoolCode: null,
        base: false,
        info: false,
        target: false,
        rank: false
      }
    },
    created () {
      this._getSchools()
    },
    methods: {
      toSchool(){
        this.$router.push('/school')
      },
      onChange (school_code) {
        this.schoolCode = school_code
        this._getSchoolInfo()
      },
      async _getSchools () {
        this.schools = await schools()
        this.schoolCode = this.schools[0].school_code
        await this._getSchoolInfo()
        this.base = true
      },
      async _getSchoolInfo () {
        // 学校基本信息
        let school = find(this.schools, ['school_code', this.schoolCode])
        let info = await schoolInfo(school.id)
        // 定位与发展目标
        let guiding = await schoolGuiding(this.schoolCode)
        // 学校专业
        let majorRank = await schoolMajorScore(this.schoolCode)
        this.setSchoolInfo(Object.assign({}, info,{ major : majorRank }, {target: guiding.target}))
      },
      handleSelect (index) {
        switch (index) {
          case 'base':
            this.base = true
            this.info = false
            this.target = false
            this.rank = false
            break
          case 'info':
            this.base = false
            this.info = true
            this.target = false
            this.rank = false
            break
          case 'target':
            this.base = false
            this.info = false
            this.target = true
            this.rank = false
            break
          case 'rank':
            this.base = false
            this.info = false
            this.target = false
            this.rank = true
            break
        }
      },
      ...mapMutations('school', {
        setSchoolInfo: 'SET_SCHOOL_INFO'
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .school
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
