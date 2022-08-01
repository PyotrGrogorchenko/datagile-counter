import { ErrorBoundary } from './components/ErrorBoundary'
import { Table } from '@src/pages/Table'
import './app.css'

export const App = () => {
  return (
    <ErrorBoundary>
      <Table/>
    </ErrorBoundary>
  )
}

