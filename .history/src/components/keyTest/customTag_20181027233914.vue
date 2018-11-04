<template>
    <el-tag :type="localType">{{localContent}}</el-tag>
</template>
<script>
export default {
    props: {
        type: String,
        content: String
    },
    data() {
        return {
            localType: '',
            localContent: ''
        };
    },
    created() {
        this.localType = this.type;
        this.localContent = this.content;
    }
};
</script>

