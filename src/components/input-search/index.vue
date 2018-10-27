<template>
    <div>
        <el-input v-model='test'></el-input>
        {{test}}
        <ci v-model='t2'></ci>
    </div>
</template>
<script>
import elInput from 'element-ui/packages/input/src/input'
import ci from'./ci'
export default {
    data(){
        return {
            test:'',
            t2:''
        }
    },
    watch:{
        test(v){
            debugger;
        }
    },
    components:{
        elInput,ci
    }

}
</script>

