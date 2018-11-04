<template>
    <div>
        <div>
            <custom-tag v-for="tag in tagList"
                        :type="tag.type"
                        :content="tag.content"
                        :key="tag.content"></custom-tag>
        </div>
        <el-button @click="cg">
            改变
        </el-button>
        <el-button @click="rs">
            重置
        </el-button>
    </div>
</template>

<script>
import customTag from './customTag.vue';
export default {
    data() {
        return {
            tagList: [
                { type: '', content: '默认' },
                { type: 'success', content: '成功' },
                { type: 'info', content: '灰色' },
                { type: 'warning', content: '警告' },
                { type: 'danger', content: '错误' }
            ]
        };
    },

    methods: {
        cg() {
            this.search.a = [1, 2, 3];
            this.search.b = '3434';
            this.search.a = 443;
        },
        rs() {
            this.$refs.f.resetFields();
        }
    },
    components: {
        customTag
    }
};
</script>
