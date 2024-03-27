<template>
  <div>
  

    <n-modal-provider>
      <n-message-provider>
      <NuxtLayout>
          <NuxtPage></NuxtPage>
      </NuxtLayout>
      </n-message-provider>
    </n-modal-provider>




  </div>
</template>
<script setup>
import {NMessageProvider,NModalProvider} from 'naive-ui'

</script>

