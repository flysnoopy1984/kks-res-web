<template>
  <div class="news-container">
    <h1 class="page-title">最新推送新闻</h1>
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <span>加载中...</span>
    </div>
    <div v-else-if="error" class="error-message">
      {{ error }}
    </div>
    <div v-else-if="newsList.length === 0" class="empty-message">
      暂无最新推送新闻
    </div>
    <div v-else class="news-list">
      <div 
        v-for="(item, index) in newsList" 
        :key="item.newsInfoId" 
        class="news-item"
        @click="openNews(item.url)"
      >
        <div class="news-content">
          <div class="news-title">{{ item.title }}</div>
          <div class="news-tag">{{ item.sourceName }}</div>
        </div>
        <div class="news-time">{{ formatTime(item.createDateTime) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import apiAiInfo from '@/zfApi/apiAiInfo'
import type { PushNewsLatest } from '@/zfApi/apiAiInfo'
import type { ResComm } from '@/utils/models'

const newsList = ref<PushNewsLatest[]>([])
const loading = ref(true)
const error = ref('')

// 获取最新推送新闻
const fetchLatestNews = async () => {
  try {
    loading.value = true
    const res = await apiAiInfo.queryLatestPushNews() as ResComm<PushNewsLatest[]>
    if (res && res.code === 200 && Array.isArray(res.data)) {
      newsList.value = res.data
    } else {
      newsList.value = []
      if (res && res.code !== 200) {
        error.value = res.msg || '获取数据失败'
        console.error('API返回错误:', res)
      } else {
        error.value = '获取数据失败'
        console.error('数据格式不正确:', res)
      }
    }
  } catch (err) {
    error.value = '获取最新推送新闻失败，请稍后重试'
    console.error('获取最新推送新闻失败:', err)
  } finally {
    loading.value = false
  }
}

// 格式化时间
const formatTime = (dateTimeStr: string) => {
  if (!dateTimeStr) return ''
  
  const date = new Date(dateTimeStr)
  const now = new Date()
  
  // 今天的日期
  const isToday = date.toDateString() === now.toDateString()
  
  if (isToday) {
    return `今天 ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
  }
  
  return `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
}

// 打开新闻链接
const openNews = (url: string) => {
  if (url) {
    window.open(url, '_blank')
  }
}

onMounted(() => {
  fetchLatestNews()
})
</script>

<style scoped>
.news-container {
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #0066cc;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-message, .empty-message {
  text-align: center;
  color: #666;
  margin-top: 40px;
  font-size: 16px;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.news-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.news-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.news-content {
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.news-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  line-height: 1.4;
}

.news-tag {
  display: inline-block;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: #e6f7ff;
  color: #0066cc;
  white-space: nowrap;
  margin-left: 8px;
}

.news-time {
  font-size: 12px;
  color: #999;
  white-space: nowrap;
  margin-left: 8px;
}
</style>
