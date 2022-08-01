import { Column, Row } from './types'

type ActionADDColumn = {
  type: 'ADD_COLUMN'
  payload: Column
}

type ActionSetColumns = {
  type: 'SET_COLUMNS'
  payload: Column[]
}

type ActionAddRow = {
  type: 'ADD_ROW'
  payload: string
}

type ActionSetValue = {
  type: 'SET_VALUE'
  payload: {
    row: string
    col: string
    val: string
  }
}

type ActionSetRows = {
  type: 'SET_ROWS'
  payload: Row[]
}

type Actions = ActionADDColumn | ActionAddRow | ActionSetValue | ActionSetColumns | ActionSetRows

export const getInitialState = () => {
  const columns: Column[] = []
  const rows: Row[] = []

  return {
    tableName: 'tableFirst',
    columns,
    rows
  }
}

export type State = ReturnType<typeof getInitialState>;

export const addColumn = (c: Column): ActionADDColumn => ({ type: 'ADD_COLUMN', payload: c })
export const setColumns = (c: Column[]): ActionSetColumns => ({ type: 'SET_COLUMNS', payload: c })

export const addRow = (id: string): ActionAddRow => ({ type: 'ADD_ROW', payload: id })

export const setValue = (r: string, c: string, v: string): ActionSetValue => ({ type: 'SET_VALUE', payload: { row: r, col: c, val: v }})
export const setRows = (r: Row[]): ActionSetRows => ({ type: 'SET_ROWS', payload: r })

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'ADD_COLUMN':
      state.columns.push({ ...action.payload })
      return { ...state, columns: [...state.columns]}
    case 'SET_COLUMNS':
      return { ...state, columns: [...action.payload]}
    case 'ADD_ROW':
      state.rows.push({ id: action.payload })
      return { ...state, rows: [...state.rows]}
    case 'SET_ROWS':
      return { ...state, rows: [...action.payload]}
    case 'SET_VALUE':
      const { row, col, val } = action.payload
      const column = state.columns[+col]
      state.rows[+row][column.id] = val
      return { ...state }
    default:
      return state
  }
}
