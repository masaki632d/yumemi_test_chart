import { css } from '@emotion/react'
import { FC, ReactNode } from 'react'

import { colors } from '@styles/constants'

type Props = {
  type: 'info' | 'error'
  children: ReactNode
}

export const Alert: FC<Props> = ({ type = 'info', children }) => {
  return (
    <div
      css={[
        alert,
        alertLayout,
        type === 'info' && alertInfo,
        type === 'error' && alertError,
      ]}
    >
      <div
        css={[
          alertType,
          type === 'info' && alertInfoType,
          type === 'error' && alertErrorType,
        ]}
      >
        {type}
      </div>

      {children}
    </div>
  )
}

const alert = css`
  padding: 12px;
  border-radius: 12px;
`
const alertLayout = css`
  display: flex;
`
const alertType = css`
  margin-right: 16px;
  font-weight: bold;
  text-transform: capitalize;
`
const alertInfo = css`
  background-color: ${colors.alertInfoBgColor};
  border: 1px solid ${colors.alertInfoColor};
`
const alertInfoType = css`
  color: ${colors.alertInfoColor};
`
const alertError = css`
  background-color: ${colors.alertErrorBgColor};
  border: 1px solid ${colors.alertErrorColor};
`
const alertErrorType = css`
  color: ${colors.alertErrorColor};
`
