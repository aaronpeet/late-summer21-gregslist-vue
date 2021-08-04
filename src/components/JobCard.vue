<template>
   <div class="job m-2 bg-light shadow">
   <div>
       <img src="//placehold.it/200x200" class="w-100" alt="">
       <div class="p-3">
           <div class="text-center">
               <p><b>{{job.company}} | {{job.jobTitle}}</b></p>
           </div>
       </div>
   </div>
   </div>
</template>


<script>
export default {
 props: {
     job:{
         type: Object,
         required: true
     }
 },
  setup(){
    return {}
  }}
</script>


<style lang="scss" scoped>

</style>