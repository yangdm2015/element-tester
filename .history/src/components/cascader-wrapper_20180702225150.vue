<template>
    <el-cascader
  :options="options"
  :show-all-levels="false"
></el-cascader>
</template>
<script>
import options from './cascader-data'
export default {
    data() {
      return {
        options
      };
    }
  };
</script>
