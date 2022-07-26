import { FC, ReactNode } from 'react'
import styles from './modal.css'

type Props = {
  children: ReactNode
}

export const Modal: FC<Props> = ({ children }) => {
  return (
    <div className={ styles.container }>
      <div className={ styles.content }>
        {children}
      </div>
    </div>
  )
}
