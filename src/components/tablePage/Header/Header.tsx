import { FC } from 'react'
import { DialogColumn } from '../DialogColumn'
import styles from './styles.css'

export const Header: FC = () => {
  return (
    <div className={styles.container}>
      <DialogColumn/>
    </div>
  )
}
