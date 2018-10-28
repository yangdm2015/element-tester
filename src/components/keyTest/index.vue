<template>
    <div>
        <el-collapse v-model="activeNames"
                     @change="handleChange">
            <el-collapse-item title=":key = index 时，如果list内的元素位置发生变化，则会渲染出错"
                              :name="1">
                <el-row>
                    <el-col :span="8">
                        <div v-html="code1"></div>
                        <div>
                            tag1List =
                        </div>
                        <div>
                            {{tag1List}}
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <el-button @click="shift1">
                            tag1List.shift()
                        </el-button>
                        <el-button @click="replace1Fs">
                            改变第一个
                        </el-button>
                        <custom-tag v-for="(tag,index) in tag1List"
                                    :type="tag.type"
                                    :content="tag.content"
                                    :key="index"></custom-tag>
                    </el-col>
                </el-row>
            </el-collapse-item>
            <el-collapse-item title=":key = index+tag.content   时，list内的元素的key值会保持唯一"
                              :name="2">
                <el-row>
                    <el-col :span="8">
                        <div>
                            {{}}
                        </div>
                        <div>
                            tag2List =
                            <div>
                                {{tag2List}}
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <el-button @click="shift2">
                            tag2List.shift()
                        </el-button>
                        <el-button @click="replace2Fs">
                            改变第一个
                        </el-button>
                        <custom-tag v-for="(tag,index) in tag2List"
                                    :type="tag.type"
                                    :content="tag.content"
                                    :key="index+tag.content"></custom-tag>
                    </el-col>
                </el-row>
            </el-collapse-item>

        </el-collapse>

    </div>
</template>

<script>
import customTag from './customTag.vue';
export default {
    data() {
        return {
            tag1List: [
                { type: '', content: '默认' },
                { type: 'success', content: '成功' },
                { type: 'info', content: '灰色' },
                { type: 'warning', content: '警告' },
                { type: 'danger', content: '错误' }
            ],
            tag2List: [
                { type: '', content: '默认' },
                { type: 'success', content: '成功' },
                { type: 'info', content: '成功' },
                { type: 'warning', content: '警告' },
                { type: 'danger', content: '错误' }
            ],
            activeNames: [1, 2, 3, 4],
            code1: `  <custom-tag v-for="(tag,index) in tag1List"
                        :type="tag.type"
                        :content="tag.content"
                        :key="index"></custom-tag>`,
            code2: `  <custom-tag v-for="(tag,index) in tag1List"
                        :type="tag.type"
                        :content="tag.content"
                        :key="index+content"></custom-tag>`
        };
    },

    methods: {
        shift1() {
            this.tag1List.shift();
        },
        replace1Fs() {
            this.$set(this.tag1List, 0, {
                type: 'success',
                content: '改变后的第一个contetn'
            });
        },
        shift2() {
            this.tag2List.shift();
        },
        replace2Fs() {
            this.$set(this.tag2List, 0, {
                type: 'success',
                content: '改变后的第一个contetn'
            });
        },
        handleChange() {}
    },
    components: {
        customTag
    }
};
</script>
