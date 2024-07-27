// このカスタムフックは、都道府県データ を API から 非同期 で取得し、ローディング状態 と エラーメッセージ を管理します。
// データ取得中はローディング状態を`true`にし、取得が完了するとデータを状態に保存します。
// エラーが発生した場合は、エラーメッセージを設定します。

import { useState, useEffect } from 'react'

import { handleApiError } from './errorHandling'
import { fetchPrefectures } from './prefectureApi'

import { Prefectures } from '@models/Prefecture'

export const usePrefecture = () => {
  const [prefectures, setPrefectures] = useState<Prefectures | undefined>(
    undefined
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    // 非同期関数を定義してデータを取得します
    const fetchData = async () => {
      // ローディング状態を有効にします
      setIsLoading(true)
      try {
        // APIからデータを取得します
        const data = await fetchPrefectures()
        // 取得したデータを状態に保存します
        setPrefectures(data)
        // エラーメッセージをリセットします
        setErrorMessage('')
      } catch (err) {
        // エラーが発生した場合、エラーメッセージを設定します
        setErrorMessage(handleApiError(err))
      } finally {
        // ローディング状態を無効にします
        setIsLoading(false)
      }
    }

    // 非同期関数を呼び出します
    fetchData()
  }, []) //初回レンダリング時のみ実行したいので、 配列に何も入れない

  return { prefectures, isLoading, errorMessage }
}
