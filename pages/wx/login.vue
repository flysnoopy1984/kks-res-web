<!--
created by JackySong@2023
-->
<template>
    
    <div v-if="apiToken.value == ''">
       <p>{{pageMsg}}</p>
       <p></p>
    </div>
    <!-- <div v-else-if="userInfo==null">
      <n-button type="primary" @click="getUserInfo">获取用户信息</n-button>
    </div>
    <div v-else>
      <p>accessToken: {{ apiToken.value.accessToken   }}</p>
    </div> -->

</template>


<script setup>

definePageMeta({
  layout: false,
});

import {useMessage,NAvatar } from 'naive-ui'
import apiWx from '@/zfApi/apiWx'
import { NButton } from 'naive-ui'


async function getWxToken(){

   var res = await apiWx.login(code,state);
 
   console.log("res",res)
   if(res.code == 200){
       return res.data;
   }
   else{
      const msg = "登陆失败:"+res.msg;
      showGlobeError(msg,res.code);
   }
   return null;
}

async function getUserInfo(){

  var ui = await apiWx.getUserInfo();
  console.log("ui",ui);
}

const url = useRequestURL()
let userInfo = null;

const apiToken = useApiToken();
let pageMsg = "扫码登录中"; 
const code =url.searchParams.get("code");
const state = url.searchParams.get("state");

if(code == null || state == null){
  showGlobeError("非法Code!",500);
}
else{
  if(state == "testCode")
    pageMsg = code;
  else{
    apiToken.value = await getWxToken();
    saveTokenAndOpenId(apiToken.value);
    
    navigateTo("/person/"+apiToken.value.openId);
  }
}
</script>

<style scoped>
.userInfoContainer{
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;

}
</style>