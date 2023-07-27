<!--
created by JackySong@2023
-->
<template>
    <div>
        <div id="login_container">

        </div>
            <h1><button @click="nav.toHome()">返回主页</button>></h1>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'blank',
});
function runWxJs(){
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
onMounted(()=>{

    runWxJs();
})
</script>
<style scoped>
</style>