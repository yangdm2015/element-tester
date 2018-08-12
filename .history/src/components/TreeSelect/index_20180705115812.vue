<template>
    <div ref="treeSelect" class="tree-select">
        <div class="tree-select__inputArea" v-if="multiple" @click="focusInput">
            <el-tag
                    v-for="(item, index) in selectedNodes"
                    :key="index"
                    type="info"
                    closable
                    @close="deleteTag($event, item)"
                    disable-transitions>
                <span class="el-select__tags-text">{{ item[props.label] }}</span>
            </el-tag>
            <el-popover
                    ref="treePopover"
                    placement="bottom-start"
                    trigger="manual"
                    v-model="treeVisible">
                <div class="tree-select__treeWrap"
                >
                    <!-- <el-tree ref="tree"
                             node-key="id"
                             :data="treeData"
                             :props="innerProps"
                             :show-checkbox="multiple"
                             :expand-on-click-node="false"
                             :check-on-click-node="true"
                             @node-click="handleNodeClick"
                             @check-change="handleCheckChange"
                             @check="handleCheck"
                             :filter-node-method="filterNode"
                    ></el-tree> -->

                    <tree ref="tree"
                             node-key="id"
                             :data="treeData"
                             :props="innerProps"
                             :show-checkbox="multiple"
                             :expand-on-click-node="false"
                             :check-on-click-node="true"
                             @node-click="handleNodeClick"
                             @check-change="handleCheckChange"
                             @check="handleCheck"
                             :filter-node-method="filterNode"
                    ></tree>
                </div>
            </el-popover>

            <el-input ref="input" v-model="keyword"
                      v-popover:treePopover
                      class="tree-select__innerInput"
                      @focus="handleFocus"
                      @blur="handleBlur"
            ></el-input>
        </div>
    </div>
