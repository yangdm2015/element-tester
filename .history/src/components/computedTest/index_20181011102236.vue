<template>
    <div>
        <el-row>
            {{o1}}
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            o1: {
                a: 1,
                b: 2
            }
        };
    },
    computed: {
        c1() {
            return this.co(this.o1);
        }
    },
    methods: {
        co(obj) {}
    }
};
</script>
