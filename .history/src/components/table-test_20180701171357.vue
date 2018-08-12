
<script>
export default {
    name: "TablePro",
    props: {
        data: Object
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

