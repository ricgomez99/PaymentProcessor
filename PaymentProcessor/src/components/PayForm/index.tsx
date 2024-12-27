import { useForm } from 'react-hook-form'
import InputField from '../InputField'

export default function PayForm() {
  const { register } = useForm()
  return (
    <form className="w-full flex flex-col">
      <InputField
        title="cardName"
        type="text"
        placeholder="name"
        role="cardName"
        register={register}
      />
      <InputField
        title="card"
        type="number"
        placeholder="card number"
        role="cardNumber"
        register={register}
      />
      <InputField
        title="expDate"
        type="date"
        placeholder="exp. date"
        role="expDate"
        register={register}
      />
      <InputField
        title="code"
        type="number"
        placeholder="security code"
        role="securityCode"
        register={register}
      />
    </form>
  )
}
