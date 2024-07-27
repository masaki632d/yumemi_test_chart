// API呼び出し
import getPrefectures from '@hooks/domains/getPrefectures'
import { Prefectures } from '@models/Prefecture'

export const fetchPrefectures = async (): Promise<Prefectures> => {
  const data = await getPrefectures()
  return data
}
