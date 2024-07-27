import { styles } from './style'

import { Header } from '@components/TopPage/Header'
import { PopulationGraph } from '@components/TopPage/PopulationGraph'
import { PrefectureFieldset } from '@components/TopPage/PrefectureFieldset'
import { Toast } from '@components/TopPage/Toast'
import { Alert } from '@components/TopPage/Toast/Alert'
import { usePopulation } from '@hooks/Population/usePopulation'
import { usePrefecture } from '@hooks/Prefecture/usePrefecture'

export const TopPage = () => {
  const {
    prefectures,
    isLoading,
    errorMessage: prefectureErrorMessage,
  } = usePrefecture()

  const {
    populations,
    errorMessage: populationErrorMessage,
    handlePrefectureCheck,
    handleResetError,
  } = usePopulation()

  return (
    <>
      <Header />

      <main css={styles.main}>
        {isLoading ? (
          // 都道府県API  - 読み込み中の UI
          <div css={[styles.container, styles.mainLoadingLayout]}>
            <p css={styles.mainLoadingText}>Loading...</p>
          </div>
        ) : prefectureErrorMessage ? (
          // 都道府県API  - エラー時の UI
          <div css={styles.container}>
            <Alert type="error">{prefectureErrorMessage}</Alert>
          </div>
        ) : (
          // 都道府県API - データ取得成功時の UI
          prefectures && (
            <div css={[styles.container, styles.mainLayout]}>
              <PrefectureFieldset
                prefectures={prefectures?.result}
                handleCheck={handlePrefectureCheck}
              />
              <PopulationGraph data={populations} />
            </div>
          )
        )}
      </main>

      <Toast isOpen={!!populationErrorMessage} onClose={handleResetError}>
        <Alert type="error">{populationErrorMessage}</Alert>
      </Toast>
    </>
  )
}
