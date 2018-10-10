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
        let l2 = this.l2;
        for (let idx = 0; idx < l2.length; idx++) {
            let i = l2[idx];
            if (i.a === 1) {
                console.log('before', l2.map(j => j.a), idx);
                debugger;
                l2.splice(idx, 1);
                idx--;
                console.log('after', l2.map(j => j.a), idx);
            } else {
                console.log('i = ', i.a, l2.map(j => j.a), idx);
            }
        }
        // this.l2.forEach((i, idx, l2) => {
        //     if (i.a === 1) {
        //         console.log('before', l2.map(j => j.a), idx);
        //         debugger;
        //         this.l2.splice(idx, 1);
        //         console.log('after', l2.map(j => j.a), idx);
        //     } else {
        //         console.log('i = ', i.a, l2.map(j => j.a), idx);
        //     }
        // });
    }
};
</script>
