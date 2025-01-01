import { createContext, useContext } from 'react'
import { ProductDetails } from '../types/contextTypes'

export const DashboardContext = createContext<ProductDetails | undefined>(
  undefined
)
export function useProductContext() {
  const product = useContext(DashboardContext)

  if (product === undefined) {
    throw new Error('useProductContext must be used with DashboardContext')
  }

  return product
}
