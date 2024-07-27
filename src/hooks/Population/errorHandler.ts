// エラーハンドリング
import { HTTPError } from 'ky'

export const handleFetchError = (err: unknown, prefName: string) => {
  if (err instanceof HTTPError) {
    return `${prefName}の人口遷移データの取得に失敗しました。お手数ですが、お時間経過後に再度お試しください。`
  } else if (err instanceof Error) {
    return '想定しない人口遷移データが取得されました。'
  } else {
    console.error(err)
    return '未知のエラーが発生しました。'
  }
}
