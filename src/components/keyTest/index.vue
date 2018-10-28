<template>
    <div>
        <el-collapse v-model="activeNames"
                     @change="handleChange">
            <el-collapse-item title=":key = index 时，如果list内的元素位置发生变化，则会渲染出错"
                              :name="1">
                <el-row>
                    <el-col :span="8">
                        <!-- <info></info> -->
                        <!-- <article v-html="code1"></article> -->
                        <mavon-editor :value="code1"
                                      :editable="false"
                                      :ishljs="true"
                                      :toolbarsFlag="false"
                                      :subfield="false" />

                        <!-- <div v-html="tmp">
                        </div> -->
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
            <el-collapse-item title=":key = index+tag.content+tag.type   时，list内的元素的key值会保持唯一"
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
import marked from 'marked';
import info from '../../md/info.md'; // 导入md文件
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
            code2: `  <custom-tag v-for="(tag,index) in tag1List"
                        :type="tag.type"
                        :content="tag.content"
                        :key="index+tag.content+tag.type"></custom-tag>`,
            tmp: `  <custom-tag v-for="(tag,index) in tag1List"
                        :type="tag.type"
                        :content="tag.content"
                        :key="index"></custom-tag>`
        };
    },
    computed: {
        code1() {
            let tmp = `  <custom-tag v-for="(tag,index) in tag1List"
                        :type="tag.type"
                        :content="tag.content"
                        :key="index"></custom-tag>`;
            return (
                tmp +
                `\n\ntag1List = ${this.tag1List.map(i => JSON.stringify(i))}`
            );
        }
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
        customTag,
        info
    }
};
</script>


<style lang="scss" scoped>
@import './color-brewer.css'; //导入高亮样式
.hello {
    margin: 20px auto;
    width: 50%;
}
a {
    color: #409eff;
    text-decoration: none;
}

code {
    background-color: #f9fafc;
    padding: 0 4px;
    border: 1px solid #eaeefb;
    border-radius: 4px;
}

.hljs {
    line-height: 1.8;
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
    font-size: 12px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: solid 1px #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
}
</style>
