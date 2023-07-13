<template>
    <div>
        <HomeCarousel></HomeCarousel>
        <HomeItemPart></HomeItemPart>
        <!-- <HomeSectionList></HomeSectionList> -->
        <div class="divIn">
          <!-- <n-button type="warning" @click="doTestServerApi">测试Server API</n-button> -->
          <n-button type="primary" @click="doWxLogin">WX Login</n-button>
        </div>
    </div>
</template>

<script setup>
// import { useMessage } from 'naive-ui'
import { NButton } from 'naive-ui'

//微信登陆测试
async function doWxLogin(){
  var redirect_uri =encodeURIComponent("http://www.iqianba.cn/wx/login");

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
  
    navigateTo(url,{external:true})

}




</script>
<style scoped>
.divIn{
  display: flex;
  align-items: center; /*垂直方向居中*/
  justify-content: center;  /*水平方向居中*/

}
</style>
