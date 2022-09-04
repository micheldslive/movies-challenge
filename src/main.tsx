import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AllContextsProvider } from './contexts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AllContextsProvider>
      <App />
    </AllContextsProvider>
  </React.StrictMode>,
)
