import { RegisterOptions, UseFormRegister } from 'react-hook-form'

export interface FormValues {
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

export type CardData = {
  title: string
  description: string
  price: number
  imageUrl: string
  stock: number
}
