<template>
    <div>
        <el-card v-for="(o, index) in productList"
                 :key="o.id+index"
                 class="custom-card">
            <img :src="`../../examples/image/${o.imgUrl}`"
                 class="image">
            <span class="title">{{o.title}}</span>
            <span class="discription">{{o.discription}}</span>
            <span class="time"> 价格：{{ o.price }}元</span>
            <span class="time"> 库存：{{ o.inventory }}</span>
            <div class="btn-wrapper">
                <el-button type="text"
                           @click="addProductToCart(o)"
                           class="button">
                    加入购物车
                </el-button>
            </div>
        </el-card>
        <el-button @click="changeInventory">尝试改变汉堡库存</el-button>
    </div>
</template>

<script>
// import store from '../../store';
import _ from 'lodash';
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            currentDate: new Date()
        };
    },
    created() {
        this.$store.dispatch('getAllProducts');
    },
    watch: {},
    computed: {
        ...mapState({
            productList: state => state.products.all
        }),
        ...mapGetters(['cartProducts'])
    },
    methods: {
        changeInventory() {
            this.productList[0].inventory--;
        },
        ...mapActions(['addProductToCart']),

        ...mapMutations(['pushProductToCart', 'setProducts'])
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
