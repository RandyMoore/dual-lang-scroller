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
      >
        <div class="content-en">{{ item.en }}</div>
        <div class="content-es">{{ item.es }}</div>
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

onMounted(async () => {
  try {
    const response = await fetch('/api/content')
    const fullContent = await response.json()
    
    // Extract only the first line (title) from each content item
    contentItems.value = fullContent.map((item: any) => ({
      id: item.id,
      en: item.en.split('\n')[0], // Get first line only
      es: item.es.split('\n')[0]  // Get first line only
    }))
  } catch (error) {
    console.error('Failed to load content:', error)
  }
})

const navigateToViewer = (id: string) => {
  router.push(`/viewer/${id}`)
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
}

.content-item:hover {
  background-color: #f5f5f5;
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
