<template>
    <div>
        <n-message-provider >
        <Calendar/>
        </n-message-provider>
    </div>
</template>

<script>
import Calendar from '../../components/Calendar.vue';
    export default {
        components:{
            Calendar
        }
    }
</script>

<style lang="scss" scoped>

</style>