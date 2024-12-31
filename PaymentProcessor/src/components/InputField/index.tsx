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
      className="bg-transparent text-slate-400 border-slate-400 border py-2 px-4 rounded-lg focus:border-slate-400 focus:border-none focus:outline-none focus:ring-2"
      id={title}
      type={type}
      placeholder={placeholder}
      role={role}
      {...register(title, validation)}
    />
  )
}
