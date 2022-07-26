import { TablePage, TableProvider } from '@src/components/tablePage'
import { FC } from 'react'

export const Table: FC = () => {
  return (
    <TableProvider>
      <TablePage/>
    </TableProvider>
  )
}
