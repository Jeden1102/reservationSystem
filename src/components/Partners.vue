<template>
    <div class="my-12">
        <h2 class="text-2xl font-bold">Trusted by over 100 partners from around the world !</h2>
        <div class="flex  flex-wrap items-center justify-center my-4">
            <img class="h-20 mx-4 my-2" v-for="partner in partners" :src="`/src/assets/partners/${partner}`" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                partners:["apple.png","tik-tok.png","whatsapp.png","huawei.png","samsung.png"]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>