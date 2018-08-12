

<script>
export default {
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
        </div>
    )
}
}
</script>

<style>

</style>
