<template>
    <div>
        <div class='topNav-wrapper'>
            <el-menu theme="dark" :default-active="tabIndex" class="topNav-menu" mode="horizontal" @select="handleSelect">
                <el-submenu index="myOwnProject">
                    <template slot="title">我的项目</template>
                    <router-link :to="{ path: 'projectManage', query: { projectIndex: index }}" v-bind:key="index" v-for="(item,index) in projectList">
                        <el-menu-item :index="'projectManage?projectIndex='+index">
                            {{item.name}}
                        </el-menu-item>
                    </router-link>
                </el-submenu>
                <router-link to='addProject'>
                    <el-menu-item index="addProject">
                        新增项目
                    </el-menu-item>
                </router-link>
                <router-link to='commonFiles'>
                    <el-menu-item index="commonFiles">
                        共享文件
                    </el-menu-item>
                </router-link>
                <router-link to='mail'>
                    <el-menu-item index="mail">
                        站内信
                    </el-menu-item>
                </router-link>
                <el-submenu index="userCenter" class='subMenu-userCenter'>
                    <template slot="title">Jacky Cheung</template>
                    <el-menu-item index="userCenter">
                        用户中心
                    </el-menu-item>
                    <el-menu-item index="documentSetting">
                        文档设置
                    </el-menu-item>
                    <el-menu-item index="userCourse">
                        使用教程
                    </el-menu-item>
                    <el-menu-item index="exit">
                        退出
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    computed: {
        projectList() {
            return this.$store.state.content.project
        },
        tabIndex() {
            return this.$store.state.content.location.topNav.tabIndex;
        }
    },
    created() {
        if (this.projectList.length === 0) {
            this.$router.push({
                path: "addProject"
            })
        }
        var { fullPath } = this.$route;
        var currentTabIndex = /\/content\/(.*)/.exec(fullPath);
        console.assert(currentTabIndex !== null, "希望辨别当前的TabIndex，但是当前的URL无法识别")
        currentTabIndex = currentTabIndex[1]
        this.$store.commit("changeTabIndex", {
            index: currentTabIndex,
            name: "topNav"
        })
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

<style scoped>
.topNav-wrapper {
    background: #324157;
}

.topNav-menu {
    padding-left: 30px;
    padding-right: 30px;
}

.subMenu-userCenter {
    float: right;
}
</style>