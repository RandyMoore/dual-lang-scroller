<template>
  <div class="content-viewer">
    <div class="frame-container">
      <LanguageFrame :content="contentA" language="English" ref="frame1" />
      <LanguageFrame :content="contentB" language="Spanish" ref="frame2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import LanguageFrame from '../components/LanguageFrame.vue'

const route = useRoute()
const contentA = ref('')
const contentB = ref('')
const frame1 = ref<InstanceType<typeof LanguageFrame> | null>(null)
const frame2 = ref<InstanceType<typeof LanguageFrame> | null>(null)
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

// Update URL to use backend route
const updateUrl = () => {
  const contentId = route.params.id as string
  window.history.replaceState({}, '', `/content/${contentId}`)
}

onUnmounted(() => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
})

const setupScrollSync = () => {
  if (!frame1.value || !frame2.value) return

  const syncScroll = (sourceFrame: InstanceType<typeof LanguageFrame>, targetFrame: InstanceType<typeof LanguageFrame>) => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }

    scrollTimeout = window.setTimeout(() => {
      const sourceElement = sourceFrame.$el
      const targetElement = targetFrame.$el
      if (sourceElement && targetElement) {
        targetElement.scrollTop = sourceElement.scrollTop
        targetElement.scrollLeft = sourceElement.scrollLeft
      }
    }, 0)
  }

  const sourceElement1 = frame1.value.$el
  const sourceElement2 = frame2.value.$el
  
  if (sourceElement1 && sourceElement2) {
    sourceElement1.addEventListener('scroll', () => syncScroll(frame1.value!, frame2.value!))
    sourceElement2.addEventListener('scroll', () => syncScroll(frame2.value!, frame1.value!))
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