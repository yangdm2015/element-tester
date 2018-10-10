<template>

    <div>
        <h1>d = {{d}}</h1>
        <h1>a = {{a}}</h1>
    </div>
</template>
<script>
import { d } from './d.js';
export default {
    mixins: [d],
    data() {
        return {
            a: 2
        };
    }
};
</script>
