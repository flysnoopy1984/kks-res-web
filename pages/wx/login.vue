<!--
created by JackySong@2023
-->
<template>
    <div>
        <p>URL is: {{ url }}</p>
        <p>Path is: {{ url.pathname }}</p>
        <p>Param is: {{ url.searchParams }}</p>

    </div>
  
</template>

<script setup>
const url = useRequestURL()

// import '~/assets/css/main.css'
definePageMeta({
  layout: '',
});
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