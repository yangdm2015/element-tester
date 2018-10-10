<template>
    <div>
        <father>

        </father>
    </div>
</template>

<script>
import father from './father';
export default {
    components: [father],
    data() {
        return {
            search: {
                a: [],
                b: '',
                c: null
            }
        };
    }
};
</script>
