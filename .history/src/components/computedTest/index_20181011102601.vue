<template>
    <div>
        <el-row>
            {{o1}}
        </el-row>
        <el-row>
            {{c1}}
        </el-row>
        <el-row>
            <el-button @click="adda">
                点我加a
            </el-button>
            <el-button @click="addb">
                点我加b
            </el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            o1: {
                v: [
                    {
                        ddd: {
                            a: 1,
                            b: 2
                        }
                    }
                ]
            }
        };
    },
    computed: {
        c1() {
            return this.co(this.o1);
        }
    },
    methods: {
        co(obj) {
            let t = { ...obj };
            t.c = t.a + 1;
            return t;
        },
        adda() {
            this.o1.a++;
        },
        addb() {
            this.o1.b++;
        }
    }
};
</script>
