import { SeriesOptionsType } from 'highcharts'

import { styles } from './style'

import { PopulationGraph } from '@components/TopPage/PopulationGraph'
import { PrefectureFieldset } from '@components/TopPage/PrefectureFieldset'
import { Prefecture } from 'src/utils/Prefecture/Prefecture'

type Props = {
  prefectures: Prefecture[]
  populations: SeriesOptionsType[]
  handleCheck: (
    prefCode: number,
    prefName: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SuccessState = ({
  prefectures,
  populations,
  handleCheck,
}: Props) => (
  <div css={[styles.container, styles.mainLayout]}>
    <PrefectureFieldset prefectures={prefectures} handleCheck={handleCheck} />

    <PopulationGraph data={populations} />
  </div>
)
