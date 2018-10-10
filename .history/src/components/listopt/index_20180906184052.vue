<template>
    <div>
        <h1>
            {{l}}
        </h1>
        <h1>
            {{list}}
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
                { a: 3 },
                { a: 4 },
                { a: 5 },
                { a: 1 },
                { a: 1 },
                { a: 1 },
                { a: 1 },
                { a: 1 },
                { a: 6 },
                { a: 7 },
                { a: 1 },
                { a: 1 },
                { a: 8 },
                { a: 9 },
                { a: 1 },
                { a: 1 }
            ],
            list: []
        };
    },
    created() {
        this.list = [...this.l];
        let list = this.list;
        // for (let idx = 0; idx < list.length; idx++) {
        //     let i = list[idx];
        //     if (i.a === 1) {
        //         console.log('before', list.map(j => j.a), idx);
        //         // debugger;
        //         list.splice(idx, 1);
        //         idx--;
        //         console.log('after', list.map(j => j.a), idx);
        //     } else {
        //         console.log('i = ', i.a, list.map(j => j.a), idx);
        //     }
        // }
        this.listDelete(list, i => i.a === 1);
    },
    methods: {
        listDelete(list, fn) {
            for (let idx = 0; idx < list.length; idx++) {
                let i = list[idx];
                if (fn(i)) {
                    list.splice(idx, 1);
                    idx--;
                }
            }
        }
    }
};
</script>
