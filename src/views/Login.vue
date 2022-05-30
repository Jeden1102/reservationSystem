<template >
<div class="overflow-hidden">
<div class="w-screen  bg-picture   flex items-center justify-center">
  <div class="w-full bg-overlay h-full bg-gray-700 bg-opacity-40  flex items-center justify-center">
  <n-card class="w-11/12 sm:w-3/4 my-4 lg:w-1/2 p-8 rounded-lg">
    <n-tabs type="segment">
      <n-tab-pane name="oasis" tab="I'm a customer">
      <n-tabs
      class="card-tabs"
      default-value="signin"
      size="large"
      animated
      style="margin: 0 -4px"
      pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
    >
      <n-tab-pane name="signin" tab="Sign in">
        <n-form >
          <n-form-item-row label="E-mail">
            <n-input placeholder="johndoe@gmail.com" class="text-left" v-model:value="loginForm.email" />
          </n-form-item-row>
          <n-form-item-row label="Password">
            <n-input placeholder="***********" class="text-left" v-model:value="loginForm.password" />
          </n-form-item-row>
        <n-alert v-if="loginErrors.length>0" title="Error" class="mb-2" type="error">
          <p v-for="error in loginErrors">{{error}}</p>
        </n-alert>
        <n-button @click="login" type="primary" block secondary strong class="bg-green-100">
          Sign In
        </n-button>
        </n-form>

      </n-tab-pane>
      <n-tab-pane name="signup" tab="Sign up">
        <n-form>
          <n-form-item-row label="E-mail">
            <n-input name="email" placeholder="johndoe@gmail.com" v-model:value="registerForm.email" class="text-left"/>
          </n-form-item-row>
          <n-form-item-row label="Password">
            <n-input name="password" type="password" placeholder="*********" class="text-left" v-model:value="registerForm.password"/>
          </n-form-item-row>
          <n-form-item-row label="Reenter Password">
            <n-input name="passwordRepeat"  type="password" placeholder="*********" class="text-left" v-model:value="registerForm.passwordRepeat"/>
            
          </n-form-item-row>
        <n-alert v-if="registerErrors.length>0" title="Error" class="mb-2" type="error">
          <p v-for="error in registerErrors">{{error}}</p>
        </n-alert>
        <n-button class="bg-green-200" @click="register" type="primary" block secondary strong>
          Sign up
        </n-button>
            <n-input name="menager"  type="hidden" value="false" v-model:value="registerForm.menager"/>
        </n-form>

      </n-tab-pane>
      </n-tabs>
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="I'm a menager">
              <n-tabs
      class="card-tabs"
      default-value="signin"
      size="large"
      animated
      style="margin: 0 -4px"
      pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
    >
      <n-tab-pane name="signin" tab="Sign in">
        <n-form>
          <n-form-item-row label="Admin e-mail">
            <n-input placeholder="admin@gmail.com" class="text-left" v-model:value="loginBusinessForm.email"/>
          </n-form-item-row>
          <n-form-item-row label="Admin Password">
            <n-input type="password" placeholder="*********" class="text-left"   v-model:value="loginBusinessForm.password"/>
          </n-form-item-row>
        <n-alert v-if="loginBusinessErrors.length>0" title="Error" class="mb-2" type="error">
          <p v-for="error in loginBusinessErrors">{{error}}</p>
        </n-alert>
        <n-button @click="loginBusiness"  type="primary" block secondary strong class="bg-green-100">
          Sign In
        </n-button>
        </n-form>

      </n-tab-pane>
      <n-tab-pane name="signup" tab="Register business">
        <MenagerRegistration/>
      </n-tab-pane>
      </n-tabs>
        
      </n-tab-pane>
    </n-tabs>
          <n-alert v-if="errors.length>0" title="Error" class="mb-2" type="error">
          <p v-for="error in errors">{{error}}</p>
        </n-alert>
  </n-card>
  </div>

</div>
</div>
</template>
<script>
import MenagerRegistration from '../components/MenagerRegistration.vue';
import axios from 'axios'
export default {
  components:{
    MenagerRegistration
  },
  data() {
    return {
      loginErrors:[],
      registerErrors:[],
      loginBusinessErrors:[],
      errors:[],
      loginForm:{
        email:'',
        password:'',
      },
      registerForm:{
        email:'',
        password:'',
        passwordRepeat:'',
        manager:false,
      },
      loginBusinessForm:{
        email:'',
        password:'',
      },
    }
  },
  methods: {
    validateLogin(){
      this.loginErrors = [];
      if(!this.loginForm.email)
        this.loginErrors.push("E-mail field is required");
      if(!this.loginForm.password)
        this.loginErrors.push("Password field is required");
      if(this.loginErrors.length==0)
        return true    
    },
    login(){
      console.log(`${import.meta.env.VITE_API_URL}userLogin`)
      if(this.validateLogin()){
        axios.post(`${import.meta.env.VITE_API_URL}userLogin`,this.loginForm).then(res=>{
          console.log(res.data.user[0].remember_token);
          $cookies.set("token",res.data.user[0].remember_token)
          this.$router.push({name:'Profile'})
          this.$store.dispatch('getCurrentUser');
        }).catch(err=>{
          this.errors = [];
          this.errors.push(err.response.data);
        })
      }
    },
    validateRegister(){
      this.registerErrors = [];
      if(!this.registerForm.email)
        this.registerErrors.push("E-mail field is required");
      if(!this.registerForm.password)
        this.registerErrors.push("Password field is required");
      if(!this.registerForm.passwordRepeat)
        this.registerErrors.push("Password repeat field is required"); 
      if(this.registerForm.password != this.registerForm.passwordRepeat)
         this.registerErrors.push("Password is not the same as password repeat");  
      if(this.registerErrors.length==0)
        return true  
    },
    register(){
      if(this.validateRegister()){
        axios.post(`${import.meta.env.VITE_API_URL}user`,
         this.registerForm
        ).then(res=>{
          console.log(res);
          $cookies.set("token",res.data.remember_token)
          this.$store.dispatch("loginUser")
          this.$router.push({name:'Profile'})
        }).catch(err=>{
          console.log(err.response.data.errors);
        })
      }
    },
    validateLoginBusiness(){
      this.loginBusinessErrors = [];
      if(!this.loginBusinessForm.email)
        this.loginBusinessErrors.push("E-mail field is required");
      if(!this.loginBusinessForm.password)
        this.loginBusinessErrors.push("Password field is required");
      if(this.loginBusinessErrors.length==0)
        return true    
    },
    loginBusiness(){
      if(this.validateLoginBusiness()){
          axios.post(`${import.meta.env.VITE_API_URL}userLogin`,this.loginBusinessForm).then(res=>{
          console.log(res);
          $cookies.set("token",res.data.user[0].remember_token)
          this.$router.push({name:'AdminPanel'})
          this.$store.dispatch('getCurrentUser');
        }).catch(err=>{
          this.errors = [];
          this.errors.push(err.response.data);
        })
      }
    },
  },
}
</script>
<style scoped>
.card-tabs .n-tabs-nav--bar-type {
  padding-left: 4px;
}
.bg-picture{
    background:url('/src/assets/bg-pictures/gym1.jpg');
    background-size: cover;
    background-position: center;
    min-height: 91vh;
}
.bg-overlay{
  min-height:91vh;
}
</style>