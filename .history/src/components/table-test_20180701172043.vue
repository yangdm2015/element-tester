
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
                />
            </div>
        );
    }
};
</script>

