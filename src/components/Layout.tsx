import { ReactNode } from 'react'
import { notojp } from '../utiles/font'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div lang="ja-JP" className={`${notojp.variable}`}>
      <body>{children}</body>
    </div>
  )
}

export default Layout
