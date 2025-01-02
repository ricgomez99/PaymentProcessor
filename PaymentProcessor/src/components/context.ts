import { createContext } from 'react'
import { ProductDetails } from '../types/contextTypes'

const ProductsContext = createContext<ProductDetails | undefined>(undefined)

export default ProductsContext
