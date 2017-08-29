<template>
  <div>
    <el-row>
      <el-col :span='3'>
        <LeftSide/>
      </el-col>
      <el-col :span='18' class='content-wrapper'>
        <BreadCrumb/>
        {{project}}
      </el-col>
    </el-row>
  </div>
</template>
<script>
import LeftSide from './components/leftSide.vue'
import BreadCrumb from './components/breadCrumb.vue'
export default {
  data(){
    return {
      projectIndex: 0
    }    
  },
  components: {
    LeftSide,
    BreadCrumb
  },
  computed: {
    project() {
      var currentProject = this.$store.state.content.project[this.$data.projectIndex]
      console.log(currentProject,this.$data.projectIndex)
      return currentProject || {}
    }
  },
  beforeRouteEnter(to,from,next){
    var {projectIndex} = to.query;
    next(vm => {
      vm.$data.projectIndex = parseInt(projectIndex);
    });
  },
  beforeRouteUpdate(to,from,next){
    var {projectIndex} = to.query;
    this.$data.projectIndex = parseInt(projectIndex)
    next();
  }
}
</script>

<style scoped>
  .content-wrapper{
    padding: 20px 20px;
  }
</style>
