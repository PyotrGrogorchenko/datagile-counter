import { ButtonHTMLAttributes, FC } from 'react'
import styles from './styles.css'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = (props) => {
  return (
    <button className={styles.button} {...props}/>
  )
}
