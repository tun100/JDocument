<template>
  <el-row class='projectManage-container'>
    <el-col :span='3' class='leftCol-wrapper'>
      <LeftSide :content-index="currentContentIndex" :content-list="currentContentList" />
    </el-col>
    <el-col :span='21' class='content-wrapper'>
      <el-col :span='24'>
        <BreadCrumb />
      </el-col>
      <el-col :span='24'>
        <router-view></router-view>
      </el-col>
    </el-col>
  </el-row>
</template>
<script>
import LeftSide from './leftSide/index.vue'
import BreadCrumb from './breadCrumb/index.vue'
import TotalShow from './totalShow/index.vue'
import ContentShow from './contentShow/index.vue'
import const_getters from '../_const/getters'

export default {
  components: {
    LeftSide,
    BreadCrumb,
    TotalShow,
    ContentShow
  },
  computed: {
    ...const_getters
  }
}
</script>

<style lang='scss' scoped>
.projectManage-container {
  height: 100%;

  .leftCol-wrapper {
    height: 100%;
    background: #324157;
    overflow: auto;
  }
  .content-wrapper {
    padding: 20px 20px;
    height: 100%;
    overflow: auto;
  }
}
</style>
