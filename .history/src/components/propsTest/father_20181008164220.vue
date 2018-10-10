<template>
    <div>
        father
        <son ref="son"
             :name="name"></son>
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
            this.$refs.son.getName();
        }
    }
};
</script>
