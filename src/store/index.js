import Vuex from 'vuex'
import axios from 'axios'
const store = new Vuex.Store({
    state:{
        userId:null,
        userInfo:null,
    },
    getters:{},
    actions:{
        loginUser({commit,state}){
            axios.get(`${import.meta.env.VITE_API_URL}user/${state.userId}`).then(res=>{
                commit("setProfileInfo",res.data);
                localStorage.removeItem('user');
                localStorage.setItem('user',JSON.stringify(res.data))
                state.userInfo = res.data
            })
        },
        getCurrentUser({commit,state}){
            commit("setProfileInfo",JSON.parse(localStorage.getItem('user')))
        },
    },
    mutations:{
        setProfileInfo(state,doc){
            state.userInfo = null;
            state.userInfo = doc;
        },
    },
    modules:{},
})
export default store;

