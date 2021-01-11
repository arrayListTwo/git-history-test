<template>
  <div class="school">
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
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import { mapMutations } from 'vuex'
  import { schools, schoolInfo, schoolGuiding, schoolMajorScore } from '../../api/school'
  import { find } from 'lodash'

  export default {
    name: 'school',
    data () {
      return {
        schools: [],
        schoolCode: null
      }
    },
    created () {
      this._getSchools()
    },
    methods: {
      onChange (school_code) {
        this.schoolCode = school_code
        this._getSchoolInfo()
      },
      async _getSchools () {
        this.schools = await schools()
        this.schoolCode = this.schools[0].school_code
        await this._getSchoolInfo()
        await this.$router.push('/school/base')
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
            this.$router.push('/school/base')
            break
          case 'info':
            this.$router.push('/school/info')
            break
          case 'target':
            this.$router.push('/school/target')
            break
          case 'rank':
            this.$router.push('/school/rank')
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

    .menu
      width 300px
      display flex
      flex-direction column

      >>> .el-button
        margin 0

    .main
      flex 1
</style>
