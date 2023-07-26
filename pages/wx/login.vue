<!--
created by JackySong@2023
-->
<template>
    
    <div>
       <p>{{ pageMsg }}</p>
       <p></p>
    </div>
</template>


<script setup>

definePageMeta({
  layout: false,
});

import apiWx from '@/zfApi/apiWx'

async function wxLogin(){

  console.log("process:",process.server);

   var res = await apiWx.login(code,state);
   if(res.code == 200){
  
      return res.data;

   }
   else{
      const msg = "登陆失败:"+res.msg;
      showGlobeError(msg,res.code);
   }
}

const url = useRequestURL()
let pageMsg = "扫码登录中"; 
const code =url.searchParams.get("code");
const state = url.searchParams.get("state");

if(code == null || state == null){
  showGlobeError("非法Code!",501);
}
else{
  if(state == "testCode")
    pageMsg = code;
  else{
    console.log("WX login");

    const userLogin = await wxLogin(); 
    cookieManager.saveTokenAndOpenId(userLogin.token);
    cookieManager.saveUserInfo(userLogin.userInfo);
  
    navigateTo("/person/"+ useApiToken().value.openId);
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