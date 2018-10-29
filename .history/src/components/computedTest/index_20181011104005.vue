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
                点我加o1 a
            </el-button>
            <el-button @click="addb">
                点我加o1 b
            </el-button>
            <el-button @click="addo2a">
                点我加o2 a
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
            },
            o2: {
                v: [
                    {
                        ddd: {
                            a: 6,
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
            t.c = t.v[0].ddd.a + this.getO2c();
            return t;
        },
        adda() {
            this.o1.v[0].ddd.a++;
        },
        addb() {
            this.o1.v[0].ddd.b++;
        },
        addo2a() {
            this.o2.v[0].ddd.a++;
        },
        getO2c() {
            return this.o2.v[0].ddd.a;
        }
    }
};
</script>
