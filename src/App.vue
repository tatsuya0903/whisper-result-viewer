<script setup lang="ts">
import { useAudioPlayer } from '@/composables/useAudioPlayer'
import { computed } from 'vue'

const { isPlaying, duration, time, seek, play, pause } = useAudioPlayer()

const currentTime = computed<number>({
  get: () => time.value,
  set: (value) => {
    console.log(value)
    seek(value)
  }
})

const calcTime = (second: number): string => {
  const m = Math.floor(second / 60)
  const s = Math.floor(second) % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

const rewind = (second: number): void => {
  seek(Math.max(0, time.value - second))
}
</script>

<template>
  <v-app>
    <v-app-bar title="文字起こし結果表示ツール" color="primary" density="compact">
      <template #prepend>
        <v-icon icon="mdi-message-text" />
      </template>
      <template #append>
        <div id="actions" />
      </template>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app v-if="duration > 0">
      <v-toolbar>
        <template #title>
          <v-slider
            :min="0"
            :max="duration"
            :model-value="currentTime"
            @end="(value) => (currentTime = value)"
            step="1"
            color="primary"
            hide-details
          >
            <template #prepend>
              {{ calcTime(time) }}
            </template>
            <template #append>
              {{ calcTime(duration) }}
            </template>
          </v-slider>
        </template>
        <template #prepend>
          <v-btn icon="mdi-pause" @click="pause" v-if="isPlaying" color="primary" />
          <v-btn icon="mdi-play" @click="() => play()" v-else color="primary" />
          <v-btn icon="mdi-rewind-5" @click="rewind(5)" color="primary" />
        </template>
      </v-toolbar>
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped></style>
