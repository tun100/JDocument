<template>
  <el-row class='projectManage-container'>
    <el-col :span='3' class='leftCol-wrapper'>
      <LeftSide :content-index="currentContentIndex" :is-total-show="isTotalShow" :content-list="currentContentList" @on-total-show="whenShowTotal" @on-show-content="whenShowContent" />
    </el-col>
    <el-col :span='18' class='content-wrapper'>
      <el-col :span='24'>
        <BreadCrumb :is-total-show="isTotalShow" :project-name='currentProject.name' :content-name='currentContent.name' />
      </el-col>
      <el-col :span='24'>
        <!--<TotalShow v-if="isTotalShow" :desc="currentProject.desc" />
        <ContentShow v-else :content="currentContent" />-->
        <router-view></router-view>
      </el-col>
    </el-col>
  </el-row>
</template>
<script>
import LeftSide from './components/leftSide.vue'
import BreadCrumb from './components/breadCrumb.vue'
import TotalShow from './components/totalShow.vue'
import ContentShow from './components/contentShow.vue'
import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    LeftSide,
    BreadCrumb,
    TotalShow,
    ContentShow
  },
  computed: {
    ...mapGetters({
      currentProject: "content/currentProject",
      currentContent: "content/currentContent",
      currentContentIndex: "content/currentContentIndex",
      currentContentList: "content/currentContentList",
      isTotalShow: "content/isTotalShow"
    })
  },
  methods: {
    whenShowTotal() {
      this.$store.commit("content/setTotalShow", { status: true });
    },
    whenShowContent(index) {
      this.$store.commit("content/setTotalShow", { status: false });
      this.$store.commit("content/changeContentIndex", { index })
    }
  }
}
</script>

<style lang='scss' scoped>
.projectManage-container {
  height: 100%;

  .leftCol-wrapper {
    height: 100%;
    background: #324157;
    overflow:auto;
  }
  .content-wrapper {
    padding: 20px 20px;
  }
}
</style>
