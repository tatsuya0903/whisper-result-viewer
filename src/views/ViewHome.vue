<script setup lang="ts">
import { RouteLocations } from '@/router/models'
</script>

<template>
  <div>This is HomeView</div>
  <div>
    <v-btn :to="RouteLocations.toAbout()">About</v-btn>
  </div>
</template>
