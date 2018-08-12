<template>
    <tree-select v-model="innerValue"
                 :name="name"
                 :data="categoryData" multiple
                 :selectLevel="selectLevel"
                 :disabledKeys="disabledIds"
                 :props="props"
                 :hideTreeOnTagDel="true"
                 @input="handleInput"
                 @check="handleCheck"
                 @check-change="handleCheckChange"
                 @select-change="handleSelectChange"
    ></tree-select>
</template>
<script>

    import TreeSelect from "../TreeSelect/index";

    function parseCategoryName(categoryList) {
        for (let index = 0; index < categoryList.length; index++) {
            categoryList[index].parsedName = categoryList[index].id + '-' + categoryList[index].name;
        }

        return categoryList;
    }

    let categoryData = [];

    export default {
        name: 'CategoryTreeSelect',
        components: {TreeSelect},
        props: {
            name: String,
            value: [Number, String, Array],
            disabledIds: Array,
            maxLevel: Number,
            selectLevel: Number,
            categoryId: {
                type: [Number, String],
                default: ''
            },
            categoryName: {
                type: String,
                default: ''
            },
            poiId: {
                type: Number,
                default: -1
            },
            placeholder: {
                type: String,
                default: '请选择分类'
            }
        },
        data() {
            return {
                innerValue: [],
                categoryData: [],
                props: {
                    label: 'name',
                    children: 'children',
                }
            }
        },
        watch: {
            value: {
                immediate: true,
                handler() {
                    this.innerValue = this.value;
                }
            }
        },
        methods: {
            getAllCategoryList() {
                let url = `/thrift/product/ProductApiCategoryTService/getAllCategory`;
                let body = {
                    poiId: this.poiId
                };
                this.$post(url, body)
                    .then(data => {
                        this.categoryList = data && data.length ? parseCategoryName(data) : [];
                    })
                    .catch(err => {
                        console.warn(err);

                        this.$message({
                            type: 'error',
                            message: err.msg || '获取分类列表失败'
                        });
                    });
            },
            getCategoryByLevel(){
                this.$post(`${location.origin}/product/thrift/product/ProductApiCategoryTService/getCategoryByLevel`, {request: {maxLevel: this.maxLevel || 2}})
                    .then(categorys => {
                        this.categoryData = categoryData = parseCategoryName(categorys)
                    })
                    .catch((e)=> {
                        this.$message.error('获取品类失败')
                    });
            },
            handleInput(value) {
                this.$emit('input', value);
            },
            handleCheckChange(data, checked, indeterminate) {
                this.$emit('check-change', data, checked, indeterminate);
            },
            handleSelectChange(keys) {
                this.$emit('select-change', keys);
            },
            handleCheck(node, checkedStatus) {
                this.$emit('check', node, checkedStatus)
            },
        },
        created() {
            
            !categoryData.length ? this.getCategoryByLevel() : (this.categoryData = categoryData);
        }
    }
</script>