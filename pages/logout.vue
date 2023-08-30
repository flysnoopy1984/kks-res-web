<!--
created by JackySong@2023
-->
<template>
    <div>
        <h1>退出中...</h1>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'blank',
});

/*清理 Cookie */
cookieManager.quit();
nav.toHome();
</script>
<style scoped>
</style>