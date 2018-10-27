<template>
    <div>

        <div>
            {{tagList}}

        </div>
        <div>
            <custom-tag v-for="(tag,index) in tagList"
                        :type="tag.type"
                        :content="tag.content"
                        :key="index+tag.content"></custom-tag>
        </div>
        <el-button @click="shift">
            shift
        </el-button>
        <el-button @click="replaceFs">
            改变第一个
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
            this.tagList.shift();
        },
        replaceFs() {
            this.$set(this.tagList, 0, {
                type: 'success',
                content: '改变后的第一个contetn'
            });
        }
    },
    components: {
        customTag
    }
};
</script>
