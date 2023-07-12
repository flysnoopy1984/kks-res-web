<!--
created by JackySong@2023
-->
<template>
    <div>
        <div class="divIn">
          <n-button type="info" @click="doLogin">Login</n-button>
          <n-button type="warning" @click="doTestServerApi">测试Server API</n-button>
        </div>
    </div>
</template>

<script setup>
// import { useMessage } from 'naive-ui'
import { NButton } from 'naive-ui'
async function doLogin(){

var options = {
  //  baseURL : "http://api.iqianba.cn", 

   query: {"userId":1},
   server: true,

  //  pick: ['data']
   baseURL: "http://192.168.197.75:9001"  

};

 var host = "";

var url = host+"/user/getInfo";
console.log(url);

// const data  = await $fetch("/api/user/getInfo",options);
var data = await useFetch(url,options);
console.log("after useFetch");
//https://open.weixin.qq.com/connect/qrconnect?appid=wxca2fce9912762fde&redirect_uri=wx.iqianba.cn/login&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect
console.log(data.data.value.msg)
}

/* server API 测试 */
async function doTestServerApi(){
 
 var url = "/api/user/getInfo";
  var data = await useFetch(url,{
   params:{"userId":1}
  });
  console.log(data);

}
</script>

<style scoped>

</style>