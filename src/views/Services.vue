<template>
    <div class="bg-picture flex items-center justify-center">
        <div class="w-full bg-gray-700 text-white bg-opacity-70 py-10 border-y-2 border-black flex items-center justify-center flex-col">
            <h2 class="text-2xl font-bold">Find a service you are interested in!</h2>
            <p class="w-3/4 sm:w-1/2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque accusamus quaerat voluptates mollitia recusandae distinctio, nihil voluptas consequatur, dolores exercitationem laudantium fugit odit et sed praesentium assumenda eum repellat quasi.</p>
            <div class="w-3/4 sm:w-1/2 mt-8">
               <n-input class="w-72 py-2 text-xl" v-model:value="value" type="text" placeholder="Barber" />
            </div>
        </div>
    </div>
    <div class="bg-gray-800 bg-opacity-70 w-full text-white services-list h-72 p-4 border-t-2 border-black">
              <n-carousel show-arrow :slides-per-view="slidesCount"  :loop="false" draggable class="flex items-center justify-center">
                  <div class="w-40 h-40 sm:w-52 sm:h-52 rounded-full flex items-center justify-center flex-col bg-gray-700 cursor-pointer hover:bg-gray-800 transition ">
                      <img class="h-24" src="/src/assets/services/barbell.png" alt="">
                      <h2 class="text-xl">Gym</h2>
                  </div>
                  <div class="w-40 h-40 sm:w-52 sm:h-52 rounded-full flex items-center justify-center flex-col bg-gray-700 cursor-pointer hover:bg-gray-800 transition ">
                      <img class="h-24" src="/src/assets/services/barber.png" alt="">
                      <h2 class="text-xl">Barber</h2>
                  </div>
                  <div class="w-40 h-40 sm:w-52 sm:h-52 rounded-full flex items-center justify-center flex-col bg-gray-700 cursor-pointer hover:bg-gray-800 transition ">
                      <img class="h-24" src="/src/assets/services/clean.png" alt="">
                      <h2 class="text-xl">Dentist</h2>
                  </div>
                  <div class="w-40 h-40 sm:w-52 sm:h-52 rounded-full flex items-center justify-center flex-col bg-gray-700 cursor-pointer hover:bg-gray-800 transition ">
                      <img class="h-24" src="/src/assets/services/consultation.png" alt="">
                      <h2 class="text-xl">Psychoterapy</h2>
                  </div>
                  <div class="w-40 h-40 sm:w-52 sm:h-52 rounded-full flex items-center justify-center flex-col bg-gray-700 cursor-pointer hover:bg-gray-800 transition ">
                      <img class="h-24" src="/src/assets/services/hairdresser.png" alt="">
                      <h2 class="text-xl">Hairdrasser</h2>
                  </div>
                  <div class="w-40 h-40 sm:w-52 sm:h-52 rounded-full flex items-center justify-center flex-col bg-gray-700 cursor-pointer hover:bg-gray-800 transition ">
                      <img class="h-24" src="/src/assets/services/makeup.png" alt="">
                      <h2 class="text-xl">Makeup</h2>
                  </div>
                  <div class="w-40 h-40 sm:w-52 sm:h-52 rounded-full flex items-center justify-center flex-col bg-gray-700 cursor-pointer hover:bg-gray-800 transition ">
                      <img class="h-24" src="/src/assets/services/tatoo-machine.png" alt="">
                      <h2 class="text-xl">Tattoo</h2>
                  </div>
                  <div class="w-40 h-40 sm:w-52 sm:h-52 rounded-full flex items-center justify-center flex-col bg-gray-700 cursor-pointer hover:bg-gray-800 transition ">
                      <img class="h-24" src="/src/assets/services/more.png" alt="">
                      <h2 class="text-xl">More</h2>
                  </div>
              </n-carousel>
    </div>
</template>

<script>
    export default {
        computed:{
            slidesCount(){
                if(window.screen.availWidth<520)
                    return 2
                if(window.screen.availWidth<900)
                    return 3
                if(window.screen.availWidth<1000)
                    return 4
                if(window.screen.availWidth<1300)
                    return 5
                return 6    
            }
        }
    }
</script>

<style  scoped>
.n-carousel__slide{
    display:flex !important;
    justify-content: center !important;
    align-items: center !important;
    background: #000 !important;
}
.bg-picture{
    background:url('/src/assets/bg-pictures/barber1.jpg');
    background-size: cover;
    background-position: center;
    min-height: 70vh;
}

.services-list{
    transform: translateY(-100px);
}
@media(max-width:968px){
.services-list{
    transform: translateY(0px);
}
}
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}
</style>