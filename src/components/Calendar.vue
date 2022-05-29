<template>
  <n-calendar
    v-model:value="value"
    #="{ year, month, date }"
    :is-date-disabled="isDateDisabled"
    @update:value="handleUpdateValue"
  >
  <div class="flex flex-col">
    <h2 class="font-bold text-lg">{{ year }}-{{ month }}-{{ date }}</h2>
    <div v-for="event in getEventsByDate(`${year}-${month}-${date}`)">
       <p class="bg-blue-400 text-white my-1 break-all">{{event.name}}</p>
    </div>
    <showEventsModal :events="getEventsByDate(`${year}-${month}-${date}`)"/>
  </div>
  </n-calendar>
  
</template>

<script>
import { useMessage } from "naive-ui";
import { isYesterday, addDays } from "date-fns/esm";
import axios from 'axios'
import showEventsModal from '../components/showEventsModal.vue';
  export default {
    components:{
    showEventsModal
    },
    data() {
      return {
        message : useMessage(),
        test : "hejka",
        events : null,
        value: addDays(Date.now(), 1).valueOf(),
      }
    },
    mounted(){
      this.getEventsList();
    },
    methods: {
        handleUpdateValue(_, { year, month, date }) {
        this.message.success(`${year}-${month}-${date}`);
        console.log(`${year}-${month}-${date}`);
      },
      isDateDisabled(timestamp) {
        if (isYesterday(timestamp)) {
          return true;
        }
        return false;
      },
      getEventsByDate(date){
        if(this.events){
        let formatedDate = this.formatDateMethod(date);
        let foundEvents = this.events.filter(event=>event.data==formatedDate)
        return foundEvents;
        }
      },
      formatDateMethod(date){
        let dataArr = date.split("-");
        let formatDate = dataArr[0];
        if(dataArr[1].length==1){
          formatDate += `-0${dataArr[1]}-`;
        }else{
          formatDate += `-${dataArr[1]}-`;
        }
        if(dataArr[2].length==1){
          formatDate += `0${dataArr[2]}`;
        }else{
          formatDate += `${dataArr[2]}`;
        }
        return formatDate;
      },
      getEventsList(){
          axios.get(`${import.meta.env.VITE_API_URL}test`).then(res=>{
              this.events = res.data
          }).catch(err=>{
              console.log(err)
          })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>