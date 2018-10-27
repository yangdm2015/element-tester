<template>
    <div class="tt">
        <span class="icon-wrapper">

            <i class="el-icon-error"
               @click.stop="clear"></i>
        </span>
        <el-input clearable> </el-input>
    </div>
</template>

<script>
export default {
    methods: {
        clear() {
            console.log('clear');
        }
    }
};
</script>
<style  scoped lang="scss">
.tt {
    // position: relative;
    height: 32px;
    // cursor: pointer;
}
.icon-wrapper {
    border: 1px solid red;
    // position: absolute;
    right: 10px;
    z-index: 1000;
    // display: block;
    // display: inline-block;
    line-height: 32px;
    height: 32px;
    right: 10px;
    width: 20px;
    cursor: pointer;
}
</style>

