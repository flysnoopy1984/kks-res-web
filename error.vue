<!--
created by JackySong@2023
-->
<template>
    <div>
        <p>get Error: </p>
        <h1>{{ err.statusCode }}</h1>
        <h2> {{ err.message }}</h2>
    </div>
</template>

<script setup>
    const err = useError();

</script>
<style scoped>
</style>