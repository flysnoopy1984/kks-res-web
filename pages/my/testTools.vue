<!--
created by JackySong@2023
-->
<template>
    <div>
        {{ show }}
        {{ }}
    </div>
</template>

<script setup>
import {createCat} from '@/test/testclass'

const show = ref(0);
const cfg = useRuntimeConfig();
console.log("cfg",cfg);


 const obj= createCat();
//console.log("env",process.env.NUXT_ZF_API_HOST);
// show.value = tools.diffDay("2023-08-22");
</script>
<style scoped>
</style>