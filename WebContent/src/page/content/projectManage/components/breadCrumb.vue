<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>我的项目</el-breadcrumb-item>
        <el-breadcrumb-item>{{currentProject.name}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{currentModuleName}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
import const_getters from '../../_const/getters'
export default {
    computed: {
        ...const_getters,
        currentModuleName() {
            var [matchReg] = /(\w*?$)/.exec(this.$route.path)
            console.assert((matchReg !== null && matchReg !== undefined), "在ProjectManage页面中，匹配URL动态设置index失败，请检查!", this.$route)
            switch (matchReg) {
                case "contentShow":
                    return this.currentContent.name;
                case "addContent":
                    return "新增接口"
                case "totalShow":
                    return "项目总览"
            }
        }
    }
}
</script>