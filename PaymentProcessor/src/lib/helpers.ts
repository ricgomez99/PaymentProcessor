import { OrderPayload, PaymentPayload, ProductPayload } from '../types/helpers'
import fetchData from './fetchData'
import postData from './postData'

export const fetchProducts = async (): Promise<ProductPayload[]> =>
  await fetchData('products')

export const fetchOrders = async () => await fetchData('orders')

export const postOrder = async (payload: OrderPayload) =>
  await postData('orders', payload)

export const postPayment = async (payload: PaymentPayload) =>
  await postData('payment', payload)
