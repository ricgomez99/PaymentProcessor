import { useForm } from 'react-hook-form'
import InputField from '../InputField'
import {
  cardCodeValidation,
  cardExpDateValidation,
  cardNumberValidation,
  nameValidation,
} from '../../lib/validations'

export default function PayForm() {
  const { register, watch } = useForm()
  const { cardNumber, expDate, code } = watch()
  return (
    <form className="w-full flex flex-col">
      <InputField
        title="cardName"
        type="text"
        placeholder="name"
        role="cardName"
        register={register}
        validation={nameValidation}
      />
      <InputField
        title="cardNumber"
        type="number"
        placeholder="card number"
        role="cardNumber"
        register={register}
        validation={cardNumberValidation(cardNumber)}
      />
      <InputField
        title="expDate"
        type="date"
        placeholder="exp. date"
        role="expDate"
        register={register}
        validation={cardExpDateValidation(expDate)}
      />
      <InputField
        title="code"
        type="number"
        placeholder="security code"
        role="securityCode"
        register={register}
        validation={cardCodeValidation(code)}
      />
    </form>
  )
}
