<template>
  <div class="content-viewer">
    <div class="frame-container">
      <div class="frame" ref="frame1">
        <div class="frame-content">{{ contentA }}</div>
      </div>
      <div class="frame" ref="frame2">
        <div class="frame-content">{{ contentB }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const contentA = ref('')
const contentB = ref('')
const frame1 = ref<HTMLElement | null>(null)
const frame2 = ref<HTMLElement | null>(null)
let scrollTimeout: number | null = null

onMounted(async () => {
  const contentId = route.params.id as string
  
  try {
    const response = await fetch(`/api/content/${contentId}`)
    const data = await response.json()
    contentA.value = data.contentA
    contentB.value = data.contentB
    
    setupScrollSync()
  } catch (error) {
    console.error('Failed to load content:', error)
  }
})

onUnmounted(() => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
})

const setupScrollSync = () => {
  if (!frame1.value || !frame2.value) return

  const syncScroll = (sourceFrame: HTMLElement, targetFrame: HTMLElement) => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }

    scrollTimeout = window.setTimeout(() => {
      targetFrame.scrollTop = sourceFrame.scrollTop
      targetFrame.scrollLeft = sourceFrame.scrollLeft
    }, 0)
  }

  frame1.value.addEventListener('scroll', () => syncScroll(frame1.value!, frame2.value!))
  frame2.value.addEventListener('scroll', () => syncScroll(frame2.value!, frame1.value!))
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