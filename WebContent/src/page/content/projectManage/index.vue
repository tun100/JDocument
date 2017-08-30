<template>
  <div>
    <el-row>
      <el-col :span='3'>
        <LeftSide :content-index="contentIndex" :is-total-show="isTotalShow" :content-list="project.content.list" @on-total-show="whenShowTotal" @on-show-content="whenShowContent" />
      </el-col>
      <el-col :span='18' class='content-wrapper'>
        <el-col :span='24'>
          <BreadCrumb :is-total-show="isTotalShow" :project-name='project.name' :content-name='content.name' />
        </el-col>
        <el-col :span='24'>
          <TotalShow v-if="isTotalShow" :desc="content.desc" />
          <ContentShow v-else :content="content" />
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import LeftSide from './components/leftSide.vue'
import BreadCrumb from './components/breadCrumb.vue'
import TotalShow from './components/totalShow.vue'
import ContentShow from './components/contentShow.vue'
import { mapState } from 'vuex';

export default {
  data() {
    return {
      isTotalShow: false
    }
  },
  components: {
    LeftSide,
    BreadCrumb,
    TotalShow,
    ContentShow
  },
  computed: {
    ...mapState({
      project: state => state.content.project[state.content.location.project.projectIndex],
      content: state => state.content.project[state.content.location.project.projectIndex].content.list[state.content.location.project.contentIndex],
      contentIndex: state => state.content.location.project.contentIndex,
    })
  },
  methods: {
    whenShowTotal() {
      this.isTotalShow = true;
    },
    whenShowContent(index) {
      this.isTotalShow = false;
      console.log(this.$store)
      this.$store.commit("content/changeContentIndex", { index })
    }
  }
}
</script>

<style scoped>
.content-wrapper {
  padding: 20px 20px;
}
</style>
