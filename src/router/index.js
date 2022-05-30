import {createRouter, createWebHistory} from 'vue-router'
import  Dashboard from '../views/Dashboard.vue';
import  Login from '../views/Login.vue';
import  register from '../views/register.vue';
import  Home from '../views/Home.vue';
import  Services from '../views/Services.vue';
import  ForMenagers from '../views/ForMenagers.vue';
import  Profile from '../views/Profile.vue';
//admin
import  AdminPanel from '../views/AdminPanel.vue';
import  BusinessDetails from '../views/AdminViews/BusinessDetails.vue';
import  CalendarView from '../views/AdminViews/CalendarView.vue';
import  WorkHours from '../views/AdminViews/WorkHours.vue';
import  ServicesAdmin from '../views/AdminViews/Services.vue';
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
    //ADMIN
    {
        path:'/AdminPanel',
        name:"AdminPanel",
        component:AdminPanel,
        meta:{
            admin:true,
        }
    },
    {
        path:'/BusinessDetails',
        name:"BusinessDetails",
        component:BusinessDetails,
        meta:{
            admin:true,
        }
    },
    {
        path:'/Calendar',
        name:"Calendar",
        component:CalendarView,
        meta:{
            admin:true,
        }
    },
    {
        path:'/WorkHours',
        name:"WorkHours",
        component:WorkHours,
        meta:{
            admin:true,
        }
    },
    {
        path:'/ServicesAdmin',
        name:"ServicesAdmin",
        component:ServicesAdmin,
        meta:{
            admin:true,
        }
    },
];

const router =  createRouter({
history:createWebHistory(),
routes
})

export default router