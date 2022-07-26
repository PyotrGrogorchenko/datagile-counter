import { createContext, FC, ReactNode, useContext, useReducer } from 'react'
import { Column, getInitialState, reducer, addColumn } from './reducer'

// import { setEvents, getInitialState, State, setDay } from './reducer';
// import { reducer, setCondition } from './reducer';
// import { fetchEvents } from '../utils/fetchData';

type Props = {
  children: ReactNode
}

export type Context = {
  postColumn: (column: Column) => void
  selectColumns: () => Column[]
}

const TableContext = createContext<Partial<Context>>({})
export const useTable = (): Context => useContext(TableContext) as Context

export const TableProvider: FC<Props> = (props) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, getInitialState())

  const postColumn = (c: Column) => {
    dispatch(addColumn(c))
  }

  const selectColumns = () => state.columns


  return (
    <TableContext.Provider value={{
      postColumn,
      selectColumns
    } as Context}
    >
      {children}
    </TableContext.Provider>
  )
}
