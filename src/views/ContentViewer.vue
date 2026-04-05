<template>
  <div class="content-viewer">
    <div class="frame-container">
      <LanguageFrame :content="contentB" language="Spanish" ref="frame1" />
      <Divider />
      <LanguageFrame :content="contentA" language="English" ref="frame2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import LanguageFrame from '../components/LanguageFrame.vue'
import Divider from '../components/Divider.vue'

const route = useRoute()
const contentA = ref('')
const contentB = ref('')
const frame1 = ref<InstanceType<typeof LanguageFrame> | null>(null)
const frame2 = ref<InstanceType<typeof LanguageFrame> | null>(null)
let scrollOffset = 0
let isSyncing = false
let saveTimer: ReturnType<typeof setTimeout>

onMounted(async () => {
  const contentId = route.params.id as string
  
  try {
    let data: any[]
    try {
      const response = await fetch(import.meta.env.PROD ? `${import.meta.env.BASE_URL}content.json` : '/api/content')
      data = await response.json()
    } catch {
      const cached = localStorage.getItem('offlineContent')
      if (!cached) { console.error('No cached content available'); return }
      data = JSON.parse(cached)
    }

    const content = data.find((item: any) => item.id === contentId)
    if (!content) { console.error('Content not found:', contentId); return }

    contentA.value = content.en
    contentB.value = content.es
    document.title = content.es.split('\n')[0]
    setupScrollSync()
  } catch (error) {
    console.error('Failed to load content:', error)
  }
})

// Update URL to use backend route
const updateUrl = () => {
  const contentId = route.params.id as string
  window.history.replaceState({}, '', `/viewer/${contentId}`)
}

onUnmounted(() => { document.title = 'Dual-Language Scroller' })

const setupScrollSync = () => {
  if (!frame1.value || !frame2.value) return

  const el1 = frame1.value.$el  // top frame (Spanish)
  const el2 = frame2.value.$el  // bottom frame (English)

  if (!el1 || !el2) return

  const contentId = route.params.id as string
  const storageKey = `progress_${contentId}`

  const saveProgress = () => {
    clearTimeout(saveTimer)
    saveTimer = setTimeout(() => {
      const maxScroll = el1.scrollHeight - el1.clientHeight
      const progress = maxScroll > 0 ? el1.scrollTop / maxScroll : 0
      localStorage.setItem(storageKey, JSON.stringify({
        top: el1.scrollTop,
        bottom: el2.scrollTop,
        progress
      }))
    }, 200)
  }

  // When bottom frame is manually scrolled, record the new offset relative to top frame
  el2.addEventListener('scroll', () => {
    if (!isSyncing) scrollOffset = el2.scrollTop - el1.scrollTop
    saveProgress()
  })

  // When top frame scrolls, sync bottom frame while preserving the established offset
  el1.addEventListener('scroll', () => {
    isSyncing = true
    el2.scrollTop = el1.scrollTop + scrollOffset
    requestAnimationFrame(() => { isSyncing = false })
    saveProgress()
  })

  // Restore saved position after content has rendered
  const saved = localStorage.getItem(storageKey)
  if (saved) {
    const { top, bottom } = JSON.parse(saved)
    nextTick(() => {
      el1.scrollTop = top
      el2.scrollTop = bottom
      scrollOffset = bottom - top
    })
  }
}
</script>

<style scoped>
.content-viewer {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #ffffff;
}

.frame-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.frame {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.frame::-webkit-scrollbar {
  display: none;
}

.frame-content {
  padding: 1rem;
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 1.6;
  font-size: 16px;
  color: #2c3e50;
  text-align: left;
}
</style>