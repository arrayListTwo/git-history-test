<template>
  <div class="rank">
    <div class="header">专业排名</div>
    <div class="table-wrapper">
      <el-table
        :data="major"
        :stripe="true"
        :border="true"
        style="width: 100%; height: 100%">
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column
          prop="major_code"
          label="专业代码"
          width="180">
        </el-table-column>
        <el-table-column
          label="专业名称"
          width="180">
          <template slot-scope="scope">
            <p @click="hasMajorInSchool(scope.row)" class="to-rank">{{ scope.row.major_name }}</p>
          </template>
        </el-table-column>
        <el-table-column
          prop="major_rank"
          label="专业排名">
        </el-table-column>
        <el-table-column
          prop="major_num"
          label="全省专业总数">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import { mapGetters } from 'vuex'

  export default {
    name: 'rank',
    computed: {
      major () {
        return this.schoolInfo.major
      },
      ...mapGetters(['schoolInfo'])
    },
    methods: {
      hasMajorInSchool(major){
        this.$router.push({
          path: '/hasMajorInSchool',
          query: {
            mCode: major.major_code,
            schoolCode: major.school_code
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
.rank
  width 100%
  .header
    background-color #349DBC
    color #fff
    padding 10px
    font-weight bold
    border-radius 20px
    text-align center
    margin-bottom 20px
  .table-wrapper
    height calc(100% - 500px)
    >>> .has-gutter
      color #000
    >>> .el-table th
      background-color #FF9900
    .to-rank
      cursor pointer
      color #349DBC
</style>
