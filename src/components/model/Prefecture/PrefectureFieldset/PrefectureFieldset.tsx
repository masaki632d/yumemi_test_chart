import { css } from '@emotion/react'
import { FC } from 'react'

import { CheckBox } from '@components/common/CheckBox'
import { Prefecture } from '@models/Prefecture'

type Props = {
  prefectures: Prefecture[]
}

export const PrefectureFieldset: FC<Props> = ({ prefectures }) => {
  return (
    <fieldset css={prefectureFieldset}>
      <legend css={prefectureLegend}>都道府県</legend>
      <div css={prefectureLayout}>
        {prefectures.map((prefecture) => {
          return (
            <CheckBox key={prefecture.prefCode} label={prefecture.prefName} />
          )
        })}
      </div>
    </fieldset>
  )
}

const prefectureFieldset = css`
  border: none;
`

const prefectureLegend = css`
  font-size: 32px;
`

const prefectureLayout = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 136px));
  gap: 8px;
`
