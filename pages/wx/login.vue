<!--
created by JackySong@2023
-->
<template>
    
    <div v-if="userInfo == null">
       <p>{{pageMsg}}</p>
       <p></p>
    </div>
    <div v-else>
      <p>accessToken: {{ accessToken   }}</p>
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

import {useMessage,NAvatar } from 'naive-ui'


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

const url = useRequestURL()

definePageMeta({
  layout: false,
});
  var userInfo = null;
  var accessToken = "";
  var refresh_token = "";
  var openId = "";
  var pageMsg = "扫码登录中"; 
  const code =url.searchParams.get("code");
  const state = url.searchParams.get("state");
  if(code == null || state != "iqianba"){
    navigateTo({ 
      path: '/error',
      query: {
        msg: "no way!",
    } })
  }
  else{
    var reqUrl = "/wx/getAccessToken";
    var options ={     
        baseURL : "http://api.iqianba.cn",
        method: "post",
        query: {
          "code": code,
          "state": state
        }
    }
    var {data} = await useFetch(reqUrl,options);
    var res = data.value;
    if(res != null){
      if(res.code == 200){
          var gd = res.data;
          accessToken = gd.access_token;
          openId = gd.openid;
          refresh_token = gd.refresh_token;
          reqUrl = "/wx/userinfo";
          options ={     
              baseURL : "http://api.iqianba.cn",
              method: "post",
              query: {
                "accessToken": accessToken,
                "openId": openId
              }
          }
          var {data} = await useFetch(reqUrl,options);
           console.log(data);
           res = data.value;
           userInfo = res.data;
           console.log(userInfo);
          
      }
      else if(res.code == -100){
        const message = useMessage()
        message.info(res.msg)
        pageMsg = " accessToken not get";
      }  
      
      else{
        navigateTo({ 
          path: '/error',
          query: {
            msg: "no way!",
        } })
      }
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