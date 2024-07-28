// カスタムフック
// 都道府県データ を API から 非同期（async/await）で取得し、ローディング状態 と エラーメッセージ を管理する。
// データ取得中 は ローディング状態を`true`にし、取得が完了すると データを状態に保存する。
// エラーが発生した場合 は エラーメッセージを設定する。

import { useState, useEffect } from 'react'

import { handleApiError } from '../../utils/Prefecture/errorHandling'
import { fetchPrefectures } from '../../utils/Prefecture/prefectureApi'

import { Prefectures } from 'src/utils/Prefecture/Prefecture'

export const usePrefecture = () => {
  const [prefectures, setPrefectures] = useState<Prefectures | undefined>(
    undefined
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    // 非同期関数 を 定義してデータを取得
    const fetchData = async () => {
      // ローディング状態を有効にする
      setIsLoading(true)

      try {
        // APIからデータを取得する
        const data = await fetchPrefectures()
        // 取得したデータを状態に保存する
        setPrefectures(data)
        // エラーメッセージをリセットする
        setErrorMessage('')
      } catch (err) {
        // エラーが発生した場合、エラーメッセージを設定する
        setErrorMessage(handleApiError(err))
      } finally {
        // ローディング状態を無効にする
        setIsLoading(false)
      }
    }

    // 非同期関数を呼び出す
    fetchData()
  }, []) //初回レンダリング時のみ実行したいので、 配列 に何も入れない

  return { prefectures, isLoading, errorMessage }
}
