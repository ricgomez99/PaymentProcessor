import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

export interface InputTypes {
  register: UseFormRegister<FieldValues>
  type: string
  placeholder: string
  title: string
  role: string

  validation?:
    | RegisterOptions<FieldValues, string>
    | ValidateFunction
    | undefined
}

type ValidateFunction = {
  required: {
    value: boolean
    message: string
  }

  validate: (data: FieldValues) => void
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
