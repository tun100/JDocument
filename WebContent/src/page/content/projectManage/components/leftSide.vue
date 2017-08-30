<template>
  <el-row class="tac">
    <el-col :span="24" class='leftSide-wrapper'>
      <el-menu :unique-opened="true" :default-active="menuIndex" class="el-menu-vertical-demo" theme='dark'>
        <el-menu-item index="totalShow" @click='handleTotalShow'>
          <i class="el-icon-menu"></i>项目总览</el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>接口列表</template>
          <el-menu-item @click='handleChangeContent(index)' :index="'content'+index" v-for="(item,index) in contentList" :key="index">{{item.name}}</el-menu-item>
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
    handleChangeContent(index){
      this.$emit("on-show-content",index)
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
  },
  created() {
    console.log(this.$props.contentList)
  }
}
</script>

<style>
.leftSide-wrapper {
  background: #324157;
}
</style>
