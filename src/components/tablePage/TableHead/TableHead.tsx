import { FC } from 'react'
import { useTable } from '../TableProvider'
import styles from './styles.css'

export const TableHead: FC = () => {
  const { selectColumns } = useTable()

  return (
    <>
      <thead className={styles.thead}>
        <tr>
          {selectColumns().map((c, i) =>
            <th
              className={styles.th}
              key={c.id}
              data-column={`${i}`}
            >{c.data.view}</th>)}
        </tr>
      </thead>
    </>
  )
}
