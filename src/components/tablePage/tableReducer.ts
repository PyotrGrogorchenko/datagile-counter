
export type Column = {
  key: string
  view: string
}

type ActionAddColumn = {
  type: 'ADD_COLUMN',
  payload: Column
}

type Actions = ActionAddColumn
// type StateСondition = 'done' | 'loading' | 'error';

export const getInitialState = () => {
  const columns = [
    { key: 'id', view: 'id' },
    { key: 'name', view: 'name' },
    { key: 'gender', view: 'gender' }
  ]

  const rows = [
    { id: 1, name: 'Vasya', gender: 'male' },
    { id: 2, name: 'Lena', gender: 'female' },
    { id: 3, name: 'John', gender: 'male' }
  ]


  return {
    columns,
    rows
  }
}

export type State = ReturnType<typeof getInitialState>;

export const addColumn = (c: Column): ActionAddColumn => ({ type: 'ADD_COLUMN', payload: c })

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, action.payload]}
    default:
      return state
  }
}
