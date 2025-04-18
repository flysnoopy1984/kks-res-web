<template>
  <div class="fullscreen-container">
    <div class="content-container">
      <div class="image-container">
        <img src="/img/kks_mini_ys.jpg" alt="欢迎图片" />
      </div>
      <div class="welcome-text">
        欢迎光临
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 此页面展示全屏欢迎页，中间是图片，下面是欢迎文字
</script>

<style scoped>
.fullscreen-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  overflow: hidden;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.image-container {
  margin-bottom: 20px;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.welcome-text {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
}
</style>
