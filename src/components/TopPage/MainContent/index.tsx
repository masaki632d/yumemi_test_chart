import { ErrorState } from './ErrorState'
import { LoadingState } from './LoadingState'
import { styles } from './style'
import { SuccessState } from './SuccessState'
import { Toast } from './Toast'
import { Alert } from './Toast/Alert'

import { usePopulation } from '@hooks/Population/usePopulation'
import { usePrefecture } from '@hooks/Prefecture/usePrefecture'

export const MainContent = () => {
  const {
    isLoading,
    errorMessage: prefectureErrorMessage,
    prefectures,
  } = usePrefecture()

  const {
    populations,
    errorMessage: populationErrorMessage,
    handlePrefectureCheck,
    handleResetError,
  } = usePopulation()

  return (
    <main css={styles.main}>
      {isLoading ? (
        // API読み込み中 のUI
        <LoadingState />
      ) : prefectureErrorMessage ? (
        // API読み込みエラー時の UI
        <ErrorState errorMessage={prefectureErrorMessage} />
      ) : (
        // APIデータ取得成功時の UI
        prefectures && (
          <SuccessState
            prefectures={prefectures?.result}
            populations={populations}
            handleCheck={handlePrefectureCheck}
          />
        )
      )}

      <Toast isOpen={!!populationErrorMessage} onClose={handleResetError}>
        <Alert type="error">{populationErrorMessage}</Alert>
      </Toast>
    </main>
  )
}
