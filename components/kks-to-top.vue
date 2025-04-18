<template>
  <button 
    v-show="show" 
    class="kks-to-top"
    @click="scrollToTop"
    aria-label="回到顶部"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5L5.63604 11.364L7.05026 12.7782L11 8.82843V19H13V8.82843L16.9497 12.7782L18.364 11.364L12 5Z" fill="currentColor"/>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  threshold: {
    type: Number,
    default: 300
  },
  duration: {
    type: Number,
    default: 300
  }
})

const show = ref(false)

const handleScroll = () => {
  show.value = window.scrollY > props.threshold
}

const scrollToTop = () => {
  const startPosition = window.scrollY
  const startTime = performance.now()

  const animateScroll = (currentTime: number) => {
    const elapsedTime = currentTime - startTime
    
    // 使用easeOutCubic缓动函数
    const progress = Math.min(elapsedTime / props.duration, 1)
    const easeProgress = 1 - Math.pow(1 - progress, 3)
    
    window.scrollTo(0, startPosition * (1 - easeProgress))
    
    if (elapsedTime < props.duration) {
      requestAnimationFrame(animateScroll)
    }
  }

  requestAnimationFrame(animateScroll)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.kks-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  transition: background-color 0.3s, transform 0.3s;
}

.kks-to-top:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
}

.kks-to-top:active {
  transform: translateY(-1px);
}
</style>
