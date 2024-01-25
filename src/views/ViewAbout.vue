<script setup lang="ts">
import { RouteLocations } from '@/router/models'
</script>

<template>
  <div>This is AboutView</div>
  <div>
    <v-btn :to="RouteLocations.toHome()">Home</v-btn>
  </div>
</template>
