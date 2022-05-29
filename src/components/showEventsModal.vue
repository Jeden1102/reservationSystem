<template>
  <n-button @click="showModal = true">
    Details
  </n-button>
  <n-modal v-model:show="showModal" preset="dialog" title="Dialog">
    <template #header>
      <div>title</div>
    </template>
    <div v-if="events.length>0">
        <div v-for="event in events" class="bg-blue-500 text-white p-4 my-1">
            <p>{{event.name}} - {{event.data}} - {{event.places}} places</p>
        </div>
    </div>
    <div v-else>
        <n-alert title="Error Text" type="error">
        There are no events
        </n-alert>
    </div>
    <template #action>
      <!-- <div>action</div> -->
    </template>
  </n-modal>
</template>

<script>
    export default {
        props:["events"],
        data() {
            return {
                showModal:false
            }
        },
        mounted() {
            console.log(this.events)
        },
    }
</script>

<style lang="scss" scoped>

</style>