</template>
<script>
import tree from "element-ui/packages/tree";
import formatDataToTree from "./formatDataToTree";
export default {
    name: "TreeSelect",
    components: { tree },
    props: {
        name: {
            type: String,
            default: "TreeSelect"
        },
        value: [Number, String, Array],
        data: Array,
        props: Object,
        multiple: Boolean,
        disabledKeys: Array, //todo
        selectLevel: [Number, String, Array],
        selectOnHalfCheck: Boolean,
        hideTreeOnTagDel: Boolean
    },
    data() {
        return {
            keyword: "",
            selected: this.multiple ? [] : {},
            selectedNodes: [],
            treeVisible: false
        };
    },
    computed: {
        innerProps() {
            //todo 处理自定义label,id,children
            if (this.disabledKeys) {
                return {
                    ...this.props,
                    disabled: this.isNodeDisabled
                };
            } else {
                return this.props;
            }
        },
        treeData() {
            return formatDataToTree(this.data);
        },
        checkedNodes() {
            return this.$refs.tree.getCheckedNodes();
        }
    },
    watch: {
        value: {
            handler(val) {
                this.updateSelectFromInput(); //就是setCheckedKeys
            }
        },
        treeData: {
            handler() {
                this.updateSelectFromInput();
            }
        },
        keyword(val) {
            this.$refs.tree.filter(val);
        }
    },
    //执行ref.setChecked后，ref.getChecked值会立即变更
    methods: {
        isNodeDisabled(data, node) {
            return (
                !!this.disabledKeys &&
                !!this.disabledKeys.length &&
                (this.disabledKeys.includes(data.id) ||
                    (data.children &&
                        data.children.length &&
                        data.children.every(childData =>
                            this.disabledKeys.includes(childData.id)
                        )))
            );
        },
        focusInput() {
            this.$refs.input.focus();
        },
        setTreeInvisible() {
            this.treeVisible = false;
        },
        handleFocus() {
            this.treeVisible = true;
        },
        handleBlur() {
            // this.treeVisible = false;
        },
        deleteTag(e, data) {
            this.$refs.tree.setChecked(data, false, true);
            let selectedNodes = this.$refs.tree
                .getCheckedNodes()
                .filter(node => this.isSelectLevel(node)); //这里拿到的就是取消过后的数据了。非选择顺序
            this.$emit("input", selectedNodes.map(node => node.id));
            this.hideTreeOnTagDel && this.setTreeInvisible();
        },
        /**
         * 把v-model的数据映射到select上（非常重要的方法！
         */
        updateSelectFromInput() {
            let focus = this.treeVisible;
            if (this.multiple) {
                let val = this.value;
                if (!Array.isArray(val)) val = [val];
                this.$refs.tree.setCheckedKeys(val);
                //set完可以立即get到，checkedKeys可能会比value多，比如父节点
                let selectedNodes = this.$refs.tree
                    .getCheckedNodes()
                    .filter(node => this.isSelectLevel(node)); //非选择顺序
                //为了保证选择顺序。新增和减少都可以满足
                this.selectedNodes = [
                    ...new Set([
                        ...this.selectedNodes.filter(node =>
                            selectedNodes.includes(node)
                        ),
                        ...selectedNodes
                    ])
                ];
            }
            this.keyword = "";
            !focus && this.$refs.input && this.$refs.input.$refs.input.blur();
        },
        isSelectLevel(node) {
            if (!this.selectLevel) {
                return true;
            } else {
                return node.level === this.selectLevel;
            }
        },
        removeNodeFromSelect(data) {
            if (this.isSelectLevel(this.$refs.tree.getNode(data))) {
                this.selectedNodes = this.selectedNodes.filter(
                    nodeData => nodeData.id !== data.id
                );
            }
        },
        getNodesInSelectLevel(data) {
            let node = this.$refs.tree.getNode(data);
            // console.log(node);
            if (!this.selectLevel) {
                return [data];
            }

            let levels = Array.isArray(this.selectLevel)
                ? this.selectLevel.map(l => +l)
                : [+this.selectLevel];
            if (levels.includes(node.level)) return [data];
            // if (this.selectOnHalfCheck) {
            //     // let targetNode = node;
            //     for (let i = node.level - 1; i > 0; i--) {
            //         node = node.parent;
            //         if (levels.includes(node.level)) return [node.data];
            //     }
            // }
            return null;

            // nodes = this.checkedNodes.filter(data=> levels.includes(this.$refs.tree.getNode(data).level))
        },
        handleCheckChange(data, checked, indeterminate) {
            this.$emit("check-change", data, checked, indeterminate);
        },
        /**
         * 用户通过点击树节点选择和取消选择时的事件
         * 用来更新input数据
         * @param node
         * @param checkedStatus
         */
        handleCheck(node, checkedStatus) {
            console.log("check", node, checkedStatus);
            let {
                checkedNodes,
                checkedKeys,
                halfCheckedNodes,
                halfCheckedKeys
            } = checkedStatus;
            let selectedNodes = checkedNodes.filter(node =>
                this.isSelectLevel(node)
            );
            this.$emit("input", selectedNodes.map(node => node.id)); //就这句超重要
            this.$emit("check", node, checkedStatus);
        },
        handleNodeClick(data, b, c) {
            // let nodes = [...new Set([...this.checkedNodes, data])];
            // this.$refs.tree.setCheckedNodes(nodes);
        },
        filterNode(value, data) {
            if (!value) return true;
            let node = this.$refs.tree.getNode(data);
            //包含找父节点
            for (let i = node.level; i > 0; i--) {
                if (node.data[this.props.label].indexOf(value) > -1)
                    return true;
                node = node.parent;
            }
            return false;
        },
        otherDomClick(e) {
            if (!this.$refs.treeSelect.contains(e.target)) {
                this.setTreeInvisible();
            }
        }
    },
    mounted() {
        window.addEventListener("click", this.otherDomClick);
        this.updateSelectFromInput();
    },
    beforeDestroy() {
        window.removeEventListener("click", this.otherDomClick);
    }
};
</script>
<style scoped lang="scss">
.tree-select {
    min-height: 30px;
    .el-tag {
        margin-left: 6px;
    }
    &__innerInput {
        border: none;
        width: 100px;
        /deep/ input {
            border: none;
        }
    }
    &__inputArea {
        width: 220px;
        box-sizing: border-box;
        border: 1px solid #dcdfe6;
        min-height: 40px;
        border-radius: 4px;
    }
    &__treeWrap {
        background: #fff;
        width: 220px;
        height: 320px;
        overflow: auto;
    }
}
</style>
