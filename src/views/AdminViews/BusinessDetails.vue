<template>
    <div class="relative">
  <n-card class="w-1/2 mx-auto my-4" style="margin-bottom: 16px">
    <n-tabs type="line" animated>
      <n-tab-pane name="User details" tab="User details" class="flex flex-col items-start justify-start" v-if="userInfoCopy">
          <n-card class="flex  items-start justify-start">
              <div class="flex items-center space-x-4">
                    <div class=" flex flex-col  w-96" >
                        <label for="">E-mail</label>
                        <n-input v-model:value="userInfoCopy[0].email" type="text" placeholder="johndoe@gmail.com" class="w-96  text-left"/>
                        <n-button @click="changeEmail" class="mt-2 bg-green-600 w-full mx-auto" type="primary">
                        Change
                        </n-button>
                    </div>
                    <div>
                        <img src="/src/assets/email.svg" class="h-72" alt="">
                    </div>
                    
              </div>
            <n-alert v-if="error.length>0" title="Error Text" type="error" class="fixed left-10 bottom-0 w-96 z-20">
                <p v-for="err in error">{{err}}</p>
            </n-alert>
          </n-card>
            <n-card class="flex flex-row items-start justify-start my-2">
                <div class="flex space-x-8">
                    <div class=" flex flex-col w-96 space-y-2" >
                        <label for="">Old password</label>
                        <n-input v-model:value="oldPwd" type="password" placeholder="**********" class="w-1/2 text-left"/>
                        <label for="">New password</label>
                        <n-input v-model:value="newPwd" type="password" placeholder="**********" class="w-1/2 text-left"/>
                        <label for="">Repeat new password</label>
                        <n-input v-model:value="newPwdRepeat" type="password" placeholder="**********" class="w-1/2 text-left"/>
                        <n-button @click="changePassword" class="mt-2 bg-green-600 w-1/2 mx-auto" type="primary">
                        Change
                        </n-button>
                    </div>
                    <div>
                        <img class="h-72" src="/src/assets/pwd2.svg" alt="">
                    </div>
                    
                </div>

                <n-alert v-if="success.length>0"  class="fixed left-10 bottom-0 w-96 z-20" title="Success Text" type="success">
                {{ success[0] }}
                </n-alert>
          </n-card>

      </n-tab-pane>
      <n-tab-pane name="Business details" tab="Business details">
        Business details
      </n-tab-pane>
      <n-tab-pane name="Danger zone" tab="Danger zone">
            <n-card class="flex flex-row items-start justify-start my-2">
                <div class="flex space-x-8 items-center">
                    <div class=" flex flex-col w-96 space-y-2" >
                        <n-button @click="showModal = !showModal" class="mt-2 bg-red-600 w-1/2 mx-auto" type="error" size="large">
                        Delete account
                        </n-button>
                    </div>
                    <div>
                        <img class="h-72" src="/src/assets/danger.svg" alt="">
                    </div>
                </div>
          </n-card>
            <n-modal v-model:show="showModal">
                <n-card
                style="width: 600px"
                title="Account delete"
                :bordered="false"
                size="huge"
                role="dialog"
                aria-modal="true"
                >
                <template #header-extra>
                    Are your sure ?
                </template>
                Enter your password to confirm your are sure about deleting your account!
                <n-input v-model:value="oldPwd" type="password" placeholder="**********" class="w-1/2 text-left"/>
                <template #footer>
                    <div class="flex space-x-2">
                        <n-button @click="deleteAccount" class=" bg-red-600 w-1/2 " type="error" size="large">
                        Delete account
                        </n-button>
                        <n-button @click="showModal = !showModal" class=" bg-yellow-500 w-1/2"  type="warning" size="large">
                        Cancel
                        </n-button>
                    </div>
                </template>
                </n-card>
            </n-modal>
      </n-tab-pane>
    </n-tabs>
  </n-card>

    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex';

    export default {
        data() {
            return {
                oldPwd:'',
                newPwd:'',
                newPwdRepeat:'',
                showModal:false,
                error:[],
                success:[],
            }
        },
        computed: {
            ...mapState([
                'userInfo',
                'companyInfo',
            ]),
            userInfoCopy(){
                return this.userInfo
            }
        },
        methods: {
            changeEmail(){
                let uid = this.userInfo[0].id;
                axios.put(`${import.meta.env.VITE_API_URL}user/${uid}`,{
                    email:this.userInfo[0].email
                }).then(res=>{
                    this.error = []
                    this.success = []
                    this.success.push(res.data.info)
                    console.log(res.data.info)
                }).catch(err=>{
                    this.error = [];
                    this.error.push(err.response.data.errors.email[0])
                    console.log(err)
                })
            },
            changePassword(){
                let uid = this.userInfo[0].id;
                axios.put(`${import.meta.env.VITE_API_URL}user/${uid}`,{
                    password:this.oldPwd,
                    newPassword:this.newPwd,
                }).then(res=>{
                    console.log(res)
                    this.error  = [];
                    this.success.push(res.data.info);
                }).catch(err=>{
                    console.log(err)
                    this.success = [];
                    this.error  = [];
                    this.error.push(err.response.data);
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>