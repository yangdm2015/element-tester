<template>
    <div >
            <o1 v-bind="$attrs"> </o1>  
    </div>
</template>
<script>
import o1 from './obj1'
export default {
    components:{o1},
    data() {
        return {
            // attrs1: this.$attrs
        }
    }


}
</script>

