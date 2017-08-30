<template>
  <div>
    <el-row>
      <el-col :span='3'>
        <LeftSide :content-index="contentIndex" :is-total-show="isTotalShow" :content-list="project.content.list" @on-total-show="whenShowTotal" @on-show-content="whenShowContent" />
      </el-col>
      <el-col :span='18' class='content-wrapper'>
        <BreadCrumb :projectName='project.name' />
        <TotalShow v-if="isTotalShow" :desc="project.desc" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import LeftSide from './components/leftSide.vue'
import BreadCrumb from './components/breadCrumb.vue'
import TotalShow from './components/totalShow.vue'
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
    TotalShow
  },
  computed: mapState({
    project: state => state.content.project[state.content.location.project.projectIndex],
    contentIndex: state => state.content.location.project.contentIndex,
  }),
  methods: {
    whenShowTotal() {
      this.isTotalShow = true;
    },
    whenShowContent(index) {
      this.isTotalShow = false;
      this.$store.commit("changeContentIndex", { index })
    }
  }
}
</script>

<style scoped>
.content-wrapper {
  padding: 20px 20px;
}
</style>
