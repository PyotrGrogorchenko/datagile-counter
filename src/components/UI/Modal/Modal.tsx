import { FC, HTMLAttributes, ReactNode } from 'react'
import styles from './styles.css'

type Props = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

export const Modal: FC<Props> = ({ children }) => {
  return (
    <div className={ styles.container }>
      {children}
    </div>
  )
}
