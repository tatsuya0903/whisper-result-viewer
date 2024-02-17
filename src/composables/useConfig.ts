import { useStorage } from '@vueuse/core'
export const useConfig = () => {
  const isAutoScroll = useStorage('is-auto-scroll', true)
  return { isAutoScroll }
}
