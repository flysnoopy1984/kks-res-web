<template>
  <div>
  

    <n-message-provider>
    <NuxtLayout>
    
        <NuxtPage></NuxtPage>

    </NuxtLayout>
  </n-message-provider>
  </div>
</template>
<script setup>
import {NMessageProvider } from 'naive-ui'

// onMounted(()=>{
//   if(process.server) return; 
//   useApiToken().value =  localStorage.getItem(lsKeys.userToken);
// })
</script>

