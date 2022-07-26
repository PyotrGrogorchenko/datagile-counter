import { Button } from '@src/components/UI/Button'
import { Modal } from '@src/components/UI/Modal/Modal'
import { FC, useCallback } from 'react'
import { useTable } from './TableProvider'

export const Table: FC = () => {
  const { selectColumns } = useTable()

  const addColumnClick = useCallback(() => {
    console.log('addColumnClick')
  }, [])

  return (
    <>
      <Modal></Modal>
      <Button onClick={addColumnClick}>Add column</Button>
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
