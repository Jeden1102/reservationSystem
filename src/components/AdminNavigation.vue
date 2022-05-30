<template>
<nav class="bg-gray-100 py-2 border-b-2 border-gray-200">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button @click="openMobileMenu = !openMobileMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>

          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center  sm:items-stretch sm:justify-start">
        <div v-if="companyInfo" class="flex-shrink-0 flex items-center  justify-center">
            <router-link :to="{name:'AdminPanel'}"><img class="h-16" :src="`${serverUrl}upload/${companyInfo[0].logo_url}`" alt=""></router-link>
        </div>
        <div class="hidden sm:block sm:ml-6 ">
          <div class="flex space-x-4 items-center justify-center  h-full">
            <router-link class="text-black px-3 py-2 rounded-md text-sm font-medium r-link" aria-current="page" :to="{name:'BusinessDetails'}">Business Details</router-link>
            <router-link class="text-black px-3 py-2 rounded-md text-sm font-medium r-link" aria-current="page" :to="{name:'Calendar'}">Calendar</router-link>
            <router-link class="text-black px-3 py-2 rounded-md text-sm font-medium r-link" aria-current="page" :to="{name:'WorkHours'}">Work hours</router-link>
            <router-link class="text-black px-3 py-2 rounded-md text-sm font-medium r-link" aria-current="page" :to="{name:'ServicesAdmin'}">Services</router-link>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


        <!-- Profile dropdown -->
        <router-link v-if="!$store.state.userInfo" :to="{name:'Login'}">
          <n-button type="primary" class="text-white bg-green-500">
            Login
          </n-button>
        </router-link>
        <div v-else>
          <div>
            <n-button @click="logout" type="primary" class="bg-green-600">
            Logout
            </n-button>
          </div>

        </div>

      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div v-if="openMobileMenu" class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
    <router-link class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page" :to="{name:'Dashboard'}">Dashboard</router-link>
    <router-link class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page" :to="{name:'Login'}">Login</router-link>
    <router-link class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page" :to="{name:'Register'}">Register</router-link>
    </div>
  </div>
</nav>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState([
                'companyInfo',
            ])
        },
        data() {
            return {
                openendSubMenu:false,
                openMobileMenu:false,
                userInfo : this.$store.state.userInfo,
                serverUrl : import.meta.env.VITE_SERVER_URL
            }
        },
        methods: {
          logout(){
            if(this.$route.meta.admin)
                this.$router.push({name:'Home'})
            this.$store.state.userInfo = null;
            $cookies.remove('token')
          },
        getCompanyInfo(){
                axios.get(`${import.meta.env.VITE_API_URL}companyByUser/${this.$store.state.userInfo[0].id}`).then(res=>{
                    console.log(res)
                    this.companyInfo = res.data;
                }).catch(err=>{
                    console.log(res)
                })
            }
        },
    }
</script>

<style  scoped>
.r-link{
  position: relative;
}
.r-link:hover::after{
  width:100%;
}
.r-link::after{
  width:0%;
  height:1px;
  background-color: #5FBC21;
  content:'';
  left:0;
  bottom:7px;
  position: absolute;
  transition: .3s;
}
</style>