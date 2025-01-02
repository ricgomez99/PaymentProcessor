import ProductsContext from '../context'
import { useState } from 'react'
import { FormValues } from '../../types/componentTypes'

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [productId, setProductId] = useState<string | number>('')
  const [cardType, setCardType] = useState('')

  const saveProductId = (id: number | string) => setProductId(id)
  const getProductId = () => productId

  const savePaymentDetails = (details: Partial<FormValues>) => {
    localStorage.setItem('details', JSON.stringify(details))
  }
  const getPaymentDetails = () => {
    const details = localStorage.getItem('details')
    return details !== null ? JSON.parse(details) : null
  }

  const saveCardType = (cardType: string) => setCardType(cardType)
  const getCardType = () => cardType

  return (
    <ProductsContext.Provider
      value={{
        productId,
        cardType,
        saveProductId,
        getProductId,
        savePaymentDetails,
        getPaymentDetails,
        saveCardType,
        getCardType,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
