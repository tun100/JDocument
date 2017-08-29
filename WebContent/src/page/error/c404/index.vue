<template>
    <div>
        <el-row type='flex' justify='center'>
            <el-col class='title' :span="7">
                此页面尚未完成，欢迎一起来Fork开发
            </el-col>
        </el-row>
        <el-row type='flex' justify='center'>
            <el-col class='content' :span='7'>
                <el-button type="primary" @click='returnBack'>点此返回</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        methods: {
            returnBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .title{
        font-size: 20px;
        padding: 43px 0;
        text-align: center;
    }
    .content{
        text-align:center;
    }
</style>
