<template>
    <div>
        <div  class="flex flex-col space-y-2 text-left">
        <n-steps :vertical="checkIfVertical" :current="currentStep+1" >
        <n-step
            title="Business info"
        />
        <n-step
            title="Login access"
        />
        <n-step
            title="Business details"
        />
        </n-steps>
        <form action="" enctype="multipart/form-data">
        
            <div v-show="currentStep==0" class="flex flex-col space-y-2 text-left">
                <label for="">Businnes Name</label>
                <n-input  placeholder="JustGym" clearable v-model:value="businnesForm.name"/>
                <label for="">Businnes Description</label>
                <n-input  type="textarea" maxlength="300" show-count v-model:value="businnesForm.desc"/>
                <label for="">Business logo</label>
                
                <div class="input-group">

            <div>
              <label class="block text-sm font-medium text-gray-700"> Cover photo </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg v-if="!this.businnesForm.file" class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <img id="frame" src="" class="w-24" />
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input type="file" name="filename" class="custom-file-input sr-only" 
v-on:change="onFileChange" id="file-upload"  >
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
                </div>
                <!-- <n-upload
                    multiple
                    directory-dnd
                    v-model:value="businnesForm.image"
                    @change="onFileChange"
                >
                    <n-upload-dragger>
                    <div style="margin-bottom: 12px">
                        <img src="/src/assets/upload.png" class="h-24 mx-auto" alt="">
                    </div>
                    <n-text style="font-size: 16px">
                        Click or drag a file to this area to upload
                    </n-text>
                    <n-p depth="3" style="margin: 8px 0 0 0">
                        Strictly prohibit from uploading sensitive information. For example,
                        your bank card PIN or your credit card expiry date.
                    </n-p>
                    </n-upload-dragger>
                </n-upload> -->
            <n-alert v-if="errorsFirstStep.length>0" title="Error" class="mb-2" type="error">
            <p v-for="error in errorsFirstStep">{{error}}</p>
            </n-alert>
            </div>
            <div v-show="currentStep==1" class="flex flex-col space-y-2 text-left">
                <label for="">Admin e-mail</label>
                <n-input placeholder="admin@gmail.com" clearable v-model:value="businnesForm.email"/>
                <label for="">Admin password</label>
                <n-input placeholder="*********" type="password" v-model:value="businnesForm.password" clearable />
                <label for="">Re-type Admin password</label>
                <n-input placeholder="*********" type="password" v-model:value="businnesForm.passwordRepeat" clearable />
            <n-alert v-if="errorsSecondStep.length>0 && secondStepTouched" title="Error" class="mb-2" type="error">
            <p v-for="error in errorsSecondStep">{{error}}</p>
            </n-alert>
            </div>
            <div v-show="currentStep==2" class="flex flex-col space-y-2 text-left">
                <label for="">Businness address</label>
                <n-input placeholder="New York" v-model:value="businnesForm.address" clearable />
                <label for="">Businness street</label>
                <n-input placeholder="New York" v-model:value="businnesForm.street" clearable />
                <label for="">Businness street number</label>
                <n-input placeholder="New York" v-model:value="businnesForm.streetNumber" clearable />
                <label for="">Business category</label>
                <n-select  :options="options" v-model:value="businnesForm.category"/>

            </div>
            </form>

            </div>

        <div class="flex space-x-4 mt-4">
            <n-button @click="nextStep" v-if="currentStep<2" type="success" class="bg-green-500">
            Next
            </n-button>
            <n-button @click="prevStep" v-if="currentStep>0" type="warning" class="bg-yellow-500">
            Back
            </n-button>
            <n-button @click="registerCompany" v-if="currentStep==2" type="info" class="bg-blue-500">
            Finish
            </n-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                currentStep:0,
                secondStepTouched:false,
                options:[
                    {
                        label:"Barber",
                        value:"Barber"
                    },
                    {
                        label:"Hairdresser",
                        value:"Hairdresser"
                    },
                    {
                        label:"Gym",
                        value:"Gym"
                    },
                    {
                        label:"Dentist",
                        value:"Dentist"
                    },
                    {
                        label:"Other",
                        value:"Other"
                    },
                    
                ],
                businnesForm:{
                    name:'',
                    desc:'',
                    image:null,
                    email:'',
                    password:'',
                    passwordRepeat:'',
                    address:'',
                    street:'',
                    streetNumber:'',
                    category:'',
                    file:null,
                },
                errorsFirstStep:[],
                errorsSecondStep:[],
            }
        },
        methods: {
            onFileChange(e) {
            this.businnesForm.file = e.target.files[0];
            frame.src=URL.createObjectURL(this.businnesForm.file);
            },
            validateFirstStep(){
                this.errorsFirstStep=[];
                console.log(this.businnesForm.image)
                if(!this.businnesForm.name)
                    this.errorsFirstStep.push("Bussiness name cannot be empty!")
                if(!this.businnesForm.desc)
                    this.errorsFirstStep.push("Bussiness description cannot be empty!")    
                if(this.errorsFirstStep.length==0){
                    this.currentStep++;
                }
            },
            validateSecondStep(){
                this.errorsSecondStep = [];
                if(!this.businnesForm.email)
                    this.errorsSecondStep.push("E-mail field is required");
                if(!this.businnesForm.password)
                    this.errorsSecondStep.push("Password field is required");
                if(!this.businnesForm.passwordRepeat)
                    this.errorsSecondStep.push("Password repeat field is required"); 
                if(this.businnesForm.password != this.businnesForm.passwordRepeat)
                    this.errorsSecondStep.push("Password is not the same as password repeat");  
                if(this.errorsSecondStep.length==0)
                    this.currentStep++;  
            },
            nextStep(){
                if(this.currentStep==0)
                    this.validateFirstStep();
                 if(this.currentStep==1)
                    this.validateSecondStep();   
            },
            prevStep(){
                this.currentStep--;
            },
            registerCompany(){
                const config = {
                headers: {
                'content-type': 'multipart/form-data',
                }
                }
                axios.post(`${import.meta.env.VITE_API_URL}company`,this.businnesForm,config).then(res=>{
                $cookies.set("token",res.data.remember_token)
                this.$store.dispatch("loginUser")
                this.$router.push({name:'AdminPanel'})
                }).catch(err=>{
                    console.log(err);
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>