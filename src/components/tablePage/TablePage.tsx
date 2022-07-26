import { FC } from 'react'
import { DialogAddColumn } from './DialogAddColumn'
import { useTable } from './TableProvider'

export const TablePage: FC = () => {
  const { selectColumns } = useTable()

  return (
    <>
      <DialogAddColumn/>
      <table border={1} >
        <thead>
          <tr>
            {selectColumns().map((c) => <th key={c.key}>{c.view}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>body</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  )
}
