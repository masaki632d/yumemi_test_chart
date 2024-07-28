import { styles } from './style'

export const LoadingState = () => (
  <div css={[styles.container, styles.mainLoadingLayout]}>
    <p css={styles.mainLoadingText}>Loading...</p>
  </div>
)
