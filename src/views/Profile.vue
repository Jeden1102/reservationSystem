<template>
    <div>
        Profile
        {{ userInfo }}
        {{ $cookies.get("token") }}
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState([
                'userInfo',
            ])
        },
        data() {
            return {
            }
        },
        mounted() {
            this.getToken();
        },
        methods: {
            getToken(){
                console.log($cookies.get("token"))
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>