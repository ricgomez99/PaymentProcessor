import './App.css'
import { ProductsProvider } from './components/ProductsProvider'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './routes/Routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const routes = Routes()
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>
        <main>
          <RouterProvider router={routes} />
        </main>
      </ProductsProvider>
    </QueryClientProvider>
  )
}

export default App
