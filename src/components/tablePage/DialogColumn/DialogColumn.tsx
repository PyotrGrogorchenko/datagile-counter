import { Button } from '@src/components/UI/Button'
import { Input } from '@src/components/UI/Input'
import { Select } from '@src/components/UI/Select'
import { Modal } from '@src/components/UI/Modal'
import { FC, useCallback, useState, useRef, ChangeEvent } from 'react'
import { useTable } from '../TableProvider'
import styles from './styles.css'
import { Label } from '@src/components/UI/Label'

// const patterns = {
//   text: '',
//   number: '/\b0\.0{1,3}\b|\b0\b/gm',
//   date: ''
// }

export const DialogColumn: FC = () => {
  const [show, setShow] = useState(false)
  const { postColumn } = useTable()

  const view = useRef<HTMLInputElement>(null)
  const mask = useRef<HTMLInputElement>(null)

  const addColumnClick = useCallback(() => {
    setShow(true)
  }, [setShow])

  const closeClick = useCallback(() => {
    setShow(false)
  }, [setShow])

  const typeChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
  }, [])

  const maskInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    e.target.value = ''
    // console.log(e.target.value)
  }, [])

  const saveColumn = useCallback(() => {
    if (!view.current?.value) {
      alert('View not filled in')
      return
    }

    postColumn({
      view: view.current.value
    })
    view.current.value = ''
    setShow(false)
  }, [postColumn])

  return (
    <>
      <Button onClick={addColumnClick}>Add column</Button>
      {show &&
        <Modal>
          <div className={ styles.container }>
            <Input ref={view} label='Name'/>
            <Select
              onChange={typeChange}
              options={[{ value: 'text' }, { value: 'number' }, { value: 'date' }]}
              label='Type'
            />
            <Input onInput={maskInput} ref={mask} label='Format'/>
            <Button onClick={closeClick}>Close</Button>
            <Button onClick={saveColumn}>Save</Button>
          </div>
        </Modal>}
    </>
  )
}
