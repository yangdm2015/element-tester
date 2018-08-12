<template>
    <auth-form>
        <template slot-scope="slotProps">
            {{slotProps.auth}}
        </template>
    </auth-form>
</template>
<script>
import authForm from './auth-form'

export default {
    components:{authForm}
}
</script>

