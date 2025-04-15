<!-- pages/video.vue -->
<template>
  <div class="fixed inset-0 bg-black">
    <div class="absolute inset-0">
      <video 
        ref="videoPlayer"
        class="w-screen h-screen object-cover"
        controls
        preload="metadata"
        playsinline
        webkit-playsinline
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        x5-video-orientation="portrait"
        @error="handleVideoError"
      >
        <source :src="videoUrl" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="fixed bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 z-10">
      <input 
        v-model="videoUrl"
        type="text"
        placeholder="输入视频URL"
        class="w-full p-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-blue-500"
        @input="resetVideoError"
      />
      
      <div v-if="errorMessage" class="mt-2 text-red-400 text-sm">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

useHead({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover',
  meta: [
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'format-detection', content: 'telephone=no' }
  ]
})

const videoPlayer = ref(null)
const videoUrl = ref('')
const errorMessage = ref('')

const handleVideoError = (error) => {
  console.error('Video error:', error)
  errorMessage.value = '视频加载失败，请检查URL或网络连接'
}

const resetVideoError = () => {
  errorMessage.value = ''
}

const loadVideoWithHeaders = async () => {
  try {
    const response = await fetch(videoUrl.value, {
      headers: {
        'Referer': 'https://www.douyin.com',
        'Range': 'bytes=0-'
      }
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const blob = await response.blob()
    const objectUrl = URL.createObjectURL(blob)
    if (videoPlayer.value) {
      videoPlayer.value.src = objectUrl
    }
  } catch (error) {
    console.error('Error loading video:', error)
    errorMessage.value = '加载视频失败：' + error.message
  }
}

watch(videoUrl, (newUrl) => {
  if (newUrl) {
    loadVideoWithHeaders()
  }
})

onMounted(() => {
  // 处理移动端全屏
  if (document.documentElement) {
    document.documentElement.style.height = '100%'
    document.documentElement.style.overflow = 'hidden'
  }
  if (document.body) {
    document.body.style.height = '100%'
    document.body.style.overflow = 'hidden'
  }
})
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background: black;
  margin: 0;
  padding: 0;
}

video::-webkit-media-controls-fullscreen-button {
  display: none;
}
</style>