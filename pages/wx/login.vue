<!--
created by JackySong@2023
-->
<template>
    <div class="mainBody">
        <div class="wapper">
                <div class="signMain">
                    <div class="signHeader">
                            <a class="logo" ></a>
                            <div class="title">网站名称.Slogan</div>
                    </div>
                    <div class="signBody">
                         <div id="login_container" v-if="pageState=1">
                          二维码生成中
                         </div>
                         <div v-else>{{ pageMsg }}</div>
                    </div>
                    <div class=signFooter>
                      <n-button type="primary" @click="nav.toHome()">返回主页</n-button>
                    </div>
            </div>
        </div>
      
    </div>
</template>


<script setup>

import apiWx from '@/zfApi/apiWx'
import { NButton } from 'naive-ui'

definePageMeta({
  layout: 'blank',
});

const url = useRequestURL()

let pageMsg = ""; 
// 0 代表正常登陆，1代表扫码
let pageState = 0;
const code =url.searchParams.get("code");
const state = url.searchParams.get("state");

if(code == null || state == null){
  pageState = 1;
}
else{
  pageState = 0;
  
  if(state == "testCode")
    pageMsg = code;
  else{

    pageMsg = "扫码登录中"; 
    const userLogin = await wxLogin(); 
    
    cookieManager.saveTokenAndOpenId(userLogin.token);
    cookieManager.saveUserInfo(userLogin.userInfo);
  
    nav.toPerson();
  }
}

async function wxLogin(){

   var res = await apiWx.login(code,state);
   if(res.code == 200){
      return res.data;

   }
   else{
      const msg = "登陆失败:"+res.msg;
      web.showGlobeError(msg,res.code);
   }
}

/*直接点击按钮,页面按钮点击后 */
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


function runWxJs(){
  if(pageState == 1){
    const { public: { WxState } } = useRuntimeConfig()
    var obj = new WxLogin({
      id:"login_container",
      appid: "wxca2fce9912762fde",
      scope: "snsapi_login",
      redirect_uri: encodeURIComponent("http://www.iqianba.cn/wx/login"),
      state:WxState,
      response_type:"code"

    });
  } 
}



onMounted(()=>{

  return runWxJs();
  
})
</script>

<style scoped>

.userInfoContainer{
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;

}
.mainBody{
    background-color: #E0E4E8;
    /* background-color: #409EFF; */
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    padding-top: 40px;
}
.wapper{
   border-radius: 8px;
    background-color: white;
    margin:auto auto;
    width: 420px; 
    min-height: 600px;
}
.signMain{
    min-height: 500px;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.signHeader{
    display: flex;
     justify-content: center;
    
     /* margin-top: 20px; */
}
.signHeader .logo{
    display:inline-block;
    height: 80px;
    width: 100px;
    background: url('/img/webLogo_100.png')  no-repeat;
    background-size: 80px 80px;
}
.signHeader .title{
    align-self:center;
    font-size: 20px;
    font-weight: 700; 
    font-family: "PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑" !important; 
}

.signBody{
    /* justify-content: center; */
    padding-top: 40px;
    padding-bottom: 10px;
    display: flex;
    /* justify-content: space-evenly; */
    /* background-color: turquoise; */
    flex-grow: 1;
    flex-direction: column;

}


.signFooter{
     /* background-color: yellow;  */
    /* height: 50px; */
}

.icon-weixin{
 font-size: 40px;
 color: #49C000;
}
.btnToReg{
    float: right;
    padding :20px 0px;
}

@media (max-width:768px) 
{
    .wapper{
      width: 360px;
    }
    .signTextVC{
        width:150px;
    }
 
}
</style>