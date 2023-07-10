<template>
    <div>
        <HomeCarousel></HomeCarousel>
        <HomeSectionList></HomeSectionList>
        <div class="divIn">
          <n-button type="info" @click="doLogin">Login</n-button>
          <n-button type="warning" @click="doTestServerApi">测试Server API</n-button>
          <n-button type="primary" @click="doWxLogin">WX Login</n-button>
        </div>
    </div>
</template>

<script setup>
// import { useMessage } from 'naive-ui'
import { NButton } from 'naive-ui'

async function doWxLogin(){
  var redirect_uri =encodeURIComponent("http://api.iqianba.cn/wx/login");


  // var options = {
    var query = {
        "appid":"wxca2fce9912762fde",
        "redirect_uri":redirect_uri,
        "scope":"snsapi_login",
        "response_type":"code",
        "state":"iqianba"
     }
    var keys = Object.keys(query);

    var params = keys.map(
      (key)=>{
        return key+"="+query[key];
        }
    ).join("&");

    var url = "https://open.weixin.qq.com/connect/qrconnect?"+params;
   // console.log(params);

    //  var url= "https://open.weixin.qq.com/connect/qrconnect"+query;
    navigateTo(url,{external:true})


  // }

  //  var data = await useFetch("https://open.weixin.qq.com/connect/qrconnect",options)
  // navigateTo("/wx/login")
}

async function doTestServerApi(){
  var host = "";
  // var options = {
  //   //  baseURL : "http://api.iqianba.cn", 

  //    query: {"userId":1},
  //    server: true,

  //   //  pick: ['data']
  //   // baseURL: "http://192.168.197.75:9001"  
  
  // };

  if (process.server) {
            host = "http://api.iqianba.cn/"
        } else {
            host = "/api/"
        }
  console.log("host:"+host);
  var url = "/api/user/getinfo";
  var {data} = await useFetch(url);
  console.log(data.value.msg);

}
async function doLogin(){

  var options = {
    //  baseURL : "http://api.iqianba.cn", 

     query: {"userId":1},
     server: true,

    //  pick: ['data']
     baseURL: "http://192.168.197.75:9001"  
  
  };
  
   var host = "";
  // if (process.server) {
  //           host = "http://api.iqianba.cn/"
  //       } else {
  //           host = "/api/"
  //       }
       
  var url = host+"/user/getInfo";
  console.log(url);
  
  // const data  = await $fetch("/api/user/getInfo",options);
  var data = await useFetch(url,options);
  console.log("after useFetch");
  //https://open.weixin.qq.com/connect/qrconnect?appid=wxca2fce9912762fde&redirect_uri=wx.iqianba.cn/login&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect
  console.log(data.data.value.msg)
  // alert(d)
  // const message = useMessage();
  //  message.info("I don't know why nobody told you how to unfold your love");

}


</script>
<style scoped>
.divIn{
  display: flex;
  align-items: center; /*垂直方向居中*/
  justify-content: center;  /*水平方向居中*/

}
</style>
