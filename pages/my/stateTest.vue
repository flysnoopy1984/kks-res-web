<!--
created by JackySong@2023
-->
<template>
    <div>
        webComm:{{ webComm }}
        <!-- <div  v-for="secEV in secList" :title="secEV.secCode">
            {{  secEV.secName }}
        </div> -->
    </div>
</template>

<script setup lang="ts">
import {pageSection,pageSectionEvent,pageCommData} from '@/utils/models'
import apiWebData from '@/zfApi/apiWebData';
import { NButton,useMessage } from 'naive-ui'

definePageMeta({
    layout: 'test'
})


const webComm = usePageCommData().value;

let secList = ref<pageSection[]>([]);
let secEventList= ref<pageSectionEvent[]>([]);

initPage();

async function initPage() {

  const message = useMessage();
 
 
  var res = await apiWebData.querySectionEvents(tools.currentYear());
  let hash = new Map(); 
  if(res.code == 200){
    if(res.data!=undefined){
      secEventList.value =  res.data;    
      secEventList.value.forEach((item)=>{
        const sec:pageSection = {
          secCode : item.secCode,
          secName: item.secName
        } 
        hash.set(item.secCode,sec);
      })
      secList.value = [...hash.values()]

    //   let pageSec:pageCommData =  {
    
    //     pageSection:secList.value,
    //   //  pageSectionEvent: secEventList.value
    //   }
    //  debugger
    //   let cd = usePageCommData().value;
      // =secList.value;
    //   webComm.value.pageSectionEvent = secEventList;
    }
  }
  else{
    message.error(res.msg);
  }
}
    //.at.  useState("token")
   
</script>
<style scoped>
</style>