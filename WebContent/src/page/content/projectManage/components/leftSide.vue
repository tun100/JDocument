<template>
  <el-row class="tac">
    <el-col :span="24" class='leftSide-wrapper'>
      <el-menu :unique-opened="true" :default-active="menuIndex" class="el-menu-vertical-demo" theme='dark'>
        <router-link to='totalShow'>
          <el-menu-item index="totalShow" @click='handleTotalShow'>
            <i class="el-icon-star-on"></i>项目总览</el-menu-item>
        </router-link>
        <router-link to='addContent'>
          <el-menu-item index="addNewInterface" @click='handleTotalShow'>
            <i class="el-icon-star-on"></i>新增接口</el-menu-item>
        </router-link>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>接口列表</template>
          <router-link v-for="(item,index) in contentList" :key="index" to="contentShow">
            <el-menu-item @click='handleChangeContent(index)' :index="'content'+index">{{item.name}}</el-menu-item>
          </router-link>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ['contentList', 'contentIndex', 'isTotalShow'],
  methods: {
    handleTotalShow() {
      this.$emit("on-total-show")
    },
    handleChangeContent(index) {
      this.$emit("on-show-content", index)
    }
  },
  computed: {
    menuIndex() {
      if (this.$props.isTotalShow === true) {
        return "totalShow"
      } else {
        return "content" + this.$props.contentIndex;
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
