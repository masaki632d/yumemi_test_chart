import { ChangeEvent } from 'react'

import { styles } from './style'

import { CheckBox } from '@components/TopPage/PrefectureFieldset/CheckBox'
import { Prefecture } from 'src/utils/Prefecture/Prefecture'

type Props = {
  prefectures?: Prefecture[]
  handleCheck: (
    prefCode: number,
    prefName: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void
}

export const PrefectureFieldset = ({ prefectures, handleCheck }: Props) => {
  return (
    <fieldset data-layout="PrefectureFieldset" css={styles.prefectureFieldset}>
      <legend css={styles.prefectureLegend}>都道府県</legend>

      <div css={styles.prefectureLayout}>
        {prefectures?.map((prefecture) => (
          <CheckBox
            key={prefecture.prefCode}
            label={prefecture.prefName}
            onChange={handleCheck(prefecture.prefCode, prefecture.prefName)}
          />
        ))}
      </div>
    </fieldset>
  )
}
