<template>
    <div>
        <div>
            <custom-tag v-for="(tag,index) in tagList"
                        :type="tag.type"
                        :content="tag.content"
                        :key="index"></custom-tag>
        </div>
        <el-button @click="shift">
            shift
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
        shift() {
            this.tagList.shift;
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
