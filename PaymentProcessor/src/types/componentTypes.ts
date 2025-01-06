import { RegisterOptions, UseFormRegister } from 'react-hook-form'

export interface FormValues extends Partial<ShippingAddress> {
  cardName: string
  cardNumber: number
  expDate: string
  code: number
}

export interface InputTypes {
  register: UseFormRegister<FormValues>
  type: string
  placeholder: string
  title: keyof FormValues
  role: string
  validation?: RegisterOptions<FormValues>
}

export type ModalType = {
  children: React.ReactNode
  onClose: () => void
}

export type ShippingAddress = {
  address: string
  country: string
  zipCode: number
}

export type CardData = {
  id: string
  title: string
  description: string
  price: number
  imageUrl: string
  stock: number
}
