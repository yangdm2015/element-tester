<template>
    <div>
        <div>
            <custom-tag v-for="tag in tagList"></custom-tag>
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
            tagList: []
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
