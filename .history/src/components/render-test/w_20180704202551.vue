

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
    let i = (<el-input
            value={this.ipt}
            onInput={v=>this.ipt=v}>
            </el-input>)
            let j =''
    return (
        <div>
            <el-button
                type="primary"
                onClick={this.c}>
                主要按钮
                </el-button>   
                {
                    i
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
