export type ColumnData = {
  view: string
}
export type Column = {
  id: string
  data: ColumnData
}

export type Row = Record<string, string> & { id: string }
