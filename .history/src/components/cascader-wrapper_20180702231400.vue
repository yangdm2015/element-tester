<template>
<cascader
 :options="options"
  :show-all-levels="false"></cascader>
</template>
<script>
import cascader from '/element-ui/packages/cascader/src/main'
import {options} from './cascader-data'
export default {
    data() {
      return {
        options
      };
    },
    components:[cascader]
  };
</script>
