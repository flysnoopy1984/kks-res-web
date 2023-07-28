<!--
created by JackySong@2023
-->
<template>
    <div class="container">
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
            <n-button type="info" @click="getUserInfo">获取用户信息</n-button>
        </div>
        <div>
            <n-button type="primary" @click="testLogin">testLogin</n-button>
        </div>
    </div>
</template>

<script setup>
import { NButton } from 'naive-ui'
import apiToken from '@/zfApi/apiToken'
import apiTest from '@/zfApi/apiTest'

import { useMessage } from 'naive-ui'



definePageMeta({
    layout: 'test'
})

let tokenInfo = useApiToken();
const message = useMessage()
async function testLogin(){

     const  res = await apiTest.userLogin("oHs2t1FnFnJu7QTAiG2B7QI34yqs");
     if(res.code == 200){
        const userLogin = res.data;
        cookieManager.saveTokenAndOpenId(userLogin.token);
        cookieManager.saveUserInfo(userLogin.userInfo);
        message.success("获取用户成功");
   
     }
     else{
        message.error("get Error:",res.msg);
     }
}

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

   // var ui = await apiWx.getUserInfo();
   
  //  cookieManager.saveTokenAndOpenId(userLogin.token);
    //  cookieManager.saveUserInfo(userLogin.userInfo);
 //  cookieManager.saveUserInfo(ui.data)

   const userInfo = useUserInfo().value; 
   
  //  console.log("userInfo",userInfo.openid);
}
</script>
<style scoped>
.container{
    display: flex;
   
    flex-direction: column;

    
}
.container div {
    margin-bottom: 20px;
}

</style>