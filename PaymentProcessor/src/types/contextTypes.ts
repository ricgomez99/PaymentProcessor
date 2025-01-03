import { FormValues } from './componentTypes'

type Details = Partial<FormValues>
export interface ProductDetails {
  cardType: string
  saveProductId: (id: number | string) => void
  getProductId: () => string | null
  savePaymentDetails: (details: Details) => void
  getPaymentDetails: () => Details | null
  saveCardType: (cardType: string) => void
  getCardType: () => string
}
