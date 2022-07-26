import { ErrorBoundary } from './components/ErrorBoundary'
import { Table } from '@src/pages/Table'

export const App = () => {
  return (
    <ErrorBoundary>
      <Table/>
    </ErrorBoundary>
  )
}

