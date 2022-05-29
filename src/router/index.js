import {createRouter, createWebHistory} from 'vue-router'
import  Dashboard from '../views/Dashboard.vue';
import  Login from '../views/Login.vue';
import  register from '../views/register.vue';
import  Home from '../views/Home.vue';
import  Services from '../views/Services.vue';
import  ForMenagers from '../views/ForMenagers.vue';
import  Profile from '../views/Profile.vue';
import  AdminPanel from '../views/AdminPanel.vue';
const routes = [
    {
        path:'/',
        name:"Home",
        component:Home
    },
    {
        path:'/login',
        name:"Login",
        component:Login
    },
    {
        path:'/Dashboard',
        name:"Dashboard",
        component:Dashboard
    },
    {
        path:'/register',
        name:"Register",
        component:register
    },
    {
        path:'/Services',
        name:"Services",
        component:Services
    },
    {
        path:'/ForMenagers',
        name:"ForMenagers",
        component:ForMenagers
    },
    {
        path:'/Profile',
        name:"Profile",
        component:Profile
    },
    {
        path:'/AdminPanel',
        name:"AdminPanel",
        component:AdminPanel
    },
];

const router =  createRouter({
history:createWebHistory(),
routes
})

export default router