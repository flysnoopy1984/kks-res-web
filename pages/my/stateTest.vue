<!--
created by JackySong@2023
-->
<template>
    <div>
        token:{{ token }}
        after set token :{{ after }}
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'test'
})

let token = useApiToken();
token.value = "abcdeft";
let after = useApiToken();
const key =  lsKeys.userToken;
    //.at.  useState("token")
   
</script>
<style scoped>
</style>