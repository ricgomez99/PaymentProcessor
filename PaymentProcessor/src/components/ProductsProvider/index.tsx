import ProductsContext from '../context'
import { useState } from 'react'
import { FormValues } from '../../types/componentTypes'

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [cardType, setCardType] = useState('')

  const saveProductId = (id: number | string) =>
    localStorage.setItem('productId', String(id))
  const getProductId = () => {
    const id = localStorage.getItem('productId')
    return id !== null ? id : null
  }

  const savePaymentDetails = (details: Partial<FormValues>) => {
    localStorage.setItem('details', JSON.stringify(details))
  }
  const getPaymentDetails = () => {
    const details = localStorage.getItem('details')
    const parsed = details !== null ? JSON.parse(details) : null
    return parsed ? { ...parsed } : null
  }

  const saveCardType = (cardType: string) => setCardType(cardType)
  const getCardType = () => cardType

  return (
    <ProductsContext.Provider
      value={{
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
