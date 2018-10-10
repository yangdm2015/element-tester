<template>
    <div>
        father
        <son ref="son"
             :name="name"></son>
        <el-button @click="changeName">
            改名
        </el-button>
    </div>
</template>
<script>
import son from './son';
export default {
    components: { son },

    data() {
        return {
            name: 'Michael'
        };
    },
    methods: {
        changeName() {
            this.name = 'Jerry';
            let sonName = this.$refs.son.getName();
            console.log('sonName = ', sonName);
        }
    }
};
</script>
