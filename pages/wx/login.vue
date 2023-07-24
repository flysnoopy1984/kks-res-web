<!--
created by JackySong@2023
-->
<template>
    
    <div v-if="apiToken.value == ''">
       <p>{{pageMsg}}</p>
       <p></p>
    </div>
    <div v-else-if="userInfo==null">
      <n-button type="primary" @click="getUserInfo">获取用户信息</n-button>
    </div>
    <div v-else>
      <p>accessToken: {{ apiToken.value.accessToken   }}</p>
     <!--  <p>openId:{{ openId }}</p> -->
      <div class="userInfoContainer">
          <p>
            <n-avatar
              size="large"
              :src=userInfo.headimgurl
            /></p>
          <p>nickname: {{userInfo.nickname}}</p>
          <p>sex: {{userInfo.sex}}</p>
          <p>city: {{userInfo.city }}</p>
          <p>province: {{userInfo.province}}</p>
      </div>
    </div>

</template>


<script setup>

definePageMeta({
  layout: false,
});

import {useMessage,NAvatar } from 'naive-ui'
import apiWx from '@/zfApi/apiWx'
import nuxtStorage from 'nuxt-storage';
import { NButton } from 'naive-ui'

// interface userInfo {
//   openid:String,
//   nickname:String,
//   sex:String,
//   province:String,
//   country:String,
//   city:String,
//   unionid:String,
//   headimgurl:String,
// }


// if(localStorage.getItem("zfToken")!= null){
//   await navigateTo({path: "/index"});
//  // return;
// }


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

  var ui = await apiWx.getUserInfo(apiToken.value.accessToken);
  console.log("ui",ui);


  // var reqUrl = "/wx/login";
  //   var options ={     
  //       baseURL : "http://api.iqianba.cn",
  //       method: "options",
  //       query: {
  //         "code": code,
  //         "state": state
  //       }
  //   }
  //   var {data} = await useFetch(reqUrl,options);

 
    // if(res != null){
    //   if(res.code == 200){
    //       var gd = res.data;
    //       accessToken = gd.access_token;
    //       openId = gd.openid;
    //       refresh_token = gd.refresh_token;
    //       reqUrl = "/wx/userinfo";
    //       options ={     
    //           baseURL : "http://api.iqianba.cn",
    //           method: "post",
    //           query: {
    //             "accessToken": accessToken,
    //             "openId": openId
    //           }
    //       }
    //       var {data} = await useFetch(reqUrl,options);
    //        console.log(data);
    //        res = data.value;
    //        userInfo = res.data;
    //        console.log(userInfo);
          
    //   }
    //   else if(res.code == -100){
    //     const message = useMessage()
    //     message.info(res.msg)
    //     pageMsg = " accessToken not get";
    //   }     
    //   else{
    //     navigateTo({ 
    //       path: '/error',
    //       query: {
    //         msg: "no way!",
    //     } })
    //   }
    // }
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

      nuxtStorage.localStorage.setData(lsKeys.userToken, apiToken.value,2,'h');

    }
     // getWXInfo();
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