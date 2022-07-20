export interface IStartGame {
  start: boolean
  symbol: 'x' | 'o'
}
export type IPlayMatrix = Array<Array<string | null>>
