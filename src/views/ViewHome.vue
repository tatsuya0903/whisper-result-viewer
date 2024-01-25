<script setup lang="ts">
import { RouteLocations } from '@/router/models'
import { ref } from 'vue'
import type { Segment } from '@/models/segment'
import SegmentList from '@/components/SegmentList.vue'

const segments = ref<Segment[]|undefined>(undefined)
</script>

<template>
  <div>This is HomeView</div>
  <div>
    <v-btn :to="RouteLocations.toAbout()">About</v-btn>
  </div>
  <SegmentList v-if="segments" :segments="segments"/>
</template>
