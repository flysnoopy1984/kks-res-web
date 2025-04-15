<!--
created by JackySong@2023
-->
<template>
    <div>
        webComm:{{ webComm }}
    </div>
</template>

<script setup lang="ts">
import type {pageSectionData, pageSectionEvent, pageCommData, ResComm} from '@/utils/models'
import apiWebData from '@/zfApi/apiWebData';
import { NButton, useMessage } from 'naive-ui'
import { ref } from 'vue'
import { usePageCommData } from '@/composables/state'
import { tools } from '@/utils/tools'

definePageMeta({
    layout: 'test'
})

const webComm = usePageCommData().value;

const secList = ref<pageSectionData[]>([]);
const secEventList = ref<pageSectionEvent[]>([]);

initPage();

async function initPage() {
  const message = useMessage();
 
  const res = await apiWebData.querySectionEvents(tools.currentYear()) as ResComm<pageSectionEvent[]>;
  const hash = new Map(); 

  if(res?.code === 200){
    if(res.data){
      secEventList.value = res.data;    
      secEventList.value.forEach((item) => {
        const sec: pageSectionData = {
          secCode: item.secCode,
          secName: item.secName,
          evGroup: [[]],
          posterDatas: []
        } 
        hash.set(item.secCode, sec);
      })
      secList.value = [...hash.values()]
    }
  } else if(res){
    message.error(res.msg);
  }
}
</script>
<style scoped>
</style>
