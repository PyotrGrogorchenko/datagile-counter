import { FC } from 'react'
import { Table } from '../Table'
import styles from './styles.css'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const TablePage: FC = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <Table/>
      <Footer/>
    </div>
  )
}
