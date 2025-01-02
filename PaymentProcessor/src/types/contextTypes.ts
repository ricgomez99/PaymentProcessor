import { FormValues } from './componentTypes'

type Details = Partial<FormValues>
export interface ProductDetails {
  productId: number | string
  cardType: string
  saveProductId: (id: number | string) => void
  getProductId: () => number | string
  savePaymentDetails: (details: Details) => void
  getPaymentDetails: () => Details | string | null
  saveCardType: (cardType: string) => void
  getCardType: () => string
}
