import { onMounted, ref } from 'vue'
let audio:HTMLAudioElement = new Audio()
const isPlaying = ref<boolean>(false)
const time = ref<number>(0)
export const useAudioPlayer = ()=>{


  onMounted(() => {
  })

  const changeFile = (src:string)=>{
    audio = new Audio(src)
    audio.addEventListener('play', () => {
      isPlaying.value = true
    })
    audio.addEventListener('pause', () => {
      isPlaying.value = false
    })
    audio.addEventListener('timeupdate', () => {
      time.value = audio.currentTime
    })
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