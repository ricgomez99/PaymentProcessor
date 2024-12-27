import { InputTypes } from '../../types/componentTypes'

export default function InputField({
  register,
  type,
  placeholder,
  title,
  role,
  validation,
}: InputTypes) {
  return (
    <input
      id={title}
      type={type}
      placeholder={placeholder}
      role={role}
      {...register(title, validation)}
    />
  )
}
