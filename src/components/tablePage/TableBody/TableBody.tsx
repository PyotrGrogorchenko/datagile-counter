import { FC } from 'react'
import { useTable } from '../TableProvider'
import styles from './styles.css'

export const TableBody: FC = () => {
  const { selectRows, selectColumns } = useTable()

  return (
    <>
      <tbody>
        {selectRows().map((r, rI) =>
          <tr
            className={styles.tr}
            key ={r.id}
            data-row={`${rI}`}
          >
            {selectColumns().map((k, kI) =>
              <td
                className={styles.td}
                key={k.id}
                contentEditable
                suppressContentEditableWarning
                data-cell={`${rI}:${kI}`}
              >{r[k.id]}</td>)}
          </tr>
        )}
      </tbody>
    </>
  )
}
