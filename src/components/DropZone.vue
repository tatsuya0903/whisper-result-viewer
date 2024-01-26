<script setup lang="ts">
import { useDropZone } from '@vueuse/core'
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const dropZoneRef = ref<HTMLDivElement>()
const emits = defineEmits<{ (e: 'drop', files: File[]): void }>()

function onDrop(files: File[] | null) {
  // called when files are dropped on zone
  if (files === null) {
    return
  }

  emits('drop', files)
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop
})

const { current } = useTheme()
const primaryColor = current.value.colors.primary
</script>

<template>
  <div ref="dropZoneRef" class="drop-zone" :class="{ 'drop-zone--over': isOverDropZone }">
    Drop files here
  </div>
</template>

<style lang="scss" scoped>
.drop-zone {
  width: 300px;
  height: 200px;
  border: 3px dashed lightgray;

  &.drop-zone--over {
    border-color: v-bind(primaryColor);
  }
}
</style>
