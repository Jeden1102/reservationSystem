<template>
<!-- This example requires Tailwind CSS v2.0+ -->


  <div >
    <!-- <n-message-provider class="mt-96">
  <Calendar/>
  </n-message-provider> -->
  <p class="text-primary-green">xxx</p>
  </div>

</template>

<script>
import Calendar from '../components/Calendar.vue';
import axios from 'axios';
    export default {
        components:{
            Calendar
        },
        data() {
            return {
                value:'',
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData(){
                axios.get(`${import.meta.env.VITE_API_URL}test`).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
        computed:{
            options(){
              return ["@gmail.com", "@163.com", "@qq.com"].map((suffix) => {
              const prefix = this.value.split("@")[0];
              return {
                  label: prefix + suffix,
                  value: prefix + suffix
              };
              });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
