<template>
    <div>
        <h1>
            {{l}}
        </h1>
        <h1>
            {{list}}
        </h1>
        <h1>
            {{pushList}}
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
            list: [],
            pushList: []
        };
    },
    created() {
        this.list = [...this.l];
        let list = this.list;
        this.listDelete(list, i => i.a === 1);
        let item = { a: 1, b: [2] };
        for (let i = 2; i < 10; i++) {
            item.c = [i];
            this.pushList.push(item);
        }
    },
    methods: {
        // listDelete(list, fn) {
        //     for (let idx = 0; idx < list.length; idx++) {
        //         let i = list[idx];
        //         if (fn(i)) {
        //             list.splice(idx, 1);
        //             idx--;
        //         }
        //     }
        // }
        listDelete(list, fn) {
            let allDelItems = [],
                remain = [];
            if (!Array.isArray(list)) {
                return allDelItems;
            }

            for (let idx = 0; idx < list.length; idx++) {
                let i = list[idx];
                if (fn(i)) {
                    allDelItems.push(i);
                } else {
                    remain.push(i);
                }
                // if (fn(i)) {
                //     let delItems = list.splice(idx, 1);
                //     allDelItems = allDelItems.concat(delItems)
                //     idx--;
                // }
            }
            return { allDelItems, remain };
        }
    }
};
</script>
