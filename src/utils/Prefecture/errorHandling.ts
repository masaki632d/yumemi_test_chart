// エラーハンドリング
import { HTTPError } from 'ky'

export const handleApiError = (err: unknown): string => {
  if (err instanceof HTTPError) {
    return '都道府県データの取得に失敗しました。お手数ですが、お時間経過後に再度お試しください。'
  } else if (err instanceof Error) {
    return '想定しない都道府県データが取得されました。'
  } else {
    console.error(err)
    return '未知のエラーが発生しました。'
  }
}
