export const calculatePrice = (
  shipping: number,
  delivery: number,
  productPrice: number
) => Math.abs(shipping + delivery + productPrice)
