<template>
    <div>
        <el-menu theme="dark" :default-active="tabIndex" class="topNav-wrapper" mode="horizontal" @select="handleSelect">
            <el-menu-item index="projectManage">
                <router-link to='/projectManage'>文档管理</router-link>
            </el-menu-item>
            <el-submenu index="myOwnProject">
                <template slot="title">我的项目</template>
                <el-menu-item :index="'projectManage/'+index" v-bind:key="index" v-for="(item,index) in projectList">{{item.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item index="addProject">
                新增项目
            </el-menu-item>
            <el-menu-item index="moreHelp">
                更多帮助
            </el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    computed: {
        projectList() {
            return this.$store.state.user.project
        },
        tabIndex() {
            return this.$store.state.content.location.topNav.tabIndex;
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            this.$store.commit("changeTabIndex", {
                index: key,
                name: "topNav"
            })
        }
    }
}
</script>

<style scoped type='scss'>
.topNav-wrapper {
    padding-left: 30px;
}

a {
    text-decoration: none;
}
</style>
