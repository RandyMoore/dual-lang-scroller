<template>
  <div class="landing-page">
<div class="content-list">
      <div
        v-for="item in contentItems"
        :key="item.id"
        class="content-item"
        @click="navigateToViewer(item.id)"
        role="button"
        tabindex="0"
        @keydown.enter="navigateToViewer(item.id)"
        target="_blank"
        rel="noopener noreferrer"
        :style="{ '--progress': `${((itemProgress[item.id] ?? 0) * 100).toFixed(1)}%` }"
      >
        <div class="content-es">{{ item.es }}</div>
        <div class="content-en">{{ item.en }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const contentItems = ref<Array<{
  id: string
  en: string
  es: string
}>>([])
const itemProgress = ref<Record<string, number>>({})

onMounted(async () => {
  let fullContent: any[] = []

  try {
    const response = await fetch(import.meta.env.PROD ? `${import.meta.env.BASE_URL}content.json` : '/api/content')
    fullContent = await response.json()
    localStorage.setItem('offlineContent', JSON.stringify(fullContent))
  } catch {
    const cached = localStorage.getItem('offlineContent')
    if (cached) fullContent = JSON.parse(cached)
  }

  contentItems.value = fullContent.map((item: any) => ({
    id: item.id,
    en: item.en.split('\n')[0],
    es: item.es.split('\n')[0]
  }))

  fullContent.forEach((item: any) => {
    const saved = localStorage.getItem(`progress_${item.id}`)
    if (saved) {
      const { progress } = JSON.parse(saved)
      if (typeof progress === 'number') itemProgress.value[item.id] = progress
    }
  })
})

const navigateToViewer = (id: string) => {
  const url = router.resolve({ name: 'ContentViewer', params: { id } }).href
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped>
.landing-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.content-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.content-item {
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: linear-gradient(to right, #e8e8e8 var(--progress, 0%), transparent var(--progress, 0%));
}

.content-item:hover {
  background: linear-gradient(to right, #e8e8e8 var(--progress, 0%), #f5f5f5 var(--progress, 0%));
  border-color: #c0c0c0;
}

.content-en {
  margin-bottom: 1rem;
  color: #2c3e50;
  font-size: 1.1rem;
  line-height: 1.6;
}

.content-es {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  border-top: 1px solid #e0e0e0;
  padding-top: 1rem;
}
</style>
