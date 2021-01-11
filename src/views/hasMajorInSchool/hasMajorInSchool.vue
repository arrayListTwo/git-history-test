<template>
  <div class="hasMajorInSchool">
    <div class="menu">
      <el-select v-model="schoolCode" @change="onChange">
        <el-option v-for="item in schools" :key="item.school_code"
                   :label="item.school_name" :value="item.school_code"/>
      </el-select>
      <el-menu @select="handleSelect" default-active="rank">
        <el-menu-item index="rank">同专业排名</el-menu-item>
        <el-menu-item index="target">人才培养目标</el-menu-item>
        <el-menu-item index="teSe">培养特色</el-menu-item>
        <el-menu-item index="xiaoYou">典型校友</el-menu-item>
        <el-menu-item index="shengYu">社会声誉</el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import { hasMajorInSchool } from '../../api/school'

  export default {
    name: 'hasMajorInSchool',
    data(){
      return {
        mCode: '',
        schoolCode: '',
        schools: []
      }
    },
    async created () {
      this.mCode = this.$route.query.mCode
      this.schoolCode = this.$route.query.schoolCode
      this.schools = await hasMajorInSchool(this.mCode)
    },
    methods: {
      onChange(code){
        console.log(code)
      },
      handleSelect(name){
        console.log(name)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .hasMajorInSchool
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
