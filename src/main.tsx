import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AllContextsProvider } from './contexts'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AllContextsProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AllContextsProvider>
  </React.StrictMode>,
)
