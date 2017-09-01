<template>
    <div>
        <div class='topNav-wrapper'>
            <el-menu theme="dark" :default-active="tabIndex" class="topNav-menu" mode="horizontal" @select="handleSelect">
                <el-col :span='3' class='topNav-title'>JDocument 接口文档管理</el-col>
                <el-submenu index="myOwnProject">
                    <template slot="title">我的项目</template>
                    <router-link to='/content/projectManage/totalShow' :key="index" v-for="(item,index) in projectList">
                        <el-menu-item :index="'projectManage'+index">
                            {{item.name}}
                        </el-menu-item>
                    </router-link>
                </el-submenu>
                <router-link to='/content/addProject'>
                    <el-menu-item index="addProject">
                        新增项目
                    </el-menu-item>
                </router-link>
                <router-link to='/content/commonFiles'>
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
        <div class='content-container'>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    computed: mapState({
        projectList: state => state.content.project,
        tabIndex: state => state.content.location.topNav.tabIndex
    }),
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
        // 判断如果是【我的项目】开头的，不需要提交tabIndex
        if (typeof currentTabIndex === "string" && !currentTabIndex.startsWith("projectManage")) {
            this.$store.commit("content/changeTabIndex", {
                index: currentTabIndex,
                name: "topNav"
            })
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            this.$store.commit("content/changeTabIndex", {
                index: key,
                name: "topNav"
            })
            var matchRegex = /projectManage(\d*)$/.exec(key);
            // 判断切换到projectManage的tabIndex，如果是，那么就切换project的下标index
            if (matchRegex !== null) {
                this.$store.commit("content/changeProjectIndex", {
                    index: parseInt(matchRegex[1])
                })
                this.$store.commit("content/changeContentIndex", {
                    index: 0
                })
            }
        }
    }
}
</script>

<style scoped lang='scss'>
.topNav-wrapper {
    background: #324157;
    .topNav-title {
        padding-right: 4px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        background: #465871;
        box-sizing: content-box;
        margin-right: 22px;
        font-size: 16px;
        transition: all 0.2s;
        &:hover {
            background: #3b4d67;
        }
    }
}

.topNav-menu {
    padding-right: 30px;
}

.subMenu-userCenter {
    float: right;
}

.content-container {
    height: calc(100vh - 60px);
}
</style>