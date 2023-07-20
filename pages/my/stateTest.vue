<!--
created by JackySong@2023
-->
<template>
    <div>
        token:{{ token }}
        t2 :{{ key }}
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'test'
})

    const token = useApiToken();
               
    const key =  lsKeys.userToken;
    //.at.  useState("token")
   
</script>
<style scoped>
</style>