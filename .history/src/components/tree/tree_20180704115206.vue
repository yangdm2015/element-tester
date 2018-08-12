<template>
<div>
 <cts
  show-checkbox
  default-expand-all
  node-key="id"
  ref="tree"
  @check="handleCheck"
  highlight-current
  :props="defaultProps">
</cts>
<el-tree ref="tree"
                             node-key="id"
                             :data="treeData"
                             :show-checkbox="multiple"
                             :expand-on-click-node="false"
                             :check-on-click-node="true">

</el-tree>
</div>
   
</template>
<script>
import formatDataToTree from "./formatDataToTree";
import { data } from "./cList";
import cts from "../CategoryTreeSelect/";
import tree from "element-ui/packages/tree/src/tree";
function parseCategoryName(categoryList) {
    for (let index = 0; index < categoryList.length; index++) {
        categoryList[index].parsedName =
            categoryList[index].id + "-" + categoryList[index].name;
    }

    return categoryList;
}
export default {
    created() {},
    components: { tree, cts },
    methods: {
        handleCheck() {
            console.log("handleCheck");
        }
    },
    computed: {
        treeData() {
            parseCategoryName(data);
            return formatDataToTree(data);
        }
    },
    data() {
        return {
            multiple: true,
            defaultProps: {
                children: "children",
                label: "label"
            },
            data2: [
                {
                    id: 1,
                    label: "一级 1",
                    children: [
                        {
                            id: 4,
                            label: "二级 1-1",
                            children: [
                                {
                                    id: 9,
                                    label: "三级 1-1-1"
                                },
                                {
                                    id: 10,
                                    label: "三级 1-1-2"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    label: "一级 2",
                    children: [
                        {
                            id: 5,
                            label: "二级 2-1"
                        },
                        {
                            id: 6,
                            label: "二级 2-2"
                        }
                    ]
                },
                {
                    id: 3,
                    label: "一级 3",
                    children: [
                        {
                            id: 7,
                            label: "二级 3-1"
                        },
                        {
                            id: 8,
                            label: "二级 3-2"
                        }
                    ]
                }
            ],
            defaultProps: {
                children: "children",
                label: "label"
            }
        };
    }
};
</script>

