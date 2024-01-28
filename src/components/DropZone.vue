<script setup lang="ts">
import { useDropZone, useFileDialog } from '@vueuse/core'
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

const { onChange } = useFileDialog({
  directory: false
})

onChange((fileList) => {
  if(fileList ===null){
    return
  }
  emits('drop', Array.from(fileList))
})

</script>

<template>
  <div ref="dropZoneRef" class="drop-zone" :class="{ 'drop-zone--over': isOverDropZone }">
    <div class="drop-zone__row drop-zone__row--first">ここに変換結果と音声ファイルをドラッグ</div>
    <div class="drop-zone__row drop-zone__row--second">または</div>
    <div class="drop-zone__row drop-zone__row--third">
      <v-btn color="primary">アップロードするファイルを選択</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drop-zone {
  width: 100%;
  max-width: 720px;
  height: 390px;
  border: 3px dashed lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.drop-zone--over {
    border-color: v-bind(primaryColor);
  }

  .drop-zone__row {
    display: flex;

    &.drop-zone__row--first {
      font-size: 20pt;
      color: #767676;
      padding: 0 10px;
    }

    &.drop-zone__row--second {
      padding: 15px 0 5px;
      font-weight: bold;
      font-size: 13px;
      color: #767676;
    }

    &.drop-zone__row--third {
    }
  }
}
</style>
