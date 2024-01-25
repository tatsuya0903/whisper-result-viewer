import { onMounted, ref } from 'vue'
const audio = new Audio()
const isPlaying = ref<boolean>(false)
const time = ref<number>(0)
export const useAudioPlayer = ()=>{


  onMounted(() => {
    audio.addEventListener('play', () => {
      isPlaying.value = true
    })
    audio.addEventListener('pause', () => {
      isPlaying.value = false
    })
    audio.addEventListener('timeupdate', () => {
      time.value = audio.currentTime
    })
  })

  const changeFile = (src:string)=>{
    audio.src= src
  }

  const play = (time:number)=>{
    audio.pause()
    audio.currentTime = time
    audio.play()
  }

  const pause = ()=>{
    audio.pause()
  }

  return{
    audio,
    isPlaying,
    time,
    changeFile,
    play,
    pause,
  }
}