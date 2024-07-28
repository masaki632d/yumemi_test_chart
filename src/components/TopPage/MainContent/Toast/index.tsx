import { createPortal } from 'react-dom'

import { styles } from './style'

type Props = {
  isOpen: boolean
  autoHideDuration?: number
  onClose: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

export const Toast = ({
  isOpen,
  autoHideDuration = 3000,
  onClose,
  children,
}: Props) => {
  // 指定時間後 に トーストを閉じる
  if (isOpen) {
    setTimeout(onClose, autoHideDuration)
  }

  // クライアント側 の処理になるので、Next.js でのサーバー側 では ポータル を使わないようにする
  if (typeof window === 'undefined') {
    return (
      <div
        data-layout="Toast"
        data-testid="portalToast"
        css={[styles.toast, isOpen && styles.toastOpen]}
      >
        {children}
      </div>
    )
  }

  return createPortal(
    <div
      data-layout="Toast"
      data-testid="portalToast"
      css={[styles.toast, isOpen && styles.toastOpen]}
    >
      {children}
    </div>,
    document.body
  )
}
