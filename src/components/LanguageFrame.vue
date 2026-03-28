<template>
  <div class="language-frame" ref="frameRef">
    <div class="frame-content">{{ content }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  content: string
  language?: string
}

const props = withDefaults(defineProps<Props>(), {
  language: 'Unknown'
})

const frameRef = ref<HTMLElement | null>(null)
let scrollTimeout: number | null = null

onMounted(() => {
  setupScrollSync()
})

onUnmounted(() => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
})

const setupScrollSync = () => {
  if (!frameRef.value) return

  const syncScroll = (sourceFrame: HTMLElement, targetFrame: HTMLElement) => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }

    scrollTimeout = window.setTimeout(() => {
      targetFrame.scrollTop = sourceFrame.scrollTop
      targetFrame.scrollLeft = sourceFrame.scrollLeft
    }, 0)
  }

  frameRef.value.addEventListener('scroll', () => {
    // This component will be used in a container where scroll sync is handled
    // by the parent component
  })
}
</script>

<style scoped>
.language-frame {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.language-frame::-webkit-scrollbar {
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