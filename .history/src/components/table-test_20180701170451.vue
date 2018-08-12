
<script>
export default {
    name: "TablePro",
    methods: {
        startHacking() {
            console.log("this.$attrs = ", this.$attrs);
        }
    },
    render(h) {
        return (
            <div>
                <el-button onClick={this.startHacking}>test</el-button>
            </div>
        );
    }
};
</script>

