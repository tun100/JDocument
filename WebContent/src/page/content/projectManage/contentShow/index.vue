<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="接口概述">
                <DescContent :plainDesc="currentContent.plainDesc" :global="currentContent.global" />
            </el-tab-pane>
            <el-tab-pane label="请求文档">
                <RequestContent :requestInfo="currentContent.request" />
            </el-tab-pane>
            <el-tab-pane label="响应文档">
                <ResponseContent :responseInfo="currentContent.response" />
            </el-tab-pane>
            <el-tab-pane label="文档详情">
                <DetailContent :content="currentContent" />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import DescContent from './desc/index.vue'
import RequestContent from './request/index.vue'
import ResponseContent from './response/index.vue'
import DetailContent from './detail/index.vue'
import const_getters from '../../_const/getters'

export default {
    components: {
        DescContent,
        RequestContent,
        ResponseContent,
        DetailContent
    },
    computed: {
        ...const_getters
    }
}
</script>