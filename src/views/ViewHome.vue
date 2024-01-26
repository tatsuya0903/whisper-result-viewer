<script setup lang="ts">
import { ref } from 'vue'
import type { Segment } from '@/models/segment'
import SegmentList from '@/components/SegmentList.vue'
import DropZone from '@/components/DropZone.vue'
import { useAudioPlayer } from '@/composables/useAudioPlayer'

const segments = ref<Segment[]|undefined>(undefined)

const {changeFile} = useAudioPlayer()

const selectFiles =async (files:File[])=>{
  for(const file of files){
    console.log(file.name)

    if(file.name.endsWith('.json')){
      segments.value = JSON.parse(await file.text()).segments
    }

    if(file.name.endsWith('.mov')){
      const url = window.URL.createObjectURL(file)
      changeFile(url)
    }
  }
}
</script>

<template>
  <SegmentList v-if="segments" :segments="segments"/>
  <DropZone @drop="selectFiles"/>
</template>
