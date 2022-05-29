<template>
    <div class="flex flex-col sm:flex-row items-center justify-center px-8 py-16 ">
        <div class="flex justify-center items-center sm:items-start space-y-8  flex-col relative">
            <h1 class="text-5xl font-bold  text-left">Our world is your playground.</h1>
            <p class="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque et sequi tempora! Adipisci sint et quia cum perferendis laborum voluptates molestias sunt dolores, rerum nisi temporibus repudiandae explicabo omnis, accusantium, eum veritatis ipsam. Tempora recusandae exercitationem officia vel, saepe impedit ducimus repellendus suscipit numquam, rerum ut porro quia itaque earum.</p>
            <div class="flex space-x-2">
                <n-button strong secondary type="info" size="large" class="bg-blue-200">
                Our features
                </n-button>
                <n-button strong secondary type="primary" size="large" class="bg-green-200">
                Search services
                </n-button>
            </div>
        </div>
        <div class="w-full my-8 sm:my-0 flex items-center justify-center">
            <img class="w-full lg:w-2/3" src="/src/assets/booking.svg" alt="">
        </div>
    </div>
    <Partners/>
    <n-divider />
    <Features/>
    <n-divider />
    <HowWorks/>
    <n-divider />
    <Footer/>
</template>

<script>
import Partners from '../components/Partners.vue';
import Features from '../components/Features.vue';
import HowWorks from '../components/HowWorks.vue';
import Footer from '../components/Footer.vue';
    export default {
        components:{
            Partners,
            Features,
            HowWorks,
            Footer
        }
    }
</script>

<style  scoped>

</style>