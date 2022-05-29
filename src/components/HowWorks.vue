<template>
    <div class=" px-8 py-8">
        <div class="flex flex-col items-center justify-center space-y-2">
            <h2 class="text-4xl font-bold">How does it works ?</h2>
            <p class="w-1/2 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem non expedita nemo aspernatur molestias perferendis adipisci, totam inventore quo nam nisi ipsam at blanditiis laborum optio, laboriosam facere minus porro cumque esse. Facilis suscipit, deleniti iste aperiam placeat voluptatem cupiditate!</p>
        </div>
        <div>
            <n-card>
                <n-tabs
                class="card-tabs"
                default-value="signin"
                size="large"
                animated
                style="margin: 0 -4px"
                pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
                >
                <n-tab-pane name="signin" tab="I'm a customer">
                    <n-space vertical>
                        <n-steps :vertical="checkIfVertical" :current="currentRef" :status="currentStatus">
                        <n-step
                            title="Create account"
                            description="Create free account by using e-mail and password"
                        />
                        <n-step
                            title="Search"
                            description="Look for a service you are interested in"
                        />
                        <n-step
                            title="Choose"
                            description="Pick service which meets your expectations"
                        />
                        <n-step
                            title="Enjoy"
                            description="Enjoy the servive and leave a review"
                        />
                        </n-steps>
                        <n-space>
                        <n-button-group>
                            <n-button @click="prev">
                            <template #icon>
                                <img src="/src/assets/back.png" alt="">
                            </template>
                            </n-button>
                            <n-button @click="next">
                            <template #icon>
                                <img src="/src/assets/next.png" alt="">
                            </template>
                            </n-button>
                        </n-button-group>
                        </n-space>
                    </n-space>
                </n-tab-pane>
                
                <n-tab-pane name="signup" tab="I'm a menager">
                    <n-space vertical>
                        <n-steps :vertical="checkIfVertical" :current="currentRef" :status="currentStatus">
                        <n-step
                            title="Create account"
                            description="Create account and enjoy free trail for 30 days, then choose a plan which meets your exceptation"
                        />
                        <n-step
                            title="Configure"
                            description="Configure your services list in administration panel"
                        />
                        <n-step
                            title="Wait"
                            description="Wait for customers"
                        />
                        <n-step
                            title="Enjoy"
                            description="Be happy that your income increases"
                        />
                        </n-steps>
                        <n-space>
                        <n-button-group>
                            <n-button @click="prev">
                            <template #icon>
                                <img src="/src/assets/back.png" alt="">
                            </template>
                            </n-button>
                            <n-button @click="next">
                            <template #icon>
                                <img src="/src/assets/next.png" alt="">
                            </template>
                            </n-button>
                        </n-button-group>
                        </n-space>
                    </n-space>
                </n-tab-pane>
                </n-tabs>
                <n-button type="success" class="w-72 bg-green-500 py-6 mt-6">
                Create account for free
                </n-button>
            </n-card>
        </div>
    </div>
</template>

<script>

    export default {
          components: {
        },
        data() {
            return {
                currentRef:1,
                currentStatus:"process",
                intervalId : null
            }
        },
        mounted() {
            this.changePosition()
        },
        methods: {
            next() {
                if (this.currentRef === null)
                this.currentRef = 1;
                else if (this.currentRef >= 4)
                this.currentRef= 1;
                else
                this.currentRef++;
                clearInterval(this.intervalId)
                this.changePosition();
            },
            prev() {
                if (this.currentRef === 0)
                this.currentRef = null;
                else if (this.currentRef === null)
                this.currentRef = 4;
                else
                this.currentRef--;
            },
            changePosition(){
                this.intervalId = setInterval(()=>{
                    this.next();
                },3000)
            }
        },
        computed:{
            checkIfVertical(){
                if(window.innerWidth<700){
                    return true;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>