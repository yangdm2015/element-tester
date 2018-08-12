
<script>
export default {
    name: "TablePro",
    props: {
        data: Array
    },
    methods: {
        startHacking() {
            console.log("this.$attrs = ", this.$attrs);
        }
    },
    render(h) {
        return (
            <div>
                <el-table
                    data={this.data}
                    {...{
                        attrs: this.$attrs,
                        on: this.$listeners
                    }}
                >
                    <el-table-column prop="date" label="日期" width="180" />
                    <el-table-column prop="name" label="姓名" width="180" />
                    <el-table-column prop="address" label="地址" />
                </el-table>
            </div>
        );
    }
};
</script>

