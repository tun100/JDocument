<template>
  <el-row class="tac">
    <el-col :span="24" class='leftSide-wrapper'>
      <el-menu :unique-opened="true" @select="handleToggleLeftNav" :default-active="menuIndex" class="el-menu-vertical-demo" theme='dark'>
        <router-link to='totalShow'>
          <el-menu-item index="totalShow">
            <i class="el-icon-star-on"></i>项目总览</el-menu-item>
        </router-link>
        <router-link to='addContent'>
          <el-menu-item index="addContent">
            <i class="el-icon-plus"></i>新增接口</el-menu-item>
        </router-link>
        <el-submenu index="content">
          <template slot="title">
            <i class="el-icon-message"></i>接口列表</template>
          <router-link v-for="(item,index) in currentContentList" :key="index" to="contentShow">
            <el-menu-item @click='handleChangeContent(index)' :index="'content'+index">{{item.name}}</el-menu-item>
          </router-link>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template> 

<script>
import const_getters from '../../_const/getters'
export default {
  methods: {
    handleChangeContent(index) {
      this.$store.commit("content/changeContentIndex", { index })
    },
    handleToggleLeftNav(index) {
      this.$store.commit("content/changeLeftNavIndex", { index })
    }
  },
  computed: {
    ...const_getters,
    menuIndex() {
      var [matchReg] = /(\w*?$)/.exec(this.$route.path)
      console.assert((matchReg !== null && matchReg !== undefined), "在ProjectManage的LeftNav组件中，匹配URL动态设置index失败，请检查!", this.$route)
      switch (matchReg) {
        case "contentShow":
          return "content" + this.currentContentIndex;
        default:
          return matchReg;
      }
    }
  }
}
</script>

<style>
.leftSide-wrapper {
  background: #324157;
}
</style>
