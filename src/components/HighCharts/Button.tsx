import { FC } from 'react'

// サンプルButtonのコンポーネント
export const Button: FC = () => <button style={Styles.button}>hoge</button>

const Styles: { [key: string]: React.CSSProperties } = {
  button: {
    margin: '1rem',
  },
}
