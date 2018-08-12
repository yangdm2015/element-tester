
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
                <div onClick="{this.startHacking}">test</div>
            </div>
        );
    }
};
</script>

