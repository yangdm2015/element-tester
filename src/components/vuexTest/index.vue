<template>
    <div>
        <!-- {{localItems.map(i=>i.id)}} -->
        <el-collapse v-model="activeNames">
            <el-collapse-item title="商品列表"
                              :name="2">
                <el-row>
                    <el-col :span="8">

                        <el-card v-for="(o, index) in productList"
                                 :key="o.id+index"
                                 class="custom-card">
                            <img :src="`../../examples/image/${o.imgUrl}`"
                                 class="image">
                            <span class="title">{{o.title}}</span>
                            <span class="discription">{{o.discription}}</span>
                            <span class="time"> 价格：{{ o.price }}元</span>
                            <div class="btn-wrapper">
                                <el-button type="text"
                                           @click="pushProductToCart(o)"
                                           class="button">
                                    加入购物车
                                </el-button>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <!-- {{products}} -->
                        <!-- <span v-for="(i,index) in items"
                              :key="i.id+index">{{i.title}}</span> -->
                        <!-- {{localItems.map(i=>i.id)}} -->

                        <el-button @click="minusPrice">减价</el-button>
                        <el-button @click="consoleItems">打印items</el-button>
                        <el-button @click="cartPList.push(1)">curCartPList push</el-button>

                        <!-- {{num}}  -->
                        localNum = {{localNum}}
                        <el-button @click="$store.commit('addNum')">addNum</el-button>

                    </el-col>
                </el-row>

            </el-collapse-item>

        </el-collapse>

    </div>
</template>

<script>
// import store from '../../store';
import _ from 'lodash';
import { mapState, mapMutations, mapGetters } from 'vuex';
import { productList } from './productInfo';
export default {
    data() {
        return {
            activeNames: [0, 1, 2, 3, 4],
            currentDate: new Date(),
            cardBodyStyle: {
                padding: '0px',
                display: 'flex'
            },
            productList,
            cartPList: []
        };
    },
    created() {
        // this.$store.commit('setProducts', productList);
    },
    watch: {
        items: {
            handler(v) {
                console.log('items changed', v);
            },
            deep: true
        }
    },
    computed: {
        products() {
            // return this.$store.state.products;
        },
        // ...mapGetters(['cartProducts']),
        // localItems() {
        //     return store.state.cart.items;
        // },
        localNum() {
            return this.$store.state.cart.num;
        }
        // ...mapState({
        //     items: state => state.cart.items,
        //     num: state => state.cart.num
        // }),
        // curCartPList() {
        //     return this.cartPList;
        // }
    },
    methods: {
        minusPrice() {
            this.$store.commit('minusPrice', 2);
        },
        consoleItems() {
            console.log('this.items = ', this.items);
        },
        // ...mapMutations(['addNum']),
        pushProductToCart(o) {
            // this.cartPList.push(o);
            // this.$store.commit('pushProductToCart', o);
        }
    },
    components: {}
};
</script>

<style lang="scss" scoped>
/deep/ .custom-card {
    margin-top: 15px;
    .el-card__body {
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.btn-wrapper {
    padding: 0 10px;
}
.discription {
    line-height: 100%;
}
// .time {
//     font-size: 13px;
//     color: #999;
// }

// .bottom {
//     margin-top: 13px;
//     line-height: 12px;
// }

// .button {
//     padding: 0;
//     float: right;
// }

.image {
    width: 50px;
    height: 50px;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: '';
}

.clearfix:after {
    clear: both;
}
</style>
