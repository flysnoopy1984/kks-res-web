<!--
created by JackySong@2023
-->
<template>
    <div>
        <div>
            <h1>tooken</h1>
            <p>
                {{ tokenInfo }}
            </p>
        </div>
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

let tokenInfo = useApiToken();

async function doApplyToken(){
   var result =  await apiToken.createToken("oHs2t1FnFnJu7QTAiG2B7QI34yqs");
   if(result.code == 200){
       let userToken = result.data;
      cookieManager.saveTokenAndOpenId(userToken);
       tokenInfo = useApiToken();
   }

}
async function getUserInfo(){

 
   // console.log("apiToken.value",apiToken.value);

    var ui = await apiWx.getUserInfo();

  //  cookieManager.saveTokenAndOpenId(userLogin.token);
      cookieManager.saveUserInfo(userLogin.userInfo);

    console.log("ui",ui);
}
</script>
<style scoped>
</style>zfApi/apiToken