<template>
    <div>
        ADMIN
        {{ $store.state.userInfo }}
        <br>
        {{ companyInfo }}
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                companyInfo:null,
            }
        },
        methods: {
            getCompanyInfo(){
                axios.get(`${import.meta.env.VITE_API_URL}companyByUser/${this.$store.state.userInfo.id}`).then(res=>{
                    console.log(res)
                    this.companyInfo = res.data;
                }).catch(err=>{
                    console.log(res)
                })
            }
        },
        mounted() {
            this.getCompanyInfo();
        },
    }
</script>

<style lang="scss" scoped>

</style>