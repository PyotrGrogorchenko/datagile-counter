import { ErrorBoundary } from './components/ErrorBoundary'
import { Table } from '@src/pages/table/Table'
import { TableProvider } from '@src/pages/table/TableProvider'

export const App = () => {
  return (
    <ErrorBoundary>
      <TableProvider>
        <Table/>
      </TableProvider>
    </ErrorBoundary>
  )
}

