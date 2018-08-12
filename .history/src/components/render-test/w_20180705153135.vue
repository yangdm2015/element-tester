
<template>
    <o a='123'></o>
</template>

<script>
import o from './obj.vue'
export default {
    data(){
        return {
            ipt:'32',
            sd:true
        }
    },
    components:{o},
    methods:{
c(){
    console.log('c')
}
    },
render(h){
    let i = (<el-input
            value={this.ipt}
            onInput={v=>this.ipt=v}>
            </el-input>)
            let f = true
    let j =h('el-switch',
    {
        props:{
            activeColor:'#13ce66',
            inactiveColor:"#ff4949",
            value:this.sd
        },
        on:{
            input:(v=>this.sd=v)
        }
    })
    return (
        <div>
            <el-button
                type="primary"
                onClick={this.c}>
                主要按钮
                </el-button>   
                {
                    f?j:i
                }
                {
                    this.ipt +  this.sd
                }
        </div>
    )
}
}
</script>

<style>

</style>
