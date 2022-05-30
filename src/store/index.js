import Vuex from 'vuex'
import axios from 'axios'
const store = new Vuex.Store({
    state:{
        userId:null,
        userInfo:null,
        companyInfo:null,
    },
    getters:{},
    actions:{
        loginUser({commit,state}){
            let token = $cookies.get("token");
            if(token){
                axios.get(`${import.meta.env.VITE_API_URL}getUserByToken/${token}`).then(res=>{
                    commit("setProfileInfo",res.data);
                    if(res.data[0].isManager){
                        axios.get(`${import.meta.env.VITE_API_URL}companyByUser/${res.data[0].id}`).then(res=>{
                            console.log(res)
                            commit("setCompanyInfo",res.data)
                        }).catch(err=>{
                            console.log(res)
                        })
                    }
                    state.userInfo = res.data
                })
            }
        },
        getCurrentUser({commit,state}){
            let token = $cookies.get("token");
            if(token){
                axios.get(`${import.meta.env.VITE_API_URL}getUserByToken/${token}`).then(res=>{
                    commit("setProfileInfo",res.data);
                    if(res.data[0].isManager){
                        axios.get(`${import.meta.env.VITE_API_URL}companyByUser/${res.data[0].id}`).then(res=>{
                            console.log(res)
                            commit("setCompanyInfo",res.data)
                        }).catch(err=>{
                            console.log(res)
                        })
                    }
                    state.userInfo = res.data
                })
            }
        },
    },
    mutations:{
        setProfileInfo(state,doc){
            state.userInfo = null;
            state.userInfo = doc;
        },
        setCompanyInfo(state,doc){
            state.companyInfo = null;
            state.companyInfo = doc;
        },
    },
    modules:{},
})
export default store;

