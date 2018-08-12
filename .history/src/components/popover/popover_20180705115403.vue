<template>
    <div>
        <el-popover
        ref='popover'
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <div class="tree-wrapper">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                <el-button slot="reference">hover 激活</el-button>
            </div>
            
      
        </el-popover>   
        <el-button v-popover:popover>focus 激活</el-button>
    </div>
</template>

<script>
import { data } from "./data";
export default {
    data() {
        return {
            data,
            defaultProps: {
                children: "children",
                label: "label"
            }
        };
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
        }
    }
};
</script>

<style>
.tree-wrapper {
    background: #fff;
    width: 220px;
    max-height: 320px;
    overflow-y: scroll;
}
</style>
