export interface PaymentPayload {
  number: string
  cvc: string
  exp_month: string
  exp_year: string
  card_holder: string
}

export interface ProductPayload {
  _id?: string
  title: string
  description: string
  price: number
  imageUrl: string
  stock: number
}

export interface OrderPayload {
  productId: string
  quantity: number
  customer: string
  shippingAddress: string
  productDetails: ProductPayload
}

export type MapOrder = {
  productId: string
  quantity: number
  customer: string
  address: string
  product: ProductPayload
}

export type PostPayload = PaymentPayload | OrderPayload
