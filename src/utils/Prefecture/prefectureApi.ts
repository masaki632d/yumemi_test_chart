// API呼び出し
import { getPrefectures } from 'src/api/getPrefectures'
import { Prefectures } from 'src/utils/Prefecture/Prefecture'

export const fetchPrefectures = async (): Promise<Prefectures> => {
  const data = await getPrefectures()
  return data
}
