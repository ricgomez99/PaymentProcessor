import { useContext } from 'react'
import ProductsContext from '../components/context'

export function useProductContext() {
  const product = useContext(ProductsContext)

  if (product === undefined) {
    throw new Error('useProductContext must be used with DashboardContext')
  }

  return product
}
