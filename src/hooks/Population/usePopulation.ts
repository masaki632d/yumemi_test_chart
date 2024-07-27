import { SeriesOptionsType } from 'highcharts'
import { ChangeEvent, useCallback, useReducer, useState } from 'react'

import { handleFetchError } from './errorHandler'
import {
  populationReducer,
  ADD_POPULATION,
  REMOVE_POPULATION,
} from './populationReducer'

import getPopulations from '@hooks/domains/getPopulations'

const initialState: SeriesOptionsType[] = []

export const usePopulation = () => {
  const [state, dispatch] = useReducer(populationReducer, initialState)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handlePrefectureCheck = useCallback(
    (prefCode: number, prefName: string) =>
      async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
          setIsLoading(true)
          try {
            const data = await getPopulations({
              searchParams: { prefCode, cityCode: '-' },
            })
            const totalPopulation = data.result.data.find(
              (category) => category.label === '総人口'
            )
            if (!totalPopulation) {
              throw new Error('Not TotalPopulation Data')
            }
            dispatch({
              type: ADD_POPULATION,
              prefName,
              payload: totalPopulation,
            })
            setErrorMessage('')
          } catch (err) {
            setErrorMessage(handleFetchError(err, prefName))
          } finally {
            setIsLoading(false)
          }
        } else {
          dispatch({ type: REMOVE_POPULATION, prefName })
        }
      },
    []
  )

  const handleResetError = useCallback(() => {
    setErrorMessage('')
  }, [])

  return {
    populations: state,
    isLoading,
    errorMessage,
    handlePrefectureCheck,
    handleResetError,
  }
}
