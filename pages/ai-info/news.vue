<template>
  <div class="news-container">
    <n-back-top :bottom="20" />
    <n-affix>
      <div class="header-container">
        <h1 class="page-title">最新推送新闻</h1>
        <n-space vertical>
          <div class="filter-section">
            <n-select
              v-model:value="selectedTags"
              multiple
              placeholder="选择新闻来源筛选"
              :options="sources.map(source => ({
                label: source,
                value: source
              }))"
            />
          </div>
          <div class="selected-tags">
            <n-space>
              <n-tag
                v-for="tag in selectedTags"
                :key="tag"
                closable
                :color="{ color: getSourceColor(tag), textColor: '#fff' }"
                @close="selectedTags = selectedTags.filter(t => t !== tag)"
              >
                {{ tag }}
              </n-tag>
            </n-space>
          </div>
        </n-space>
      </div>
    </n-affix>
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
          <n-tag :color="{ color: getSourceColor(item.sourceName), textColor: '#fff' }">
            {{ item.sourceName }}
          </n-tag>
        </div>
        <div class="news-time">{{ formatTime(item.createDateTime) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import apiAiInfo from '@/zfApi/apiAiInfo'
import type { PushNewsLatest } from '@/zfApi/apiAiInfo'
import type { ResComm } from '@/utils/models'
import { NBackTop, NTag, NSpace, NAffix, NSelect } from 'naive-ui'
import NewsTagColorManager from '@/utils/news_tagColors'

// 获取所有unique的sources
const sources = computed(() => {
  if (!newsList.value) return []
  const uniqueSources = new Set(newsList.value.map(item => item.sourceName))
  return Array.from(uniqueSources)
})

// 选中的标签
const selectedTags = ref<string[]>([])

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

// 根据sourceName获取颜色
const getSourceColor = (sourceName: string) => {
  return NewsTagColorManager.getColorByName(sourceName)
}

// 过滤新闻列表
const filteredNewsList = computed(() => {
  if (!newsList.value) return []
  if (selectedTags.value.length === 0) return newsList.value
  return newsList.value.filter(item => selectedTags.value.includes(item.sourceName))
})


// 获取最新推送新闻
// 使用useAsyncData进行数据获取
const { data: newsList, status, error, refresh } = await useAsyncData(
  'news',
  async () => {
    try {
      const res = await apiAiInfo.queryLatestPushNews() as ResComm<PushNewsLatest[]>
      if (res && res.code === 200 && Array.isArray(res.data)) {
    
        return res.data
      }
      throw new Error(res?.msg || '获取数据失败')
    } catch (err) {
      throw new Error('获取最新推送新闻失败，请稍后重试')
    }
  }
)


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
