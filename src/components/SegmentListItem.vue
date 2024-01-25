<script setup lang="ts">
import type { Segment } from '@/models/segment'

defineProps<{
  segment: Segment
  isPlaying: boolean
  isActive: boolean
}>()

const calcTime = (second: number): string => {
  const m = Math.floor(second / 60)
  const s = Math.floor(second) % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}


const emits = defineEmits<{ (e: 'click'): void }>()

</script>

<template>
  <v-list-item @click="emits('click')" :active="isActive" :id="segment.id">
    <v-list-item-subtitle
    >{{ calcTime(segment.start) }}〜{{ calcTime(segment.end) }}</v-list-item-subtitle
    >
    <v-list-item-media>
      {{ segment.text }}
    </v-list-item-media>
    <template #append>
      <v-icon icon="mdi-pause" v-if="isPlaying" />
      <v-icon icon="mdi-play" v-else />
    </template>
  </v-list-item>
</template>

<style lang="scss" scoped></style>
