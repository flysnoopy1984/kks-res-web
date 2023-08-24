<!--
created by JackySong@2023
-->
<template>
    <div>
        {{ show }}
    </div>
</template>

<script setup>
const show = ref(0);

show.value = tools.diffDay("2023-08-22");
</script>
<style scoped>
</style>