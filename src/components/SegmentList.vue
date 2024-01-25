<script setup lang="ts">
import { computed, watch } from 'vue'
import type { Segment } from '@/models/segment'
import SegmentListItem from '@/components/SegmentListItem.vue'
import { useAudioPlayer } from '@/composables/useAudioPlayer'

const props = defineProps<{
  segments: Segment[]
}>()

const {time, play, isPlaying} = useAudioPlayer()

const selectedSegment = computed(()=>props.segments.find((v) => v.start <= time.value && time.value <= v.end))

const clickPlay = (segment: Segment) => {
  play(segment.start)
}

watch(()=>selectedSegment.value?.id,(value)=>{
  if(value) {
    const element = document.getElementById(`${value}`)
    if (element) {
      // @ts-ignore
      element.scrollIntoViewIfNeeded({ behavior: 'smooth' })
    }
  }
})

</script>

<template>
  <v-list density="compact" color="primary">
    <v-divider />
    <template v-for="segment in segments" :key="segment.id">
      <SegmentListItem
        :segment="segment"
        :is-playing="isPlaying && segment.id === selectedSegment?.id"
        @click="clickPlay(segment)"
        :is-active="segment.id === selectedSegment?.id"
      />
      <v-divider />
    </template>
  </v-list>
</template>

<style lang="scss" scoped></style>
