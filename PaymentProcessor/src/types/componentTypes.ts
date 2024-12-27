import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

export interface InputTypes {
  register: UseFormRegister<FieldValues>
  type: string
  placeholder: string
  title: string
  role: string
  validation?: RegisterOptions<FieldValues, string> | undefined
}
