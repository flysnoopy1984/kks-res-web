<template>
  <div class="news-container">
    <kks-to-top :threshold="300" />
    <div class="sticky-header">
      <div class="header-container">
        <h1 class="page-title">最新推送新闻</h1>
        <div class="filter-section">
          <div class="mb-4">
            <ClientOnly>
              <USelect
                v-model="selectedTags"
                :items="sources.map(source => ({
                  label: source,
                  value: source
                }))"
                multiple
                placeholder="选择新闻来源筛选"
              />
            </ClientOnly>
          </div>
          <div class="selected-tags">
            <div class="flex gap-2 flex-wrap">
              <kks-tag
                v-for="tag in selectedTags"
                :key="tag"
                :color="NewsTagColorManager.getColorByName(tag)"
                closable
                class="mr-1 mb-1 cursor-pointer"
                @close="selectedTags = selectedTags.filter(t => t !== tag)"
              >
                {{ tag }}
              </kks-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 使用 ClientOnly 组件避免SSR水合不匹配问题 -->
    <ClientOnly>
      <div v-if="status === 'pending'" class="loading">
        <div class="spinner"></div>
        <span>加载中...</span>
      </div>
      <div v-else-if="error" class="error-message">
        {{ error }}
      </div>
      <div v-else-if="newsList?.length === 0" class="empty-message">
        暂无最新推送新闻
      </div>
      <div v-else class="news-list">
        <div 
          v-for="item in filteredNewsList" 
          :key="item.newsInfoId" 
          class="news-item"
          @click="openNews(item.url)"
        >
          <div class="news-content">
            <div class="news-title">{{ item.title }}</div>
            <kks-tag
              :color="NewsTagColorManager.getColorByName(item.sourceName)"
            >
              {{ item.sourceName }}
            </kks-tag>
          </div>
          <div class="news-time">{{ formatTime(item.createDateTime) }}</div>
        </div>
      </div>
      <template #fallback>
        <div class="loading">
          <div class="spinner"></div>
          <span>加载中...</span>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import apiAiInfo from '@/zfApi/apiAiInfo'
import type { PushNewsLatest } from '@/zfApi/apiAiInfo'
import type { ResComm } from '@/utils/models'
import NewsTagColorManager from '@/utils/news_tagColors'

// 使用 useState 确保 SSR 状态一致性
const selectedTags = useState<string[]>('news-selected-tags', () => []);

// 直接使用 apiAiInfo.queryLatestPushNews()，它内部已经封装了 useFetch
const { data, error, status } = await apiAiInfo.queryLatestPushNews();

// 确保 newsList 在 SSR 和客户端渲染中保持一致
const newsList = useState<PushNewsLatest[]>('news-list', () => []);

// 当数据返回时更新 newsList
watchEffect(() => {
  if (data.value && data.value.code === 200 && Array.isArray(data.value.data)) {
    newsList.value = data.value.data as PushNewsLatest[];
  }
});


// 获取所有unique的sources
const sources = computed(() => {
  if (!Array.isArray(newsList.value)) return []
  const uniqueSources = new Set(newsList.value.filter(item => item && item.sourceName).map(item => item.sourceName))
  return Array.from(uniqueSources)
})

// 调试日志，查看sources的值
watch(sources, (newVal) => {
  // console.log('新闻来源列表:', newVal)
}, { immediate: true })



// 从cookie中获取已保存的标签
const savedTags = useCookie('kks_news_tags', {
  maxAge: 3600 * 24 * 30 // 30天有效期
})

// 初始化选中的标签
const savedTagsStr = savedTags.value?.toString() ?? ''
if (savedTagsStr) {
  selectedTags.value = savedTagsStr.split(',').filter(Boolean)
}

// 监听标签变化并保存到cookie
watch(selectedTags, (newVal) => {
  // 将数组转换为逗号分隔的字符串
  savedTags.value = newVal.join(',') || null
}, { deep: true })

// 过滤新闻列表
const filteredNewsList = computed(() => {
  if (!Array.isArray(newsList.value)) return []
  if (selectedTags.value.length === 0) return newsList.value
  return newsList.value.filter(item => item && item.sourceName && selectedTags.value.includes(item.sourceName))
})

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

// onMounted(() => {

//     fetchLatestNews()
// })
</script>

<style scoped>
.news-container {
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.header-container {
  background: #fff;
  padding: 16px;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}

.filter-section {
  width: 100%;
  margin-bottom: 8px;
}

.selected-tags {
  margin-top: 8px;
  min-height: 32px;
}

.sticky-header {
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
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
