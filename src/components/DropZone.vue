<script setup lang="ts">
import { useDropZone } from '@vueuse/core'
import { ref } from 'vue'

const dropZoneRef = ref<HTMLDivElement>()
const emits = defineEmits<{ (e: 'drop',files:File[]): void }>()


function onDrop(files: File[] | null) {
  // called when files are dropped on zone

  emits('drop',files)
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  // specify the types of data to be received.
  dataTypes: ['image/jpeg']
})
</script>

<template>
  <div ref="dropZoneRef" class="drop-zone">
    Drop files here
  </div>
</template>

<style lang="scss" scoped>
.drop-zone{
  width: 300px;
  height: 200px;
  border: 3px dashed gray;
}
</style>