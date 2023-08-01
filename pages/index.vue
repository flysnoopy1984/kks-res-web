<template>
    <div>
        <HomeBanner></HomeBanner>

        <!-- <HomeItemPart></HomeItemPart> -->
        
        <HomeBarSlider></HomeBarSlider>
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
 
  nav.toWxLogin();


  /*直接点击按钮 */
    // var redirect_uri =encodeURIComponent(appConfig.wx_redirect_host+"/wx/login");
    // const { public: { WxState } } = useRuntimeConfig()
    // var query = {
    //     "appid":appConfig.wx_appId,
    //     "redirect_uri":redirect_uri,
    //     "scope":"snsapi_login",
    //     "response_type":"code",
    //     "state":WxState
    //  }
    // var params = jsonToUrl(query);

    // var url = "https://open.weixin.qq.com/connect/qrconnect?"+params;
  
    // navigateTo(url,{external:true})

}

//加载栏目，栏目中对应的Item（祝福海报）
async function initPage() {

}

/* Test */
async function doTestAny(){

  navigateTo("/my/tokenTest");

}

</script>
<style scoped>
.divIn{
  display: flex;
  align-items: center; /*垂直方向居中*/
  justify-content: center;  /*水平方向居中*/

}
</style>
