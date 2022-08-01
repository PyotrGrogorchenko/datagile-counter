import { Column, Row } from '@src/components/tablePage/types'
import { getObjectStore } from './dbService'

export const saveColumn = async (tableName: string, column: Column ) => {
  const columns = await getObjectStore(tableName, 'columns', 'readwrite')
  return new Promise((resolve, reject) => {
    const req = columns.put(column)
    req.onsuccess = () => {
      resolve({ ok: true, message: 'Saved' })
    }
    req.onerror = () => {
      reject(new Error('Failed'))
    }
  })
}

export const getColumns = async (tableName: string): Promise<Column[]> => {
  const columns = await getObjectStore(tableName, 'columns', 'readonly')
  return new Promise((resolve, reject) => {
    const req = columns.getAll()
    req.onsuccess = () => {
      resolve(req.result)
    }
    req.onerror = () => {
      reject(new Error('Failed'))
    }
  })
}

export const saveRow = async (tableName: string, row: Row ) => {
  const rows = await getObjectStore(tableName, 'rows', 'readwrite')
  return new Promise((resolve, reject) => {
    const req = rows.put(row)
    req.onsuccess = () => {
      resolve({ ok: true, message: 'Saved' })
    }
    req.onerror = () => {
      reject(new Error('Failed'))
    }
  })
}

export const getRows = async (tableName: string): Promise<Row[]> => {
  const rows = await getObjectStore(tableName, 'rows', 'readonly')
  return new Promise((resolve, reject) => {
    const req = rows.getAll()
    req.onsuccess = () => {
      resolve(req.result)
    }
    req.onerror = () => {
      reject(new Error('Failed'))
    }
  })
}


