<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Data, Segment } from '@/models/segment'
import SegmentList from '@/components/SegmentList.vue'
import DropZone from '@/components/DropZone.vue'
import { useAudioPlayer } from '@/composables/useAudioPlayer'

const data = ref<Data|undefined>(undefined)
const segments = computed<Segment[]|undefined>(()=>data.value?.segments)

const { changeFile } = useAudioPlayer()

const selectFiles = async (files: File[]) => {
  for (const file of files) {
    console.log(file.name)

    if (file.name.endsWith('.json')) {
      data.value = JSON.parse(await file.text())
    }

    if (['.mov', '.mp3'].some((ext) => file.name.endsWith(ext))) {
      const url = window.URL.createObjectURL(file)
      changeFile(url)
    }
  }
}

const downloadTxt = (data:Data)=>{
  const blob = new Blob([data.text], {type: 'text/plain'})
  const link = document.createElement('a');
  link.download = '文字起こし結果.txt'; // ダウンロードファイル名称
  link.href = URL.createObjectURL(blob); // オブジェクト URL を生成
  link.click(); // クリックイベントを発生させる
  URL.revokeObjectURL(link.href); // オブジェクト URL を解放」
}


const downloadTsv = (data:Data)=>{
  const lines:(string|number)[][]=[]
  for(const segment of data.segments){
    lines.push([segment.id,segment.start,segment.end,segment.text])
  }

  const tsv = lines.map(v=>v.join('\t')).join('\n')

  const blob = new Blob([tsv], {type: 'text/tab-separated-values'})
  const link = document.createElement('a');
  link.download = '文字起こし結果.tsv'; // ダウンロードファイル名称
  link.href = URL.createObjectURL(blob); // オブジェクト URL を生成
  link.click(); // クリックイベントを発生させる
  URL.revokeObjectURL(link.href); // オブジェクト URL を解放」
}
</script>

<template>
  <teleport to="#actions" v-if="data">
    <v-btn prepend-icon="mdi-download" variant="text" @click="downloadTxt(data)">テキスト</v-btn>
    <v-btn prepend-icon="mdi-download" variant="text" @click="downloadTsv(data)">TSV</v-btn>
  </teleport>

  <SegmentList v-if="segments" :segments="segments" />
  <template v-else>
    <div style="padding-top: 32px; display: flex; justify-content: center">
      <DropZone @drop="selectFiles" />
    </div>
  </template>
</template>
