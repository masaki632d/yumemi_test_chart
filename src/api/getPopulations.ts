import ky, { Options } from 'ky'

import { DEFAULT_API_OPTIONS } from 'src/api/config/ky'
import {
  PopulationCategories,
  isPopulationCategories,
} from 'src/utils/Population/Population'

type QueryParam = {
  prefCode: number
  cityCode: string
  addArea?: string
}

export const getPopulations = async (
  options?: Options & { searchParams?: QueryParam }
): Promise<PopulationCategories> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  }
  const response = await ky.get('population/composition/perYear', mergedOptions)
  const populations = (await response.json()) as unknown[]

  if (!isPopulationCategories(populations)) {
    throw Error('API type error')
  }

  return populations
}
