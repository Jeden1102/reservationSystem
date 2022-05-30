<template>
    <div class="flex items-center justify-center flex-col bg-purple-800 min-h-screen text-white">
        <h1 class="text-6xl font-bold">Hi!</h1>
        <h2 class="text-4xl ">Welcome on admin panel of  <span class="font-bold">{{companyInfo[0].name}}</span> company. We hope it will help you to mange your business!</h2>
        <img src="/src/assets/hello.svg" class="h-96 mt-8" alt="">
        
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState([
                'userInfo',
                'companyInfo',
            ])
        },
    }
</script>

<style lang="scss" scoped>

</style>