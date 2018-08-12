
<script>
export default {
    name: "TablePro",
    methods: {
        startHacking() {
            debugger;
            console.log("hello");
        }
    },
    render(h) {
        return (
            <div>
                <el-button onClick="{this.startHacking}">test</el-button>
            </div>
        );
    }
};
</script>

