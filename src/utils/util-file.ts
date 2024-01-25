import type { File } from '@babel/types'

export const convertDataUrl = (file:File):Promise<string> =>{
  return new Promise<string>((resolve)=>{
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function(){
      if(typeof reader.result === 'string') {
        resolve(reader.result)
      }
    }
  })
}