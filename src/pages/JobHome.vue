
<template>
    <div class="JobHome container-fluid">
     <div class="row">
         <div class="col-md-4" v-for="j in jobs" :key="j.id">
    
         </div>
         {{jobs}}
     </div>
    </div>
</template>
<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { jobsService } from '../services/JobsService.js'

export default {
  name: 'JobHome',
  setup(){
    // state

    // mounted
    onMounted(async()=>{
        try {
           await jobsService.getAllJobs() 
        } catch (error) {
            console.error(error)
        }
    })
    return {
      // state,
      // computeds
      jobs: computed(()=> AppState.jobs)
      // methods
    }
  }

}
</script>