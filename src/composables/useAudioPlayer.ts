import { onMounted, ref } from 'vue'
let audio: HTMLAudioElement = new Audio()
const isPlaying = ref<boolean>(false)
const time = ref<number>(0)
const duration = ref<number>(0)

export const useAudioPlayer = () => {
  onMounted(() => {})

  const changeFile = (src: string) => {
    audio = new Audio()
    audio.addEventListener('play', () => {
      isPlaying.value = true
    })
    audio.addEventListener('pause', () => {
      isPlaying.value = false
    })
    audio.addEventListener('timeupdate', () => {
      time.value = audio.currentTime
    })
    audio.addEventListener('loadedmetadata', () => {
      duration.value = audio.duration
    })
    audio.src = src
    audio.currentTime = 0
  }

  const play = (time: number | undefined = undefined) => {
    if (time !== undefined) {
      audio.pause()
      audio.currentTime = time
    }
    audio.play()
  }

  const pause = () => {
    audio.pause()
  }

  const seek = (time: number) => {
    const played = audio.played
    audio.pause()
    audio.currentTime = time
    if (played) {
      audio.play()
    } else {
      audio.pause()
    }
  }

  return {
    audio,
    isPlaying,
    time,
    duration,
    changeFile,
    play,
    pause,
    seek
  }
}
