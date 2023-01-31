import { css } from '@emotion/react'
import { FC } from 'react'

import { Alert } from '@components/common/Alert'
import { Header } from '@components/common/Header'
import { Toast } from '@components/common/Toast'
import { PopulationGraph } from '@components/model/Population/PopulationGraph'
import { PrefectureFieldset } from '@components/model/Prefecture/PrefectureFieldset'
import usePopulation from '@hooks/usePopulation'
import usePrefecture from '@hooks/usePrefecture'
import { breakPoint } from '@styles/constants'

export const HomePage: FC = () => {
  const {
    prefectures,
    isLoading,
    errorMessage: prefectureErrMsg,
  } = usePrefecture()
  const {
    populations,
    errorMessage: populationErrMsg,
    handlePrefectureCheck,
    handleResetError,
  } = usePopulation()

  return (
    <>
      <Header />
      <main css={main}>
        {isLoading ? (
          // 都道府県 API 読み込み中の UI
          <div css={[container, mainLoadingLayout]}>
            <p css={mainLoadingText}>Loading...</p>
          </div>
        ) : prefectureErrMsg ? (
          // 都道府県 API エラー時の UI
          <div css={container}>
            <Alert type="error">{prefectureErrMsg}</Alert>
          </div>
        ) : (
          // 都道府県 API データ取得成功時の UI
          prefectures && (
            <div css={[container, mainLayout]}>
              <PrefectureFieldset
                prefectures={prefectures?.result}
                handleCheck={handlePrefectureCheck}
              />
              <PopulationGraph data={populations} />
            </div>
          )
        )}
      </main>
      <Toast isOpen={!!populationErrMsg} onClose={handleResetError}>
        <Alert type="error">{populationErrMsg}</Alert>
      </Toast>
    </>
  )
}

const main = css`
  margin: 24px 0;
`
const container = css`
  max-width: ${breakPoint.lg}px;
  padding: 0 4%;
  margin: 0 auto;
  @media (min-width: ${breakPoint.sm}px) {
    padding: 0 8%;
  }
`
const mainLoadingLayout = css`
  text-align: center;
`
const mainLoadingText = css`
  font-size: 24px;
`
const mainLayout = css`
  display: grid;
  row-gap: 32px;
`
