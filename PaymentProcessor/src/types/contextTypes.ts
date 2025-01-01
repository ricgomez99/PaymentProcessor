import { FormValues } from './componentTypes'

export interface ProductDetails {
  productId: number | string
  paymentDetails: Partial<FormValues>
}
