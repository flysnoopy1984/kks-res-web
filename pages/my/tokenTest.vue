<!--
created by JackySong@2023
-->
<template>
    <div>
        <n-button type="warning" @click="doApplyToken">applyToken</n-button>
        {{ tokenInfo }}
    </div>
</template>

<script setup>
import { NButton } from 'naive-ui'
import apiToken from '@/zfApi/tokenApi'
definePageMeta({
    layout: 'test'
})
var tokenInfo = "";
async function doApplyToken(){
  
    // op = {
    //             params: {openId:openId}
    //         }       ;
  //  tokenInfo = ...op;      
  //  tokenInfo =  apiToken.createToken("oHs2t1FnFnJu7QTAiG2B7QI34yqs");
}
</script>
<style scoped>
</style>