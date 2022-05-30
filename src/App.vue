<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import MyNavigation from './components/MyNavigation.vue'
import AdminNavigation from './components/AdminNavigation.vue'
    export default {
        beforeCreate() {
          console.log('tak')
            this.$store.dispatch("getCurrentUser")
        },
        computed:{
          checkIfAdmin(){
            return this.$route.meta.admin
          }
        },
        components:{
          MyNavigation,
          AdminNavigation
        }
    }
</script>

<template>
<MyNavigation v-if="!checkIfAdmin"/>
<AdminNavigation v-else/>
<div class="bg-gray-50  w-full h-full">
<router-view class="mx-auto"></router-view>
</div>
</template>

<style>
#app {
  font-family: 'Lato', sans-serif;
  font-size: 17px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
