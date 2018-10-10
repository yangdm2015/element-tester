<template>
    <div>
        father
        <son ref="son"
             :name="name"></son>
        <div>son name in father:{{name}}</div>
        <el-button @click="changeName">
            改名
        </el-button>
        {{localName}}
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
            // this.$nextTick(function() {
            //     let sonName = this.$refs.son.getName();
            //     console.log('sonName = ', sonName);
            // });
        }
    },
    watch: {
        name(v) {
            console.log('name change to ', v);
        }
    },
    computed: {
        localName() {
            console.log('localName = ', this.name);
            return this.name;
        }
    }
};
</script>
