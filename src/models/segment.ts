export type Data ={
  text:string
  segments:Segment[]
}
export type Segment = {
  id: number
  start: number
  end: number
  text: string
}
