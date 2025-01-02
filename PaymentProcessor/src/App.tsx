import './App.css'
import { ProductsProvider } from './components/ProductsProvider'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './routes/Routes'

function App() {
  const routes = Routes()
  return (
    <ProductsProvider>
      <main>
        <RouterProvider router={routes} />
      </main>
    </ProductsProvider>
  )
}

export default App
