

<script>
export default {
    data(){
        return {
            ipt:'32'
        }
    },
    methods:{
c(){
    console.log('c')
}
    },
render(h){
    return (
        <div>
            <el-button
                type="primary"
                onClick={this.c}>
                主要按钮
                </el-button>   
                {
                    ()=>{
                        return (<el-input
                                 value={this.ipt}
                                 onInput={v=>this.ipt=v}>
                                 </el-input>)
                    }
                }
                {
                    this.ipt
                }
        </div>
    )
}
}
</script>

<style>

</style>
