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
        <div class="flex-shrink-0 flex items-center  justify-center">
          <img class="w-40" src="/src/assets/logo.png" alt="">
        </div>
        <div class="hidden sm:block sm:ml-6 ">
          <div class="flex space-x-4 items-center justify-center  h-full">
            <router-link class="text-black px-3 py-2 rounded-md text-sm font-medium r-link" aria-current="page" :to="{name:'Home'}">Home</router-link>
            <router-link class="text-black px-3 py-2 rounded-md text-sm font-medium r-link" aria-current="page" :to="{name:'Services'}">For customers</router-link>
            <router-link class="text-black px-3 py-2 rounded-md text-sm font-medium r-link" aria-current="page" :to="{name:'ForMenagers'}">For menagers</router-link>
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
            <button @click="openendSubMenu = !openendSubMenu" type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
          </div>
        <div v-if="openendSubMenu" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <!-- Active: "bg-gray-100", Not Active: "" -->
            <router-link class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0" :to="{name:'Profile'}">Profile</router-link>
            <a @click="logout" href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
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
    export default {
        data() {
            return {
                openendSubMenu:false,
                openMobileMenu:false,
            }
        },
        methods: {
          logout(){
            if(this.$route.meta.admin)
              this.$router.push({name:'Home'})
            this.$store.state.userInfo = null;
            $cookies.remove('token')
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