<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>我的项目</el-breadcrumb-item>
        <el-breadcrumb-item>{{projectName}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{activeContentName}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        props: ['projectName','contentName','isTotalShow'],
        computed: {
            activeContentName(){
                if(this.$props.isTotalShow === true){
                    return "项目总览"
                }else{
                    return this.$props.contentName;
                }
            }
        }
    }
</script>