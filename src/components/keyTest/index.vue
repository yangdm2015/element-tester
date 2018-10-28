<template>
    <div>
        <el-collapse v-model="activeNames"
                     @change="handleChange">
            <el-collapse-item title="vue文档，对v-for指令中使用:key的说明"
                              :name="2">
                <el-row>
                    <img src="../../images/vue-key.png"
                         height=700;
                         alt="">
                </el-row>

            </el-collapse-item>
            <el-collapse-item title="当使用没有初始化状态的组件时，可以设置 :key = index ，当list内的元素位置发生变化，也不会渲染出错"
                              :name="1">
                <el-row>
                    <el-col :span="12">
                        <!-- <info></info> -->
                        <!-- <article v-html="code3"></article> -->
                        <mavon-editor :value="code3"
                                      :editable="false"
                                      :ishljs="true"
                                      :toolbarsFlag="false"
                                      :subfield="false" />

                        <!-- <div v-html="tmp">
                        </div> -->
                    </el-col>
                    <el-col :span="12">
                        <el-button @click="tagList3.shift()">
                            tagList3.shift()
                        </el-button>
                        <el-button @click="$set(tagList3, 0, {
                            type: 'success',
                            content: '改变后的第一个contetn'
                        })">
                            改变第一个
                        </el-button>
                        <el-button @click=" tagList3= cloneDeep(tagList)">
                            还原
                        </el-button>
                        <div>
                            <el-tag v-for="(tag,index) in tagList3"
                                    :type="tag.type"
                                    :key="index">{{tag.content}}
                            </el-tag>
                        </div>

                    </el-col>
                </el-row>
            </el-collapse-item>
            <el-collapse-item title="custom-tag 组件会在created时，内化传入的参数，"
                              :name="2">
                <el-row>
                    <el-col :span="12">
                        <mavon-editor :value="customTagCode"
                                      :editable="false"
                                      :ishljs="true"
                                      :toolbarsFlag="false"
                                      :subfield="false" />
                    </el-col>
                    <el-col :span="12"></el-col>
                </el-row>

            </el-collapse-item>
            <el-collapse-item title="当使用会内化传入参数的组件时，如果设置 :key = index ，那么当list内的元素位置发生变化，会渲染出错"
                              :name="3">
                <el-row>
                    <el-col :span="12">
                        <!-- <info></info> -->
                        <!-- <article v-html="code3"></article> -->
                        <mavon-editor :value="code1"
                                      :editable="false"
                                      :ishljs="true"
                                      :toolbarsFlag="false"
                                      :subfield="false" />

                        <!-- <div v-html="tmp">
                        </div> -->
                    </el-col>
                    <el-col :span="12">
                        <el-button @click="shift1">
                            tagList1.shift()
                        </el-button>
                        <el-button @click="replace1Fs">
                            改变第一个
                        </el-button>
                        <el-button @click=" tagList1= cloneDeep(tagList)">
                            还原
                        </el-button>
                        <div>
                            <custom-tag v-for="(tag,index) in tagList1"
                                        :type="tag.type"
                                        :content="tag.content"
                                        :key="index"></custom-tag>
                        </div>

                    </el-col>
                </el-row>
            </el-collapse-item>
            <el-collapse-item title="而如果设置 :key = index+tag.content+tag.type   时，list内的元素的key值会保持唯一，渲染不会出错"
                              :name="4">
                <el-row>
                    <el-col :span="12">
                        <mavon-editor :value="code2"
                                      :editable="false"
                                      :ishljs="true"
                                      :toolbarsFlag="false"
                                      :subfield="false" />
                    </el-col>
                    <el-col :span="12">
                        <el-button @click="shift2">
                            tagList2.shift()
                        </el-button>
                        <el-button @click="replace2Fs">
                            改变第一个
                        </el-button>

                        <el-button @click=" tagList2= cloneDeep(tagList)">
                            还原
                        </el-button>
                        <div>
                            <custom-tag v-for="(tag,index) in tagList2"
                                        :type="tag.type"
                                        :content="tag.content"
                                        :key="index+tag.content+tag.type"></custom-tag>
                        </div>

                    </el-col>
                </el-row>
            </el-collapse-item>

        </el-collapse>

    </div>
</template>

<script>
import marked from 'marked';
import highlightJs from 'highlight.js';
marked.setOptions({
    highlight: code => highlightJs.highlightAuto(code).value
});
import _ from 'lodash';
import info from '../../md/info.md'; // 导入md文件
import customTag from './customTag.vue';
const tagList = [
    { type: '', content: '默认' },
    { type: 'success', content: '成功' },
    { type: 'info', content: '灰色' },
    { type: 'warning', content: '警告' },
    { type: 'danger', content: '错误' }
];
export default {
    data() {
        return {
            tagList,
            tagList1: _.cloneDeep(tagList),
            tagList2: _.cloneDeep(tagList),
            tagList3: _.cloneDeep(tagList),
            activeNames: [0, 1, 2, 3, 4],

            tmp: `  <custom-tag v-for="(tag,index) in tagList1"
                        :type="tag.type"
                        :content="tag.content"
                        :key="index"></custom-tag>`
        };
    },
    mounted() {
        window.scrollTo(0, 0);
    },
    computed: {
        code1() {
            let tmp = `<custom-tag v-for="(tag,index) in tagList1"
    :type="tag.type"
    :content="tag.content"
    :key="index">
</custom-tag> `;
            return (
                tmp +
                `\n\ntagList1 =\n ${this.tagList1
                    .map(i => JSON.stringify(i))
                    .join('\n')}`
            );
        },
        code2() {
            let tmp = `<custom-tag v-for="(tag,index) in tagList2"
    :type="tag.type"
    :content="tag.content"
    :key="index+tag.content+tag.type">
</custom-tag>`;
            return (
                tmp +
                `\n\ntagList2 = \n ${this.tagList2
                    .map(i => JSON.stringify(i))
                    .join('\n')}`
            );
        },
        code3() {
            let tmp = `<el-tag v-for="(tag,index) in tagList3"
        :type="tag.type"
        :key="index">{{tag.content}}
</el-tag>`;
            return (
                tmp +
                `\n\ntagList3 =\n ${this.tagList3
                    .map(i => JSON.stringify(i))
                    .join('\n')}`
            );
        },
        customTagCode() {
            return `<template>
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
<\/script>
           `;
        }
    },
    methods: {
        cloneDeep: _.cloneDeep,
        shift1() {
            this.tagList1.shift();
        },
        replace1Fs() {
            this.$set(this.tagList1, 0, {
                type: 'success',
                content: '改变后的第一个contetn'
            });
        },
        shift2() {
            this.tagList2.shift();
        },
        replace2Fs() {
            this.$set(this.tagList2, 0, {
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
