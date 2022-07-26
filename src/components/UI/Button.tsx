import { ButtonHTMLAttributes, FC } from 'react'

type Props = { color?: 'red' | 'green'} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = (props) => {
  return (
    <button {...props}/>
  )
}
