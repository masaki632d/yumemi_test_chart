import { css } from '@emotion/react'

import { breakPoint } from '@styles/constants'

export const styles = {
  container: css`
    max-width: ${breakPoint.lg}px;
    padding: 0 4%;
    margin: 0 auto;
    @media (min-width: ${breakPoint.sm}px) {
      padding: 0 8%;
    }
  `,
  mainLoadingLayout: css`
    text-align: center;
  `,
  mainLoadingText: css`
    font-size: 24px;
  `,
}