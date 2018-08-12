
<script>
export default {
    name: "TablePro",
    methods: {
        startHacking() {
            console.log("hello");
        }
    },
    render(h) {
        return (
            <div>
                <el-button onClick="{this.startHacking}">Start</el-button>
            </div>
        );
    }
};
</script>

