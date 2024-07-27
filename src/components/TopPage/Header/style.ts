import { css } from '@emotion/react'

import { breakPoint, colors } from '@styles/constants'

export const styles = {
  header: css`
    width: 100%;
    padding: 16px 0;
    background-color: ${colors.headerBgColor};
  `,
  container: css`
    max-width: ${breakPoint.lg}px;
    padding: 0 4%;
    margin: 0 auto;
  `,
  headerLayout: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  headerSmallText: css`
    font-size: 22px;
  `,
}
