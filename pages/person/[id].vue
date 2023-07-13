<template>
    <div>
        {{ $route.params.group }}
        {{ $route.params.id }}
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'person'
})
</script>