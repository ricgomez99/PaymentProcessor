import { OrderPayload } from '../types/helpers'
import { MapOrder } from '../types/helpers'

export const mapOrderPayload = ({
  productId,
  quantity,
  customer,
  address,
  product,
}: MapOrder): OrderPayload => {
  return {
    productId: productId,
    quantity: quantity,
    customer: customer,
    shippingAddress: address,
    productDetails: product,
  }
}
