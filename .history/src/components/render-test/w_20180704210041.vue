

<script>
export default {
    data(){
        return {
            ipt:'32',
            sd:true
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
    let j =h('el-switch',
    let g= false
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
                    j
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
