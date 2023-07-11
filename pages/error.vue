<template>
    <div>
        <h1>sorry you got Error!</h1>
        <h2>{{ msg }}</h2>
    </div>
</template>
<script setup>
const url = useRequestURL()
var msg =url.searchParams.get("msg");

definePageMeta({
  layout: '',
});
</script>