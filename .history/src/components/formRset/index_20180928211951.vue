<template>
    <div>
        <el-form :model="search"
                 ref="f">
            <el-form-item label="1">

            </el-form-item>
            <el-form-item label="2">

            </el-form-item>
            <el-form-item label="3">

            </el-form-item>
            <el-form-item label="4">
                {{search}}
            </el-form-item>
        </el-form>
        <el-button @click="cg">
            改变
        </el-button>
        <el-button @click="rs">
            重置
        </el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: {
                a: [],
                b: '',
                c: null
            }
        };
    },

    methods: {
        cg() {
            this.search.a = [1, 2, 3];
            this.search.b = '3434';
            this.search.a = 443;
        },
        rs() {
            this.f.resetFields();
        }
    }
};
</script>
