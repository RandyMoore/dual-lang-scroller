<template>
  <div class="landing-page">
    <h1>Dual-Language Scroller</h1>
    <div class="content-list">
      <div
        v-for="item in contentItems"
        :key="item.id"
        class="content-item"
        @click="navigateToViewer(item.id)"
      >
        <h2>{{ item.title.en || item.title.es || 'Untitled' }}</h2>
        <p>{{ item.description || 'Select to view content' }}</p>
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
  title: { en: string; es: string }
  description?: string
  metadata?: any
}>>([])

onMounted(async () => {
  try {
    const response = await fetch('/api/content')
    contentItems.value = await response.json()
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

h1 {
  margin-bottom: 2rem;
  color: #2c3e50;
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

.content-item h2 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.content-item p {
  margin: 0;
  color: #666;
}
</style>