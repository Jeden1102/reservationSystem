<template>
    <div class="mt-8  px-8 py-8">
        <div class="flex flex-col-reverse sm:flex-row items-center justify-center">
                <n-tabs
                class="card-tabs"
                default-value="signin"
                size="large"
                animated
                style="margin: 0 -4px"
                pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
                >
                <n-tab-pane name="signin" tab="For customers">
                    <div class="flex my-8 flex-wrap items-center justify-center">
                        <div class="border border-gray-300 bg-gray-100 mx-1 my-1 py-12 px-4 relative w-72 h-72 flex items-center justify-center flex-col rounded-lg">
                            <h3 class="text-lg font-bold">Best prices</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ut praesentium eius atque, odit assumenda.</p>
                            <div class="absolute left-0 top-0 w-16 h-16 bg-primary-dark-green border-2 border-primary-green text-white card-icon flex items-center justify-center rounded-sm">
                                <img class="h-12" src="/src/assets/features/loss.png" alt="">
                            </div>
                        </div>
                        <div class="border border-gray-300 bg-gray-100 mx-1 my-1  py-12 px-4 relative w-72 h-72 flex items-center justify-center flex-col rounded-lg">
                            <h3 class="text-lg font-bold">Fast time</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ut praesentium eius atque, odit assumenda.</p>
                            <div class="absolute left-0 top-0 w-16 h-16 bg-primary-dark-green border-2 border-primary-green text-white card-icon flex items-center justify-center rounded-sm">
                                <img class="h-12" src="/src/assets/features/clock.png" alt="">
                            </div>
                        </div>
                        <div class="border border-gray-300 bg-gray-100 mx-1 my-1  py-12 px-4 relative w-72 h-72 flex items-center justify-center flex-col rounded-lg">
                            <h3 class="text-lg font-bold">Wide range</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ut praesentium eius atque, odit assumenda.</p>
                            <div class="absolute left-0 top-0 w-16 h-16 bg-primary-dark-green border-2 border-primary-green text-white card-icon flex items-center justify-center rounded-sm">
                                <img class="h-12" src="/src/assets/features/color-palette.png" alt="">
                            </div>
                        </div>
                        <div class="border border-gray-300 bg-gray-100 mx-1 my-1  py-12 px-4 relative w-72 h-72 flex items-center justify-center flex-col rounded-lg">
                            <h3 class="text-lg font-bold">User friendly</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ut praesentium eius atque, odit assumenda.</p>
                            <div class="absolute left-0 top-0 w-16 h-16 bg-primary-dark-green border-2 border-primary-green text-white card-icon flex items-center justify-center rounded-sm">
                                <img class="h-12" src="/src/assets/features/snap.png" alt="">
                            </div>
                        </div>
                    </div>

                </n-tab-pane>
                <n-tab-pane name="signup" tab="For menagers">
                    <div class="flex my-8 flex-wrap items-center justify-center">
                        <div class="border border-gray-300 bg-gray-100 mx-1 my-1 py-12 px-4 relative w-72 h-72 flex items-center justify-center flex-col rounded-lg">
                            <h3 class="text-lg font-bold">More customers</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ut praesentium eius atque, odit assumenda.</p>
                            <div class="absolute left-0 top-0 w-16 h-16 bg-primary-dark-green border-2 border-primary-green text-white card-icon flex items-center justify-center rounded-sm">
                                <img class="h-12" src="/src/assets/features/customer-review.png" alt="">
                            </div>
                        </div>
                        <div class="border border-gray-300 bg-gray-100 mx-1 my-1  py-12 px-4 relative w-72 h-72 flex items-center justify-center flex-col rounded-lg">
                            <h3 class="text-lg font-bold">Highest income</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ut praesentium eius atque, odit assumenda.</p>
                            <div class="absolute left-0 top-0 w-16 h-16 bg-primary-dark-green border-2 border-primary-green text-white card-icon flex items-center justify-center rounded-sm">
                                <img class="h-12" src="/src/assets/features/profits.png" alt="">
                            </div>
                        </div>
                        <div class="border border-gray-300 bg-gray-100 mx-1 my-1  py-12 px-4 relative w-72 h-72 flex items-center justify-center flex-col rounded-lg">
                            <h3 class="text-lg font-bold">Easy to manage</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ut praesentium eius atque, odit assumenda.</p>
                            <div class="absolute left-0 top-0 w-16 h-16 bg-primary-dark-green border-2 border-primary-green text-white card-icon flex items-center justify-center rounded-sm">
                                <img class="h-12" src="/src/assets/features/snap.png" alt="">
                            </div>
                        </div>
                        <div class="border border-gray-300 bg-gray-100 mx-1 my-1  py-12 px-4 relative w-72 h-72 flex items-center justify-center flex-col rounded-lg">
                            <h3 class="text-lg font-bold">Managable</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ut praesentium eius atque, odit assumenda.</p>
                            <div class="absolute left-0 top-0 w-16 h-16 bg-primary-dark-green border-2 border-primary-green text-white card-icon flex items-center justify-center rounded-sm">
                                <img class="h-12" src="/src/assets/features/pie-chart.png" alt="">
                            </div>
                        </div>
                    </div>
                </n-tab-pane>
                </n-tabs>
            <div class="flex items-center justify-center flex-col space-y-4 p-2">
                <img class="h-72" src="/src/assets/features.svg" alt="">
                <h2 class="text-3xl font-bold text-left">A wider view in your team menagment. An easy way to book appointments.</h2>
                <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus expedita ratione, pariatur laboriosam, tenetur eum nihil, corrupti in ullam labore dolores culpa beatae minus aut.</p>
                <n-button strong secondary type="primary" size="large" class="bg-green-200">
                Search services
                </n-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.card-icon{
    left:20px;
    top:-30px;
}
</style>