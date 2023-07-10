<!--
created by JackySong@2023
-->
<template>
    <div>
        WX Login Test
        <div id="login_container">
           
        </div>
    </div>
  
</template>

<script setup>
import '~/assets/css/main.css'
definePageMeta({
  layout: 'blank',
});
useHead({
    script:
    [
        {
            src: "http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js",
            body: true
        },
        {
            src: "/assets/js/runwx.js",
            body: true
        },    
    ],
    
})



</script>

<style scoped>
</style>