import { Alert } from '../Toast/Alert'

import { styles } from './style'

type Props = {
  errorMessage: string
}

export const ErrorState = ({ errorMessage }: Props) => (
  <div css={styles.container}>
    <Alert type="error">{errorMessage}</Alert>
  </div>
)
