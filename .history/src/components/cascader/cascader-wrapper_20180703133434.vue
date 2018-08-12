<template>
<el-cascader
 :options="options"
  :show-all-levels="false"></el-cascader>
</template>
<script>
// import cascader from 'element-ui/packages/cascader/src/main'
import cascader from './main'
import {options} from './cascader-data'
export default {
    data() {
      return {
        options
      };
    },
    components:{cascader}
  };
</script>
