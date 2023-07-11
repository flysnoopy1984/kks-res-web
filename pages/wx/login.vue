<!--
created by JackySong@2023
-->
<template>
    <div>
        <p>URL is: {{ url }}</p>
        <p>Path is: {{ url.pathname }}</p>
        <p>Param is: {{ url.searchParams.get("code") }}</p>

    </div>
  
</template>

<script setup>
const url = useRequestURL()
definePageMeta({
  layout: '',
});

var code =url.searchParams.get("code");
var state = url.searchParams.get("state");
console.log(code);
console.log(state);

if(code == null || state == null){
  navigateTo({ 
    path: '/error',
    query: {
      msg: "no way!",
  } })
}



// import '~/assets/css/main.css'

// useHead({
//     script:
//     [
//         {
//             src: "http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js",
//             body: true
//         },
//         {
//             src: "/js/runwx.js",
//             body: true
//         },    
//     ],
    
// })



</script>

<style scoped>
</style>