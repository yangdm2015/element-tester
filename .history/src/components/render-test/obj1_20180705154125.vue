<template>
<div>
    {{$attrs.a}}
</div>
</template>
<script>

export default {
  name:'o1',
  created() {
      debugger
      console.log(this.$attrs)
  }

}
</script>

