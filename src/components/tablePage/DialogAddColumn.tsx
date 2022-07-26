import { Button } from '@src/components/UI/Button'
import { Input } from '@src/components/UI/Input'
import { Modal } from '@src/components/UI/Modal/Modal'
import { FC, useCallback, useState } from 'react'
import { useTable } from './TableProvider'

export const DialogAddColumn: FC = () => {
  const [show, setShow] = useState(false)
  const { postColumn } = useTable()

  const addColumnClick = useCallback(() => {
    setShow(true)
  }, [setShow])

  const closeClick = useCallback(() => {
    setShow(false)
  }, [setShow])

  const saveColumn = useCallback(() => {
    postColumn({
      key: '4',
      view: '4'
    })
  }, [postColumn])

  return (
    <>
      <Button onClick={addColumnClick}>Add column</Button>
      {show &&
        <Modal>
          <Input></Input>
          <Button onClick={closeClick}>Close</Button>
          <Button onClick={saveColumn}>Save</Button>
        </Modal>}
    </>
  )
}
