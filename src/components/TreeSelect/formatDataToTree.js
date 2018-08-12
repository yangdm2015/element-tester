
class TreeMap {
    constructor() {
        this.nodeMap = {}
    }
    getNode(id) {
        return this.nodeMap[id];
    }
    setNode(data) {
        if (data.parentId >= 0) {
            if (!this.getNode(data.parentId)) {
                this.addNode({id: data.parentId});
            }
        }
        if (this.getNode(data.id)) {
            this.modifyNode(data);
        } else {
            this.addNode(data);
        }
        return this.getNode(data.id);
    }
    addNode(data) {
        let node = {...data};
        // let node = new TreeNodeClass(data);
        this.getNode(data.parentId) && this.addChild(this.getNode(data.parentId), node);
        this.nodeMap[data.id] = node;
        return node;
    }
    addChild(parent, node) {
        if (!parent.children) {
            parent.children = [];
        }
        parent.children.push(node);
    }
    modifyNode(data) {
        let node = this.getNode(data.id);
        // data.parent = getNode(data.parentId);
        // node.modify(data);
        Object.assign(node, data);
    }
}


// ========================================================================================================
/*
        格式化输入数据
        创建根节点
        将输入数据变成想要的数据
    */
export default function formatDataToTree(data) {
    let treeMap = new TreeMap();
    // treeNodeMapViewData = [];

    let list = Array.isArray(data) ? data : [];
    let rootNode = treeMap.addNode({id: 0, parentId: -1});
    // rootNode.node.open = true;
    // treeNodeMapViewData.push(rootNode);
    list.forEach(item => {
        treeMap.setNode(item);
    });
    return rootNode.children;
}
