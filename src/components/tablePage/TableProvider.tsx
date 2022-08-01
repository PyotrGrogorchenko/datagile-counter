import { getColumns, getRows, saveColumn, saveRow } from '@src/services/tableService'
import { getId } from '@src/utils/getId'
import { createContext, FC, ReactNode, useContext, useEffect, useReducer } from 'react'
import { getInitialState, reducer, addColumn, addRow, setValue, setColumns, setRows } from './tableReducer'
import { Row, ColumnData, Column } from './types'

type Props = {
  children: ReactNode
}

export type Context = {
  postColumn: (column: ColumnData) => void
  selectColumns: () => Column[]
  postRow: () => void
  selectRows: () => Row[]
  putValue: (dataCell: string, value: string) => void
  // fetchTable: (id: string) => void
}

const TableContext = createContext<Partial<Context>>({})
export const useTable = (): Context => useContext(TableContext) as Context

export const TableProvider: FC<Props> = (props) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, getInitialState())
  const { tableName, rows } = state

  const postColumn = (c: ColumnData) => {
    const column = {
      id: getId(),
      data: c
    }

    dispatch(addColumn(column))
    saveColumn(tableName, column)
  }

  const postRow = () => {
    const id = getId()
    dispatch(addRow(id))
    saveRow(tableName, { id })
  }

  const selectColumns = () => state.columns
  const selectRows = () => state.rows

  const putValue = (dataCell: string, val: string) => {
    const [row, col] = dataCell.split(':')
    dispatch(setValue(row, col, val))
    saveRow(tableName, rows[+row])
  }

  const fetchData = async () => {
    const resColumns = await getColumns(tableName)
    dispatch(setColumns(resColumns))
    const resRows = await getRows(tableName)
    dispatch(setRows(resRows))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <TableContext.Provider value={{
      postColumn,
      selectColumns,
      postRow,
      selectRows,
      putValue
    } as Context}
    >
      {children}
    </TableContext.Provider>
  )
}
