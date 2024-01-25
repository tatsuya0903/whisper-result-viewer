<script setup lang="ts">
import { RouteLocations } from '@/router/models'
import { ref } from 'vue'
import type { Segment } from '@/models/segment'
import SegmentList from '@/components/SegmentList.vue'
import DropZone from '@/components/DropZone.vue'

const segments = ref<Segment[]|undefined>(undefined)

const selectFiles = (files:File[])=>{
  for(const file of files){
    console.log(file.name)
  }
}
</script>

<template>
  <div>This is HomeView</div>
  <div>
    <v-btn :to="RouteLocations.toAbout()">About</v-btn>
  </div>
  <SegmentList v-if="segments" :segments="segments"/>
  <DropZone @drop="selectFiles"/>
</template>
