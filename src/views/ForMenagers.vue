<template>
    <div class="bg-picture overflow-hidden">
          <n-carousel
            direction="vertical"
            dot-placement="right"
            mousewheel
            style="width: 100vw; height: 91vh"
        >
        <div class="w-full h-full bg-gray-800 bg-opacity-70 text-white flex flex-col space-y-8 items-center justify-center">
            <h2 class="text-4xl font-bold">Appoitments made better</h2>
            <p class="w-1/2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptates sed adipisci veniam quidem sit quibusdam dolor incidunt ab quia cupiditate libero unde fugit cumque, consectetur, labore repellat amet ratione exercitationem, totam ad inventore eius! Ducimus nam facere eum! Quidem?</p>
        </div>
        <div class="w-full h-full bg-gray-800 bg-opacity-70 text-white flex flex-col space-y-8 items-center justify-center">
            <h2 class="text-4xl font-bold">Easy managable</h2>
            <p class="w-1/2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptates sed adipisci veniam quidem sit quibusdam dolor incidunt ab quia cupiditate libero unde fugit cumque, consectetur, labore repellat amet ratione exercitationem, totam ad inventore eius! Ducimus nam facere eum! Quidem?</p>
        </div>
        <div class="w-full h-full bg-gray-800 bg-opacity-70 text-white flex flex-col space-y-8 items-center justify-center">
            <h2 class="text-4xl font-bold">Low price</h2>
            <p class="w-1/2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptates sed adipisci veniam quidem sit quibusdam dolor incidunt ab quia cupiditate libero unde fugit cumque, consectetur, labore repellat amet ratione exercitationem, totam ad inventore eius! Ducimus nam facere eum! Quidem?</p>
        </div>
        <div class="w-full h-full bg-gray-800 bg-opacity-70 text-white flex flex-col  items-center justify-center">
            <div class="flex flex-col space-y-2 items-center justify-center h-1/3">
            <h2 class="text-4xl font-bold">Different plans</h2>
            <p class="w-11/12 md:w-3/4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptates sed adipisci veniam quidem sit quibusdam dolor incidunt ab quia cupiditate libero unde fugit cumque, consectetur, labore repellat amet ratione exercitationem, totam ad inventore eius! Ducimus nam facere eum! Quidem?</p>
            </div>
            <PricingSection class="h-2/3"/>
        </div>
        <div class="w-full h-full bg-gray-800 bg-opacity-70 text-white flex flex-col space-y-8 items-center justify-center">
            <h2 class="text-4xl font-bold">Customer friendly</h2>
            <p class="w-1/2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptates sed adipisci veniam quidem sit quibusdam dolor incidunt ab quia cupiditate libero unde fugit cumque, consectetur, labore repellat amet ratione exercitationem, totam ad inventore eius! Ducimus nam facere eum! Quidem?</p>
        </div>
        </n-carousel>
    </div>
</template>

<script>
import PricingSection from '../components/PricingSection.vue';
    export default {
        components:{
            PricingSection
        }
    }
</script>

<style scoped>
.bg-picture{
    background:url('/src/assets/bg-pictures/gym3.jpg');
    background-size: cover;
    background-position: center;
    min-height: 90vh;
}

</style>