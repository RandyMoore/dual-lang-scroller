<template>
  <div class="divider" :style="dividerStyle"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  height?: string
  color?: string
  borderColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  height: '10px',
  color: '#7c7c7cff',
  borderColor: '#000000'
})

const dividerStyle = computed(() => ({
  height: props.height,
  backgroundColor: props.color,
  borderTop: `1px solid ${props.borderColor}`,
  borderBottom: `1px solid ${props.borderColor}`
}))
</script>

<style scoped>
.divider {
  width: 100%;
}
</style>