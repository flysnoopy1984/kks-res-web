<template>
    <div>
        <HomeCarousel></HomeCarousel>
        <HomeSectionList></HomeSectionList>
        <div class="divIn">
          <n-button type="info" @click="doLogin">Login</n-button>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { useMessage } from 'naive-ui'
import { NButton } from 'naive-ui'


async function doLogin(){
  var options = {
    baseURL : "http://wx.iqianba.cn",
  }
  const { data } = await useFetch("/login",options);
  //https://open.weixin.qq.com/connect/qrconnect?appid=wxca2fce9912762fde&redirect_uri=wx.iqianba.cn/login&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect
  alert(data);
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
