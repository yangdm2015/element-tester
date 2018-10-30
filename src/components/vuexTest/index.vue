<template>
    <div>
        <!-- {{localItems.map(i=>i.id)}} -->
        <el-collapse v-model="activeNames">
            <el-collapse-item title="商品列表"
                              :name="2">
                <el-row>
                    <el-col :span="8">

                        <product-list></product-list>
                    </el-col>
                    <el-col :span="8">
                        <shopping-cart></shopping-cart>

                    </el-col>
                </el-row>

            </el-collapse-item>

        </el-collapse>

    </div>
</template>

<script>
import ProductList from './ProductList.vue';
import ShoppingCart from './ShoppingCart.vue';
export default {
    data() {
        return {
            activeNames: [0, 1, 2, 3, 4]
        };
    },
    components: { ProductList, ShoppingCart }
};
</script>

