<!--
created by JackySong@2023
-->
<template>
    <div>
        <h1>错误 </h1>
        <div>{{ err.statusCode }}</div>
        <!-- <h1>{{ err.statusCode }}</h1> -->
        <h2> {{ err.message }}</h2>
        
        <div>
            <n-button type="primary" @click="nav.toHome()">返回主页</n-button>
        </div>
    </div>
</template>

<script setup>
import { NButton } from 'naive-ui'
 const err = useError();
</script>
<style scoped>
</style>