<!--
created by JackySong@2023
-->
<template>
    <div>
        <div>
            <n-button type="warning" @click="doApplyToken">applyToken</n-button>
        </div>
        <div v-html="tokenInfo"></div>   
        <div>
            <n-button type="primary" @click="getUserInfo">获取用户信息</n-button>
        </div>
    </div>
</template>

<script setup>
import { NButton } from 'naive-ui'
import apiToken from '@/zfApi/apiToken'
import apiWx from '@/zfApi/apiWx'

definePageMeta({
    layout: 'test'
})

const tokenInfo = ref("");
async function doApplyToken(){

   var result =  await apiToken.createToken("oHs2t1FnFnJu7QTAiG2B7QI34yqs");
   tokenInfo.value = JSON.stringify(result, null, 4);

}
async function getUserInfo(){

 
   // console.log("apiToken.value",apiToken.value);

    var ui = await apiWx.getUserInfo();

    console.log("ui",ui);
}
</script>
<style scoped>
</style>zfApi/apiToken