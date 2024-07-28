import ky, { Options } from 'ky'

import { DEFAULT_API_OPTIONS } from 'src/api/config/ky'
import { Prefectures, isPrefectures } from 'src/utils/Prefecture/Prefecture'

export const getPrefectures = async (
  options?: Options
): Promise<Prefectures> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  }
  const response = await ky.get('prefectures', mergedOptions)
  const prefectures = (await response.json()) as unknown[]

  if (!isPrefectures(prefectures)) {
    throw Error('API type error')
  }

  return prefectures
}
