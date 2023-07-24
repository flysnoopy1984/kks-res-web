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
import nuxtStorage from 'nuxt-storage';
const apiToken = useApiToken();
apiToken.value =  nuxtStorage.localStorage.getData(lsKeys.userToken);
</script>

