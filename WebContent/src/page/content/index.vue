<template>
    <div>
        <el-menu theme="dark" :default-active="tabIndex" class="topNav-wrapper" mode="horizontal" @select="handleSelect">
            <el-submenu index="myOwnProject">
                <template slot="title">我的项目</template>
                <router-link :to="{ path: '/projectManage', query: { projectIndex: index }}" v-bind:key="index" v-for="(item,index) in projectList">
                    <el-menu-item :index="'/projectManage/'+index">
                        {{item.name}}
                    </el-menu-item>
                </router-link>
            </el-submenu>
            <router-link to='/addProject'>
                <el-menu-item index="/addProject">
                    新增项目
                </el-menu-item>
            </router-link>
            <el-menu-item index="/commonFiles">
                <router-link to='/commonFiles'>共享文件</router-link>
            </el-menu-item>
            <el-menu-item index="/more">
                <router-link to='/more'>更多帮助</router-link>
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
    created() {
        if (this.projectList.length === 0) {
            this.$router.push({
                path: "/addProject"
            })
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
