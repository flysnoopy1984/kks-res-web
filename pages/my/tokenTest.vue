<!--
created by JackySong@2023
-->
<template>
    <div>
        <n-button type="warning" @click="doApplyToken">applyToken</n-button>
        <div v-html="tokenInfo"></div>   
    </div>
</template>

<script setup>
import { NButton } from 'naive-ui'
import apiToken from '@/zfApi/tokenApi'
definePageMeta({
    layout: 'test'
})

const tokenInfo = ref("");
async function doApplyToken(){

   var result =  await apiToken.createToken("oHs2t1FnFnJu7QTAiG2B7QI34yqs");
   tokenInfo.value = JSON.stringify(result, null, 4);

}
</script>
<style scoped>
</style>