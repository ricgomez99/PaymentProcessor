import { useForm } from 'react-hook-form'
import InputField from '../InputField'
import {
  cardCodeValidation,
  cardExpDateValidation,
  cardNumberValidation,
  nameValidation,
} from '../../lib/validations'
import ErrorMessage from '../ErrorMessage'
import { FormValues } from '../../types/componentTypes'

export default function PayForm() {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' })
  return (
    <form className="w-full flex flex-col justify-center gap-2">
      <InputField
        title="cardName"
        type="text"
        placeholder="name"
        role="cardName"
        register={register}
        validation={nameValidation}
      />
      {errors.cardName && (
        <ErrorMessage message={String(errors.cardName.message)} />
      )}
      <InputField
        title="cardNumber"
        type="number"
        placeholder="card number"
        role="cardNumber"
        register={register}
        validation={cardNumberValidation}
      />
      {errors.cardNumber && (
        <ErrorMessage message={String(errors.cardNumber.message)} />
      )}
      <InputField
        title="expDate"
        type="date"
        placeholder="exp. date"
        role="expDate"
        register={register}
        validation={cardExpDateValidation}
      />
      {errors.expDate && (
        <ErrorMessage message={String(errors.expDate.message)} />
      )}
      <InputField
        title="code"
        type="number"
        placeholder="security code"
        role="securityCode"
        register={register}
        validation={cardCodeValidation}
      />
      {errors.code && <ErrorMessage message={String(errors.code.message)} />}
      <button>Continue</button>
    </form>
  )
}
