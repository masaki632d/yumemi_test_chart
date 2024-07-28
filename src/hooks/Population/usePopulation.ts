import { SeriesOptionsType } from 'highcharts'
import { ChangeEvent, useCallback, useReducer, useState } from 'react'

import { handleFetchError } from '../../utils/Population/errorHandler'
import {
  populationReducer,
  ADD_POPULATION,
  REMOVE_POPULATION,
} from '../../utils/Population/populationReducer'

import { getPopulations } from 'src/api/getPopulations'

// 人口データ の 初期状態
const initialState: SeriesOptionsType[] = []

// 人口データ を 管理するカスタムフック
export const usePopulation = () => {
  // useReducer を使用して、人口データ の 状態管理と状態更新のロジック を定義
  const [state, dispatch] = useReducer(populationReducer, initialState)

  // ローディング状態 を管理するための useStateフック
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // エラーメッセージ を管理するための useStateフック
  const [errorMessage, setErrorMessage] = useState<string>('')

  // 都道府県 の チェックボックスのオン/オフ を処理する関数
  const handlePrefectureCheck = useCallback(
    (prefCode: number, prefName: string) =>
      async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
          setIsLoading(true)

          try {
            // 選択した都道府県の人口データを取得
            const data = await getPopulations({
              searchParams: { prefCode, cityCode: '-' },
            })
            const totalPopulation = data.result.data.find(
              (category) => category.label === '総人口'
            )

            // 総人口データ が存在するか確認
            if (!totalPopulation) {
              throw new Error('Not TotalPopulation Data')
            }
            // 人口データ を状態に追加するアクション を ディスパッチ
            dispatch({
              type: ADD_POPULATION,
              prefName,
              payload: totalPopulation,
            })
            setErrorMessage('')
          } catch (err) {
            // エラーを処理し、エラーメッセージを設定
            setErrorMessage(handleFetchError(err, prefName))
          } finally {
            setIsLoading(false)
          }
        } else {
          // 人口データ を状態から削除するアクション を ディスパッチ
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
