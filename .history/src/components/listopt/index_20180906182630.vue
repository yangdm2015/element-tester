<template>
    <div>
        <h1>
            {{l}}
        </h1>
        <h1>
            {{l2}}
        </h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            l: [
                { a: 1 },
                { a: 2 },
                { a: 1 },
                { a: 1 },
                { a: 6 },
                { a: 7 },
                { a: 1 }
            ],
            l2: []
        };
    },
    created() {
        this.l2 = [...this.l];
        this.l2.forEach((i, idx) => {
            if (i.a === 1) {
                debugger;
                this.l2.splice(idx, 1);
            }
        });
    }
};
</script>
