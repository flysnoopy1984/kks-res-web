<template>
    <div>
    
    <n-carousel autoplay    
      style="width: 100%; height: 240px"
    >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      >
    </n-carousel>
    </div>
  
  </template>
  
  <style scoped>
  .carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
  
  :deep(.creative-enter-from),
  :deep(.creative-leave-to) {
    opacity: 0;
    transform: scale(0.8);
  }
  
  :deep(.creative-enter-active),
  :deep(.creative-leave-active) {
    transition: all 0.3s ease;
  }
  </style>

<script setup>
import { NCarousel } from 'naive-ui'
</script>