<template>
    <div id='ci'>
        <el-input v-model='innerValue'
                  clearable>
            <!-- <el-input v-model='innerValue'> -->

        </el-input>
        {{innerValue}}
        <input type="text"
               @input="ipt"
               :value="ciValue">
    </div>
</template>
<script>
import elInput from 'element-ui/packages/input/src/input'
export default {
    props:{
        value:[String,Number]
    },
    data(){
        return {
            innerValue:'',
            ciValue:''
        }
    },
    watch:{
        value(v){
            debugger
            this.innerValue = v
        },
        innerValue(v){
            debugger
            this.$emit('input',v)
        }
    },
    methods:{
ipt(event){
    let v = event.target.value
    console.log('v = ',v)
}
    },
    components:{
        elInput
    }

}
</script>

