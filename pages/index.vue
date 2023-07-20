<template>
    <div>
        <HomeCarousel></HomeCarousel>
        <HomeItemPart></HomeItemPart>
        <!-- <HomeSectionList></HomeSectionList> -->
        <div class="divIn">
          <n-button type="warning" @click="doTestAny">TestAny</n-button>
          <n-button type="primary" @click="doWxLogin">WX Login</n-button>

        </div>
    </div>
</template>

<script setup>
// import { useMessage } from 'naive-ui'
import { NButton } from 'naive-ui'

const appConfig = useAppConfig();

//微信登陆
async function doWxLogin(){
 
    var redirect_uri =encodeURIComponent(appConfig.wx_redirect_host+"/wx/login");

    var query = {
        "appid":appConfig.wx_appId,
        "redirect_uri":redirect_uri,
        "scope":"snsapi_login",
        "response_type":"code",
       // "state":""
        "state":"testweb"
     }
    var params = jsonToUrl(query);

    var url = "https://open.weixin.qq.com/connect/qrconnect?"+params;
  
    navigateTo(url,{external:true})

}
var openId = "aaa";

// const time2 = {
//     year: 2021,
//     month: 8,
//     day: {
//         value: 10,
//     },
// };
var number = {
  params:
           {
            openId:openId,
          }
      };
  console.log({...number}) 

/* Test */
async function doTestAny(){
  navigateTo("/my/tokenTest");


}

// onMounted(()=>{
//   console.log("ls:"+localStorage.getItem("zfUserToken"))
// })




</script>
<style scoped>
.divIn{
  display: flex;
  align-items: center; /*垂直方向居中*/
  justify-content: center;  /*水平方向居中*/

}
</style>
