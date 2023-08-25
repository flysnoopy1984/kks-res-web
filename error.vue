<!--
created by JackySong@2023
-->
<template>
    <div>
        <p>get Error: </p>
        <h1>{{ err.statusCode }}</h1>
        <h1> {{ err.message }}</h1>
        <h2>{{ err.stack }}</h2>
        
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