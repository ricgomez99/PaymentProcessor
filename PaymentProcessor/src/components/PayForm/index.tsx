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
import { useProductContext } from '../../hooks/useProductContext'
import { useNavigate } from 'react-router-dom'
import useGetCardType from '../../hooks/useGetCardType'

export default function PayForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' })
  const { savePaymentDetails, saveCardType } = useProductContext()
  const goTo = useNavigate()
  const { cardNumber } = watch()

  const cardType = useGetCardType(cardNumber?.toString())
  const onSubmit = handleSubmit(async (data) => {
    savePaymentDetails(data)
    saveCardType(cardType)
    goTo('order-details')
  })

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col justify-center gap-2"
    >
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
      <aside className="flex flex-col gap-2">
        <InputField
          title="address"
          type="text"
          placeholder="shipping address"
          role="shippingAddress"
          register={register}
        />
        <div className="flex flex-row justify-between">
          <InputField
            title="country"
            type="text"
            placeholder="country"
            role="country"
            register={register}
          />
          <InputField
            title="zipCode"
            type="number"
            placeholder="zip code"
            role="zipCode"
            register={register}
          />
        </div>
      </aside>
      <button>Continue</button>
    </form>
  )
}
