import { FC, FocusEvent, useCallback } from 'react'
import { TableBody } from '../TableBody'
import { TableFoot } from '../TableFoot'
import { TableHead } from '../TableHead'
import { useTable } from '../TableProvider'
import styles from './styles.css'

export const Table: FC = () => {
  const { putValue } = useTable()

  const tableOnBlur = useCallback((e: FocusEvent) => {
    const el = e.target as HTMLTableCellElement
    const dataCell = el.getAttribute('data-cell')
    if (!dataCell) return
    putValue(dataCell, el.innerText)
  }, [putValue])


  return (
    <>
      <table className={ styles.table } onBlur={tableOnBlur}>
        <TableHead/>
        <TableBody/>
        <TableFoot/>
      </table>
    </>
  )
}
