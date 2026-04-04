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
import { ref, onMounted, onUnmounted } from 'vue'
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

onMounted(async () => {
  const contentId = route.params.id as string
  
  try {
    const response = await fetch('/api/content')
    const data = await response.json()
    const content = data.find((item: any) => item.id === contentId)
    
    if (!content) {
      console.error('Content not found:', contentId)
      return
    }
    
    contentA.value = content.en
    contentB.value = content.es
    
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

const setupScrollSync = () => {
  if (!frame1.value || !frame2.value) return

  const el1 = frame1.value.$el  // top frame (Spanish)
  const el2 = frame2.value.$el  // bottom frame (English)

  if (!el1 || !el2) return

  // When bottom frame is manually scrolled, record the new offset relative to top frame
  el2.addEventListener('scroll', () => {
    if (isSyncing) return
    scrollOffset = el2.scrollTop - el1.scrollTop
  })

  // When top frame scrolls, sync bottom frame while preserving the established offset
  el1.addEventListener('scroll', () => {
    isSyncing = true
    el2.scrollTop = el1.scrollTop + scrollOffset
    requestAnimationFrame(() => {
      isSyncing = false
    })
  })
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