import { styles } from './style'

export const Header = () => (
  <header data-layout="Header" css={styles.header}>
    <div css={[styles.container, styles.headerLayout]}>
      <h1>
        RESAS Graph App -{' '}
        <span css={styles.headerSmallText}>
          都道府県ごとの人口遷移グラフ表示アプリ
        </span>
      </h1>
    </div>
  </header>
)
