<template>
<cascader
 :options="options"
  :show-all-levels="false"
  expand-trigger="hover"
  v-model="sValue">
  </cascader>
</template>
<script>
// import cascader from 'element-ui/packages/cascader/src/main'
import cascader from './main'
import {options} from './cascader-data'
export default {
    data() {
      return {
        options,
        sValue:['zhinan']
      };
    },
    components:{cascader}
  };
</script>
