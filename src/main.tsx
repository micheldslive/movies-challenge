import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  AllProviders,
  MovieProvider,
  StateProvider,
  CartProvider,
  WishlistProvider,
  CheckoutProvider,
} from './contexts'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AllProviders
      with={[
        MovieProvider,
        StateProvider,
        CartProvider,
        WishlistProvider,
        CheckoutProvider,
      ]}
    >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AllProviders>
  </React.StrictMode>,
)
